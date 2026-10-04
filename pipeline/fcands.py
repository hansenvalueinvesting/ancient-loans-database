"""Full-text candidates: DDbDP texts dated 30 BC - AD 284 (HGV) containing loan vocabulary,
minus documents (TM numbers) already in ../reviewed.md. Run in the working folder (idp.data/).
Output: fcands.json (same fields as cands.py, plus 'files' and the matched words 'hits')."""
import glob,re,json,os,unicodedata,collections,xml.etree.ElementTree as ET
from render import render
ns={'t':'http://www.tei-c.org/ns/1.0'}
def yr(v):
    m=re.match(r'(-?)(\d{4})',v or ''); return (-int(m.group(2)) if m.group(1) else int(m.group(2))) if m else None
def plain(s):  # lowercase, no accents/breathings, final sigma -> sigma
    s=unicodedata.normalize('NFD',s.lower())
    return ''.join(c for c in s if not unicodedata.combining(c)).replace('ς','σ')
# loan vocabulary (searched across Leiden brackets/line breaks removed)
VOCAB=re.compile(r'δανει|δανισ|δανιζ|δανεσ|χρησι[σνω]|χρησε[ωι]|εντοκ|προχρ')
if __name__=='__main__':
    reviewed=set(re.findall(r'^\|[^|]*\| (\d+) \|',open(os.path.join(os.path.dirname(__file__) or '.','../reviewed.md')).read(),re.M))
    hgv={}
    for f in glob.glob('idp.data/HGV_meta_EpiDoc/*/*.xml'):
        r=ET.parse(f).getroot()
        dates=[]
        for d in r.iterfind('.//t:origin/t:origDate',ns):
            a=d.attrib; lo=a.get('when') or a.get('notBefore'); hi=a.get('notAfter') or a.get('when') or a.get('notBefore')
            dates.append({'text':''.join(d.itertext()).strip(),'lo':lo,'hi':hi})
        if not dates or yr(dates[0]['lo']) is None: continue
        y0=yr(dates[0]['lo'])
        if not (-30<=y0<=284): continue
        pe=r.find('.//t:div[@subtype="principalEdition"]//t:bibl',ns); ed=''
        if pe is not None:
            ed=' '.join(x for x in (pe.findtext('t:title',default='',namespaces=ns),
                pe.findtext('t:biblScope[@type="volume"]',default='',namespaces=ns),
                pe.findtext('t:biblScope[@type="numbers"]',default='',namespaces=ns)) if x)
        h=os.path.basename(f)[:-4]
        hgv[h]={'hgv':h,'tm':r.findtext('.//t:idno[@type="TM"]',default='',namespaces=ns),
          'ddb':r.findtext('.//t:idno[@type="ddb-hybrid"]',default='',namespaces=ns),
          'title':r.findtext('.//t:titleStmt/t:title',default='',namespaces=ns),'edition':ed,
          'dates':dates,'year0':y0,'place':r.findtext('.//t:origPlace',default='',namespaces=ns),
          'keywords':[t.text or '' for t in r.iterfind('.//t:keywords/t:term',ns)],'files':[],'hits':[]}
    out={}
    for f in glob.glob('idp.data/DDbDP/*/*.xml'):
        s=open(f,encoding='utf8').read()
        m=re.search(r'<idno type="HGV">([^<]*)</idno>',s)
        if not m: continue
        ids=[i for i in m.group(1).split() if i in hgv]
        if not ids: continue
        g=plain(re.sub(r'[\[\]\(\)⟦⟧⟨⟩{}⸌⸍⌜⌝\.\s\d]','',render(f)))
        hits=sorted(set(VOCAB.findall(g)))
        if not hits: continue
        for i in ids:
            x=hgv[i]
            if x['tm'] in reviewed: continue
            x['files'].append(f.replace('idp.data/','')); x['hits']=sorted(set(x['hits']+hits)); out[i]=x
    res=sorted(out.values(),key=lambda x:(x['year0'],x['hgv']))
    json.dump(res,open('fcands.json','w'),ensure_ascii=False,indent=0)
    print(len(res),'candidates; by word:',collections.Counter(w for x in res for w in x['hits']).most_common())

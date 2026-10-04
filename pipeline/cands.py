import glob,re,json,os,xml.etree.ElementTree as ET
ns={'t':'http://www.tei-c.org/ns/1.0'}
def yr(v):
    m=re.match(r'(-?)(\d{4})',v); return (-int(m.group(2)) if m.group(1) else int(m.group(2))) if m else None
out=[]
for f in glob.glob('idp.data/HGV_meta_EpiDoc/*/*.xml'):
    s=open(f,encoding='utf8').read()
    if 'Darlehen' not in s and not re.search(r'<title>[^<]*\b[Ll]oan',s): continue
    r=ET.fromstring(s.encode())
    terms=[t.text or '' for t in r.iterfind('.//t:keywords/t:term',ns)]
    title=r.findtext('.//t:titleStmt/t:title',default='',namespaces=ns)
    if 'Darlehen' not in terms and not re.search(r'\b[Ll]oan',title): continue
    dates=[]
    for d in r.iterfind('.//t:origin/t:origDate',ns):
        a=d.attrib; lo=a.get('when') or a.get('notBefore'); hi=a.get('notAfter') or a.get('when') or a.get('notBefore')
        dates.append({'text':''.join(d.itertext()).strip(),'lo':lo,'hi':hi})
    if not dates or not dates[0]['lo']: continue
    y0=yr(dates[0]['lo'])
    if y0 is None or not (-30<=y0<=284): continue
    pe=r.find('.//t:div[@subtype="principalEdition"]//t:bibl',ns)
    ed=''
    if pe is not None:
        ser=pe.findtext('t:title',default='',namespaces=ns)
        vol=pe.findtext('t:biblScope[@type="volume"]',default='',namespaces=ns)
        num=pe.findtext('t:biblScope[@type="numbers"]',default='',namespaces=ns)
        ed=' '.join(x for x in (ser,vol,num) if x)
    hgv=os.path.basename(f)[:-4]
    out.append({'hgv':hgv,'tm':r.findtext('.//t:idno[@type="TM"]',default='',namespaces=ns),
      'ddb':r.findtext('.//t:idno[@type="ddb-hybrid"]',default='',namespaces=ns),
      'title':title,'edition':ed,'dates':dates,'year0':y0,
      'place':r.findtext('.//t:origPlace',default='',namespaces=ns),
      'keywords':terms})
out.sort(key=lambda x:(x['year0'],x['hgv']))
json.dump(out,open('cands.json','w'),ensure_ascii=False,indent=0)
print(len(out), 'no ddb:',sum(1 for x in out if not x['ddb']))
import collections
print(collections.Counter(x['edition'].split(' ')[0] for x in out).most_common(40))

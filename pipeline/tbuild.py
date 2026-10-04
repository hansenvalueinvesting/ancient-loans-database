import json,re,os,glob,xml.etree.ElementTree as ET
from render import render,T
c={x['hgv']:x for x in json.load(open('cands.json'))}
pilot=['20639','15961','21761','170057','22466','15642','20540','21951','21872','16564','20642','16565','15647','20638','20638','16594','112443','20335','21950','23662']
docs={}  # hgv -> list of loans (brief)
for i,h in enumerate(pilot,1):
    docs.setdefault(h,[]).append({'key':f'ALD-{i:06d}'})
for i in range(1,38):
    for x in json.load(open(f'out/batch{i:02d}.json')):
        for L in x['loans']:
            docs.setdefault(x['hgv'],[]).append({'key':None,'amount':L['amount'],'currency':L['currency'],'borrower':L['borrower'],'lender':L['lender']})
def trans_en(p):
    try: x=ET.parse('idp.data/'+p).getroot()
    except Exception: return ''
    out=[]
    for d in x.iter(T+'div'):
        if d.get('type')=='translation' and (d.get('{http://www.w3.org/XML/1998/namespace}lang') or '').startswith('en'):
            out.append(re.sub(r'\s+',' ',''.join(d.itertext())).strip())
    return '\n'.join(out)
items=[]
for h,loans in docs.items():
    x=c[h]; greek=[];tr=[]
    for p in x['files']:
        if p.startswith('DDbDP'):
            hy=ET.parse('idp.data/'+p).getroot().findtext('.//'+T+'idno[@type="ddb-hybrid"]') or ''
            if hy and hy!=x['ddb'] and not hy.startswith(x['ddb']): continue
            g=render('idp.data/'+p)
            if g: greek.append(g)
        else:
            t=trans_en(p)
            if t: tr.append(t)
    g='\n'.join(greek)
    open(f'greek/{h}.txt','w').write(g) if os.path.isdir('greek') else None
    items.append((h,x,loans,g,'\n'.join(tr)))
os.makedirs('greek',exist_ok=True)
for h,x,loans,g,t in items: open(f'greek/{h}.txt','w').write(g)
print('docs',len(items),'empty greek',[h for h,_,_,g,_ in items if not g])
os.makedirs('tbatches',exist_ok=True)
batches=[];cur=[];size=0
for h,x,loans,g,t in sorted(items,key=lambda i:(i[1]['year0'],i[0])):
    multi = len(re.findall(r'#### ', ''))  # placeholder
    blk=f"#### DOC HGV {h}\nedition: {x['edition']} | HGV title: {x['title']} | ddb: {x['ddb']}\nloan rows for this document: {json.dumps(loans,ensure_ascii=False)}\nGREEK (rendered DDbDP text; this is the text you work from):\n{g}\nEXISTING ENGLISH TRANSLATION (HGV/edition, may be old or for a different line range; aid only):\n{t or '(none)'}\n\n"
    if cur and (size+len(blk)>40000 or len(cur)>=20): batches.append(cur);cur=[];size=0
    cur.append(blk);size+=len(blk)
batches.append(cur)
for i,b in enumerate(batches,1): open(f'tbatches/t{i:02d}.txt','w').write(''.join(b))
print('batches',len(batches),[len(b) for b in batches])

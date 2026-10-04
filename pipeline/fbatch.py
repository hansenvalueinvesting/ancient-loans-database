"""Extraction batches for fcands.json (EXTRACT.md input): metadata, Greek (render.py), translations,
and the rows already in the database from the same edition (dbrows.json: REST export of loans).
Writes greek/<hgv>.txt and batches/f<nn>.txt (~25 candidates each)."""
import json,re,os,glob,xml.etree.ElementTree as ET
from render import render,T
c=json.load(open('fcands.json')); db=json.load(open('dbrows.json'))
tr={}
for f in glob.glob('idp.data/Translations/*/*.xml'):
    s=open(f,encoding='utf8').read(); m=re.search(r'<idno type="HGV">([^<]*)</idno>',s)
    if m:
        for i in m.group(1).split(): tr.setdefault(i,[]).append(f)
def trans(f):
    out=[]
    for d in ET.parse(f).getroot().iter(T+'div'):
        if d.get('type')=='translation':
            lang=d.get('{http://www.w3.org/XML/1998/namespace}lang') or ''
            if lang[:2] in ('en','de','fr','it'): out.append(f'[{lang}] '+re.sub(r'\s+',' ',''.join(d.itertext())).strip())
    return '\n'.join(out)
os.makedirs('greek',exist_ok=True); os.makedirs('batches',exist_ok=True)
from fcands import plain,VOCAB
def excerpt(g,h):  # long texts (registers, rolls): only the lines around loan words
    L=g.split('\n'); keep=set()
    for i,l in enumerate(L):
        if VOCAB.search(plain(re.sub(r'[\[\]\(\)⟦⟧⟨⟩{}⸌⸍⌜⌝\.\s\d]','',' '.join(L[max(0,i-1):i+2])))):
            keep.update(range(max(0,i-8),min(len(L),i+9)))
    out=[];prev=-2
    for i in sorted(keep):
        if i!=prev+1: out.append('[... lines omitted ...]')
        out.append(L[i]); prev=i
    return f'(EXCERPT: text is {len(g)//1000} kB; lines around loan words only; full text in greek/{h}.txt)\n'+'\n'.join(out)
groups={}  # HGV records sharing the same DDbDP text = one block
for x in c: groups.setdefault(tuple(x['files']),[]).append(x)
blocks=[]
for files,xs in groups.items():
    g='\n'.join(t for t in (render('idp.data/'+p) for p in files) if t)
    for x in xs: open(f"greek/{x['hgv']}.txt",'w').write(g)
    if len(g)>15000: g=excerpt(g,xs[0]['hgv'])[:15000]+'\n[... excerpt cut at 15 kB ...]'
    t='\n'.join(t for t in (trans(f) for x in xs for f in tr.get(x['hgv'],[])) if t)[:8000]
    same=[r for r in db if r['source'] in {x['edition'] for x in xs}]
    metas='\n'.join(json.dumps({k:x[k] for k in ('hgv','tm','ddb','edition','title','dates','place','keywords')},ensure_ascii=False) for x in xs)
    head=' '.join(x['hgv'] for x in xs)
    note='' if len(xs)==1 else f"(ONE TEXT, {len(xs)} HGV RECORDS: give one output object per HGV id, each for its own part of the text)\n"
    blocks.append(f"#### CANDIDATE HGV {head}\n{note}{metas}\n"
      f"ROWS ALREADY IN THE DATABASE WITH THE SAME SOURCE: {json.dumps(same,ensure_ascii=False) if same else 'none'}\n"
      f"GREEK:\n{g or 'NO GREEK TEXT'}\nTRANSLATIONS (aid only):\n{t or '(none)'}\n\n")
bs=[blocks[i:i+25] for i in range(0,len(blocks),25)]
for i,b in enumerate(bs,1): open(f'batches/f{i:02d}.txt','w').write(''.join(b))
print(len(bs),'batches; sizes (kB):',[sum(map(len,b))//1000 for b in bs])

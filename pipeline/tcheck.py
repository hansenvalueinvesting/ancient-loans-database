import json,glob,hashlib,sys,re
def norm(l): return re.sub(r'\s+',' ',l).strip()
def load_all():
    out={}
    for f in sorted(glob.glob('tout/t*.json')):
        for x in json.load(open(f)): out[x['hgv']]=x
    return out
def verify(x):
    src=set(norm(l) for l in open(f"greek/{x['hgv']}.txt").read().split('\n'))
    bad=[l for l in x['greek'].split('\n') if norm(l) and norm(l) not in src]
    errs=[]
    if bad: errs.append(f"{len(bad)} greek lines not in source, e.g. {bad[0][:80]!r}")
    if not x.get('translation','').strip(): errs.append('empty translation')
    if not x.get('greek','').strip(): errs.append('empty greek')
    return errs
def note(x):
    return 'Original Text:\n'+x['greek'].strip()+'\n\nEnglish translation:\n'+x['translation'].strip()
if __name__=='__main__':
    T=load_all(); n=0
    for h,x in T.items():
        e=verify(x)
        if e: n+=1; print(h,e)
    print(len(T),'docs,',n,'with errors')

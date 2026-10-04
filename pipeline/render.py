import re,xml.etree.ElementTree as ET
T='{http://www.tei-c.org/ns/1.0}'
def tag(e): return e.tag.replace(T,'')
def inner(e): return (e.text or '')+''.join(r(c) for c in e)
def r(e):
    t=tag(e); tail=e.tail or ''
    if t=='lb':
        n=e.get('n') or ''
        return ('\n' if e.get('break')!='no' else '\n')+(n+' ' if n else '')+tail
    if t=='gap':
        if e.get('reason')=='lost':
            q=e.get('quantity'); u=e.get('unit')
            if q and u=='character' and q.isdigit() and int(q)<=12: s='['+'.'*int(q)+']'
            elif u=='line': s='[— — —]'
            else: s='[...]'
        elif e.get('reason')=='illegible':
            q=e.get('quantity'); s='.'*int(q) if q and q.isdigit() and int(q)<=12 else '...'
        else: s='[...]'
        return s+tail
    if t in ('note','certainty','desc','figure'): return tail
    if t=='choice':
        kids={tag(c):c for c in e}
        if 'orig' in kids: s=inner(kids['orig'])
        elif 'corr' in kids: s='⌜'+inner(kids['corr'])+'⌝'
        elif 'expan' in kids: s=inner(kids['expan'])
        else: s=inner(list(e)[0]) if len(e) else ''
        return s+tail
    if t=='app':
        lem=e.find(T+'lem'); return (inner(lem) if lem is not None else '')+tail
    if t=='subst':
        a=e.find(T+'add'); return (inner(a) if a is not None else '')+tail
    s=inner(e)
    if t=='supplied':
        s=('⟨'+s+'⟩') if e.get('reason')=='omitted' else ('['+s+']')
    elif t=='ex': s='('+s+')'
    elif t=='del': s='⟦'+s+'⟧'
    elif t=='surplus': s='{'+s+'}'
    elif t=='add': s='⸌'+s+'⸍'
    elif t=='abbr': s=s
    elif t=='space': s=' '
    return s+tail
def render(path):
    x=ET.parse(path).getroot()
    out=[]
    for d in x.iter(T+'div'):
        if d.get('type')=='edition':
            for part in [d]:
                s=inner(part)
            s=re.sub(r'[ \t]+',' ',s)
            s=re.sub(r'\]\[','',s)   # merge adjacent brackets
            lines=[l.strip() for l in s.split('\n')]
            out='\n'.join(l for l in lines if l)
    return out if out else ''
if __name__=='__main__':
    import sys
    print(render(sys.argv[1]))

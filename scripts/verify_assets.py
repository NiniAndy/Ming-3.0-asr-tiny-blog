"""Validate page resources and original image/audio integrity."""
from pathlib import Path
from html.parser import HTMLParser
import hashlib,json

ROOT=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
    def __init__(self):super().__init__();self.ids=[];self.references=[];self.audio=0;self.charts=0;self.empty_links=[]
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if attrs.get('id'):self.ids.append(attrs['id'])
        if tag=='audio':self.audio+=1
        if tag=='a' and not attrs.get('href'):self.empty_links.append(attrs)
        if 'cap-chart' in attrs.get('class','').split():self.charts+=1
        for key in ['href','src']:
            value=attrs.get(key,'')
            if value.startswith('assets/'):self.references.append(value)
    def handle_startendtag(self,tag,attrs):self.handle_starttag(tag,attrs)

html=(ROOT/'index.html').read_text()
page=Page();page.feed(html)
assert len(page.ids)==len(set(page.ids)),'Duplicate element IDs'
assert page.audio==3,'Expected three demo clips'
assert page.charts==4,'Expected four capability charts'
assert not page.empty_links,'Page contains a link without a destination'
assert 'examples/transcribe.py' in html and 'prepare_asr_request' in html and 'decode_transcript' in html,'Examples must use the current inference API'
for obsolete in ('transcribe_hf_manifest.py','prepare_pt_request','decode_pt_transcript','--request-mode pt'):
    assert obsolete not in html,'Obsolete example API: '+obsolete
for file in page.references:assert (ROOT/file).is_file(),'Missing resource: '+file
manifest=json.loads((ROOT/'data/asset-manifest.json').read_text())
for file,digest in manifest['files'].items():
    assert hashlib.sha256((ROOT/file).read_bytes()).hexdigest()==digest,'Modified source asset: '+file
print('PASS: local resources, unique IDs, 3 audio clips, 4 capability charts, and 8 original asset hashes.')

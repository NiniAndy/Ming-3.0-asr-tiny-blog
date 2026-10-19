"""Build ming-tiny-asr.html using only Python's standard library."""
from pathlib import Path
from html.parser import HTMLParser
import re,base64,mimetypes

ROOT=Path(__file__).resolve().parents[1]
class Tag(HTMLParser):
    def handle_starttag(self,tag,attrs):self.attrs=dict(attrs)
    def handle_startendtag(self,tag,attrs):self.attrs=dict(attrs)
def attributes(tag):
    parser=Tag();parser.feed(tag);return parser.attrs
def stylesheet(match):
    tag=match.group();attrs=attributes(tag)
    if attrs.get('rel')=='stylesheet' and attrs.get('href','').startswith('assets/'):
        return '<style>'+ROOT.joinpath(attrs['href']).read_text()+'</style>'
    return tag
def script(match):
    attrs=attributes(match.group().split('>',1)[0]+'>')
    if attrs.get('src','').startswith('assets/'):
        return '<script>'+ROOT.joinpath(attrs['src']).read_text()+'</script>'
    return match.group()
def media(match):
    relative=match.group(2)
    path=ROOT/relative
    mime='audio/wav' if path.suffix=='.wav' else mimetypes.guess_type(str(path))[0]
    encoded=base64.b64encode(path.read_bytes()).decode('ascii')
    return 'src='+match.group(1)+'data:'+mime+';base64,'+encoded+match.group(1)

html=ROOT.joinpath('index.html').read_text()
html=re.sub(r'<link\b[^>]*>',stylesheet,html)
html=re.sub(r'<script\b[^>]*>.*?</script>',script,html,flags=re.S)
html=re.sub(r'(?<![\w-])src=([\"\x27])(assets/[^\"\x27]+)\1',media,html)
output=ROOT/'ming-tiny-asr.html';output.write_text(html)
print('Built',output.name,':',len(html.encode('utf-8')),'bytes')

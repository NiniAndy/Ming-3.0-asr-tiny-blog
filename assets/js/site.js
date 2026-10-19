(()=>{
const catalog=window.MING_I18N;
let language='zh';
const phrases={zh:{copied:'已复制',select:'已选中，请按 Ctrl+C 或 ⌘C 复制'},en:{copied:'Copied',select:'Selected. Press Ctrl+C or ⌘C to copy.'}};
const titles={zh:'Ming-3.0-asr-tiny · 轻量级中英双语语音识别',en:'Ming-3.0-asr-tiny · Context-aware Chinese & English ASR'};
const descriptions={zh:'Ming-3.0-asr-tiny，中英双语、方言与上下文语音识别。了解模型架构、语音样例、评测结果与使用方法。',en:'Ming-3.0-asr-tiny: Chinese, English, dialect, and context-aware speech recognition. Explore the architecture, audio samples, benchmarks, and quick start.'};
function setLanguage(next){
 language=next==='en'?'en':'zh';
 document.documentElement.lang=language==='zh'?'zh-CN':'en';
 document.documentElement.dataset.language=language;
 document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=catalog[el.dataset.i18n][language]);
 document.querySelectorAll('[data-i18n-html]').forEach(el=>el.innerHTML=catalog[el.dataset.i18nHtml][language]);
 ['aria-label','alt','title'].forEach(attr=>document.querySelectorAll('[data-i18n-'+attr+']').forEach(el=>el.setAttribute(attr,catalog[el.getAttribute('data-i18n-'+attr)][language])));
 document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===language)));
 document.title=titles[language];
 document.querySelectorAll('meta[name="description"],meta[property="og:description"]').forEach(el=>el.content=descriptions[language]);
 document.querySelectorAll('a[data-pending-link]').forEach(a=>{const pending=!a.getAttribute('href').trim();a.setAttribute('aria-disabled',String(pending));if(pending)a.setAttribute('tabindex','-1');else a.removeAttribute('tabindex');});
 const toast=document.getElementById('toast');toast.hidden=true;
 try{localStorage.setItem('ming-asr-language',language);}catch{}
 const zoom=document.getElementById('figure-dialog');
 if(zoom.open&&zoom.dataset.figureIndex!==undefined){const img=document.querySelectorAll('.figure-zoom img')[Number(zoom.dataset.figureIndex)];document.getElementById('zoom-title').textContent=img.alt;zoom.querySelector('img').alt=img.alt;}
}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
let initial='zh';try{initial=localStorage.getItem('ming-asr-language')||'zh';}catch{}
setLanguage(initial);
let timer;
function toast(text){const el=document.getElementById('toast');el.textContent=text;el.hidden=false;clearTimeout(timer);timer=setTimeout(()=>el.hidden=true,2500);}
async function copy(element){try{await navigator.clipboard.writeText(element.textContent);toast(phrases[language].copied);}catch{const range=document.createRange();range.selectNodeContents(element);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);toast(phrases[language].select);}}
document.getElementById('copy-model').addEventListener('click',()=>copy(document.getElementById('model-id')));
document.querySelectorAll('[data-copy-code]').forEach(button=>button.addEventListener('click',()=>copy(document.getElementById(button.dataset.copyCode))));
const zoom=document.getElementById('figure-dialog');
document.querySelectorAll('.figure-zoom').forEach((button,index)=>button.addEventListener('click',()=>{const img=button.querySelector('img');zoom.querySelector('img').src=img.src;zoom.querySelector('img').alt=img.alt;zoom.dataset.figureIndex=String(index);document.getElementById('zoom-title').textContent=img.alt;zoom.showModal();}));
document.getElementById('close-zoom').addEventListener('click',()=>zoom.close());
zoom.addEventListener('click',event=>{if(event.target===zoom)zoom.close();});
document.querySelectorAll('audio').forEach(audio=>audio.addEventListener('play',()=>document.querySelectorAll('audio').forEach(other=>{if(other!==audio)other.pause();})));

document.addEventListener('click',event=>{const link=event.target.closest('a[data-pending-link]');if(link&&!link.getAttribute('href').trim())event.preventDefault();});
})();

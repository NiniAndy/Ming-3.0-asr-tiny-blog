# Ming-3.0-asr-tiny Blog

This is the bilingual project blog for [Ming-3.0-asr-tiny](https://github.com/inclusionAI/Ming-3.0-asr). It presents the model architecture, benchmark figures, and three audio examples with inline playback. The model weights are hosted on [Hugging Face](https://huggingface.co/inclusionAI/Ming-3.0-asr-tiny).

The site is plain HTML, CSS, and JavaScript. Open `index.html` locally or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`. Use the language switch at the top of the page to view Chinese or English text. The sample transcripts remain in their original languages.

The three WAV clips are in `assets/audio/`. Context ASR audio comes from [ContextASR-Bench](https://huggingface.co/datasets/MrSupW/ContextASR-Bench); see its included [license text](docs/licenses/CONTEXTASR_BENCH_LICENSE.txt). Mandarin and English clips come from [Mozilla Common Voice](https://commonvoice.mozilla.org/en/datasets) (CC0).

For inference instructions, see the [model repository](https://github.com/inclusionAI/Ming-3.0-asr) and its [Cookbook](https://github.com/inclusionAI/Ming-3.0-asr/tree/main/cookbook).

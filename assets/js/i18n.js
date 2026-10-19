window.MING_I18N = {
  "t000": {
    "zh": "音频来源：Context 样例来自 <a href=\"https://huggingface.co/datasets/MrSupW/ContextASR-Bench\" rel=\"noopener noreferrer\" target=\"_blank\">ContextASR-Bench</a>；中英文样例来自 <a href=\"https://commonvoice.mozilla.org/en/datasets\" rel=\"noopener noreferrer\" target=\"_blank\">Mozilla Common Voice</a>。<a href=\"https://github.com/inclusionAI/Ming-3.0-asr/blob/main/examples/cases/README.md\">音频来源说明</a>",
    "en": "Audio sources: the Context sample is from <a href=\"https://huggingface.co/datasets/MrSupW/ContextASR-Bench\" rel=\"noopener noreferrer\" target=\"_blank\">ContextASR-Bench</a>; the Chinese and English samples are from <a href=\"https://commonvoice.mozilla.org/en/datasets\" rel=\"noopener noreferrer\" target=\"_blank\">Mozilla Common Voice</a>. <a href=\"https://github.com/inclusionAI/Ming-3.0-asr/blob/main/examples/cases/README.md\">Audio source notes</a>"
  },
  "t001": {
    "zh": "验证环境：Python 3.12 · Linux · Transformers 5.12.1 · fla-core 0.5.2 · PyTorch 2.11.0+cu130。推理需要支持 KDA 内核的 CUDA GPU。模型依赖以下载目录中的 <code>requirements.txt</code> 为准；GitHub 仓库提供文档、图表和调用示例，完整权重从 Hugging Face 下载。",
    "en": "Validated environment: Python 3.12 · Linux · Transformers 5.12.1 · fla-core 0.5.2 · PyTorch 2.11.0+cu130. Inference requires a CUDA GPU that supports the KDA kernel. Use <code>requirements.txt</code> from the downloaded model directory for dependencies. GitHub provides documentation, figures, and example code; download the complete weights from Hugging Face."
  },
  "t002": {
    "zh": "与仓库可执行脚本使用相同的核心调用。将 <code>speech.wav</code> 换成自己的音频文件。",
    "en": "This uses the same core calls as the executable script. Replace <code>speech.wav</code> with your own audio file."
  },
  "t003": {
    "zh": "普通转写和 Context ASR 使用同一种音频输入格式。默认采用 <code>cuda:0</code>、BF16、SDPA、greedy decoding、10-gram 重复限制，最多生成 256 个新 token。Context ASR 可在音频前加入主题、热词或对话上文；详见 Cookbook。",
    "en": "Standard transcription and Context ASR share one audio input format. The default uses <code>cuda:0</code>, BF16, SDPA, greedy decoding, a 10-gram repetition limit, and at most 256 new tokens. Context ASR can include a topic, hotwords, or preceding dialogue; see the Cookbook."
  },
  "t004": {
    "zh": "研究",
    "en": "RESEARCH"
  },
  "t005": {
    "zh": "模型概览",
    "en": "Overview"
  },
  "t006": {
    "zh": "模型架构",
    "en": "Architecture"
  },
  "t007": {
    "zh": "语音样例",
    "en": "Samples"
  },
  "t008": {
    "zh": "评测结果",
    "en": "Benchmarks"
  },
  "t009": {
    "zh": "获取模型",
    "en": "Get model"
  },
  "t010": {
    "zh": "MING 3.0 · 语音识别",
    "en": "MING 3.0 · AUTOMATIC SPEECH RECOGNITION"
  },
  "t011": {
    "zh": "听懂中英文、方言，也听懂上下文。",
    "en": "Hear the words. Understand the context."
  },
  "t012": {
    "zh": "中英文转写 · 方言识别 · 热词与对话上文增强",
    "en": "Chinese & English transcription · Dialects · Hotword and dialogue context"
  },
  "t013": {
    "zh": "获取模型",
    "en": "Get model"
  },
  "t014": {
    "zh": "查看评测结果",
    "en": "Explore benchmarks"
  },
  "t015": {
    "zh": "中文通用识别 · CER ↓",
    "en": "Chinese ASR · CER ↓"
  },
  "t016": {
    "zh": "公开中文评测平均",
    "en": "Public Chinese benchmark average"
  },
  "t017": {
    "zh": "英文通用识别 · WER ↓",
    "en": "English ASR · WER ↓"
  },
  "t018": {
    "zh": "公开英文评测平均",
    "en": "Public English benchmark average"
  },
  "t019": {
    "zh": "方言测试集 · 错误率 ↓",
    "en": "Dialect test sets · Error rate ↓"
  },
  "t020": {
    "zh": "自建方言评测平均",
    "en": "In-house dialect benchmark average"
  },
  "t021": {
    "zh": "五个业务领域 · 错误率 ↓",
    "en": "5 domains · Error rate ↓"
  },
  "t022": {
    "zh": "五领域算术均值",
    "en": "Arithmetic mean across five domains"
  },
  "t023": {
    "zh": "中英文指标为公开评测集平均 · 五领域均值由单项结果等权计算 · 数值越低越好",
    "en": "Chinese and English scores are public benchmark averages · The five-domain score is an unweighted mean · Lower is better"
  },
  "t024": {
    "zh": "01 / 模型概览",
    "en": "01 / MODEL OVERVIEW"
  },
  "t025": {
    "zh": "从通用转写，到真实场景",
    "en": "From everyday speech to real-world use"
  },
  "t026": {
    "zh": "从通用中英转写、地方方言，到热词与对话上文增强，Ming-3.0-asr-tiny 将不同语音识别需求融入同一模型。下面分别展示四项核心能力及对应指标，完整结果见评测部分。",
    "en": "Ming-3.0-asr-tiny brings general Chinese–English transcription, regional dialect recognition, and hotword or dialogue-context prompting into one model. The four capabilities below are paired with their respective metrics; full results appear in the benchmark section."
  },
  "t027": {
    "zh": "中英双语，稳定转写",
    "en": "Chinese & English"
  },
  "t028": {
    "zh": "在公开中文与英文评测中，平均错误率分别为 3.55 和 3.99。下图分别比较中文 CER 与英文 WER。",
    "en": "Average errors on public Chinese and English benchmarks are 3.55 and 3.99. The chart compares Chinese CER and English WER separately."
  },
  "t029": {
    "zh": "中英双语识别",
    "en": "BILINGUAL RECOGNITION"
  },
  "t030": {
    "zh": "多样方言表达",
    "en": "Diverse local voices"
  },
  "t031": {
    "zh": "方言测试集平均错误率为 8.42，低于 Qwen3-ASR-1.7B 的 15.30，接近 Fun-ASR 1.5 的 8.00。",
    "en": "The reported average error across dialect test sets is 8.42, below Qwen3-ASR-1.7B at 15.30 and close to Fun-ASR 1.5 at 8.00."
  },
  "t032": {
    "zh": "方言覆盖",
    "en": "DIALECT COVERAGE"
  },
  "t033": {
    "zh": "理解上下文，关注术语",
    "en": "Context-aware recognition"
  },
  "t034": {
    "zh": "支持以热词和对话上文辅助识别专有名词与领域术语。Context ASR 综合 Average 为 4.36，与 Qwen3-Omni 的 4.34 接近。",
    "en": "Hotwords and preceding dialogue provide context for names and domain terms. The Context ASR aggregate Average is 4.36, close to Qwen3-Omni at 4.34."
  },
  "t035": {
    "zh": "上下文增强识别",
    "en": "CONTEXT-AWARE ASR"
  },
  "t036": {
    "zh": "面向具体使用场景",
    "en": "Real-world scenarios"
  },
  "t037": {
    "zh": "覆盖聊天、政务、健康、知识、本地生活及高噪场景。五领域平均错误率为 1.67，在图中所列模型中最低。",
    "en": "Evaluated on chat, government services, health, knowledge, local services, and noisy speech. The five-domain mean is 1.67, the lowest among the models shown."
  },
  "t038": {
    "zh": "真实场景评测",
    "en": "REAL-WORLD SCENARIOS"
  },
  "t039": {
    "zh": "02 / 模型架构",
    "en": "02 / ARCHITECTURE"
  },
  "t040": {
    "zh": "语音感知，与语言理解相连接",
    "en": "Connecting speech with language understanding"
  },
  "t041": {
    "zh": "Ming-3.0-asr-tiny 模型架构",
    "en": "Ming-3.0-asr-tiny model architecture"
  },
  "t042": {
    "zh": "音频 → 文本",
    "en": "AUDIO → TEXT"
  },
  "t043": {
    "zh": "统一语音与文本输入",
    "en": "Unified audio and text inputs"
  },
  "t044": {
    "zh": "音频经过 Audio Encoder 与 MLP Projector，文本通过 Tokenizer，汇入语言模型完成转写。",
    "en": "Audio passes through the Audio Encoder and MLP Projector, while text passes through the Tokenizer. Both feed into the language model for transcription."
  },
  "t045": {
    "zh": "混合注意力",
    "en": "HYBRID ATTENTION"
  },
  "t046": {
    "zh": "3 : 1 混合注意力",
    "en": "3 : 1 hybrid attention"
  },
  "t047": {
    "zh": "采用 3 层 Kimi Delta Attention 与 1 层 Gated MLA 的组合，并结合 MoE 结构。",
    "en": "Three Kimi Delta Attention layers are combined with one Gated MLA layer and a mixture-of-experts architecture."
  },
  "t048": {
    "zh": "以提示补充识别上下文",
    "en": "Prompts provide recognition context"
  },
  "t049": {
    "zh": "使用相关热词或前序对话引导领域术语识别。长音频可分块编码，仍受模型上下文长度限制。",
    "en": "Relevant hotwords or preceding dialogue guide recognition of domain-specific terms. Long audio can be encoded in chunks, subject to the model context limit."
  },
  "t050": {
    "zh": "模型架构详见上图；评测结果见下方原始评测图。",
    "en": "See the architecture above and the original benchmark figures below."
  },
  "t051": {
    "zh": "03 / 语音样例",
    "en": "03 / COOKBOOK"
  },
  "t052": {
    "zh": "听一听，从转写到上下文增强",
    "en": "Listen: from transcription to context-aware ASR"
  },
  "t053": {
    "zh": "试听三段语音样例，比较参考文本与识别结果。",
    "en": "Listen to three audio samples and compare reference text with recognition output."
  },
  "t054": {
    "zh": "查看 Cookbook",
    "en": "Read the Cookbook"
  },
  "t055": {
    "zh": "下面的音频可以直接试听。参考文本与识别结果均去除标点，英文统一为小写，方便并排比较。识别结果来自 HF 模型的单条推理，不代表整体评测成绩。",
    "en": "Listen to the samples below. Reference text and model output omit punctuation, and English is lowercased for comparison. Results are from single-clip inference with the HF model and do not represent aggregate benchmark performance."
  },
  "t056": {
    "zh": "样例中的转写文本、主题和热词保留原语言。",
    "en": "Sample transcripts, topics, and hotwords remain in their original language."
  },
  "t057": {
    "zh": "中文语音识别",
    "en": "CHINESE ASR"
  },
  "t058": {
    "zh": "中文转写",
    "en": "Chinese transcription"
  },
  "t059": {
    "zh": "5.90 秒",
    "en": "5.90 s"
  },
  "t060": {
    "zh": "您的浏览器不支持音频播放。",
    "en": "Your browser does not support audio playback."
  },
  "t061": {
    "zh": "参考文本",
    "en": "Reference text"
  },
  "t062": {
    "zh": "识别结果",
    "en": "Recognition output"
  },
  "t063": {
    "zh": "运行此样例",
    "en": "Run this sample"
  },
  "t064": {
    "zh": "复制",
    "en": "Copy"
  },
  "t065": {
    "zh": "英文语音识别",
    "en": "ENGLISH ASR"
  },
  "t066": {
    "zh": "英语转写",
    "en": "English transcription"
  },
  "t067": {
    "zh": "2.26 秒",
    "en": "2.26 s"
  },
  "t068": {
    "zh": "您的浏览器不支持音频播放。",
    "en": "Your browser does not support audio playback."
  },
  "t069": {
    "zh": "参考文本",
    "en": "Reference text"
  },
  "t070": {
    "zh": "识别结果",
    "en": "Recognition output"
  },
  "t071": {
    "zh": "运行此样例",
    "en": "Run this sample"
  },
  "t072": {
    "zh": "复制",
    "en": "Copy"
  },
  "t073": {
    "zh": "Context ASR：热词纠正片名",
    "en": "Context ASR: correcting a film title with hotwords"
  },
  "t074": {
    "zh": "6.57 秒",
    "en": "6.57 s"
  },
  "t075": {
    "zh": "同一段音频，仅第二次加入主题与热词。",
    "en": "The same audio is used twice; only the second request includes a topic and hotwords."
  },
  "t076": {
    "zh": "您的浏览器不支持音频播放。",
    "en": "Your browser does not support audio playback."
  },
  "t077": {
    "zh": "参考文本",
    "en": "Reference text"
  },
  "t078": {
    "zh": "主题",
    "en": "Topic"
  },
  "t079": {
    "zh": "热词",
    "en": "Hotwords"
  },
  "t080": {
    "zh": "不加上下文的识别结果",
    "en": "Output without context"
  },
  "t081": {
    "zh": "加入主题与热词的识别结果",
    "en": "Output with a topic and hotwords"
  },
  "t082": {
    "zh": "运行此样例",
    "en": "Run this sample"
  },
  "t083": {
    "zh": "复制",
    "en": "Copy"
  },
  "t084": {
    "zh": "04 / 评测结果",
    "en": "04 / PERFORMANCE"
  },
  "t085": {
    "zh": "评测结果",
    "en": "Benchmarks"
  },
  "t086": {
    "zh": "中英文、方言、领域与上下文语音识别的评测表现，点击图片可放大查看。",
    "en": "Results for Chinese, English, dialects, domains, and context-aware ASR. Click a figure to enlarge it."
  },
  "t087": {
    "zh": "所有错误率指标均越低越好。通用识别、方言与 Context ASR 分别按对应指标比较。",
    "en": "Lower is better for all error metrics. General ASR, dialect recognition, and Context ASR are compared using their respective metrics."
  },
  "t088": {
    "zh": "中英文语音识别",
    "en": "Chinese & English ASR"
  },
  "t089": {
    "zh": "中英双语识别",
    "en": "Chinese & English ASR"
  },
  "t090": {
    "zh": "点击放大 ↗",
    "en": "Enlarge ↗"
  },
  "t091": {
    "zh": "方言与领域识别",
    "en": "Dialects & domains"
  },
  "t092": {
    "zh": "方言与业务领域",
    "en": "Dialects & Domains"
  },
  "t093": {
    "zh": "点击放大 ↗",
    "en": "Enlarge ↗"
  },
  "t094": {
    "zh": "上下文增强语音识别",
    "en": "Context-aware Speech Recognition"
  },
  "t095": {
    "zh": "点击放大 ↗",
    "en": "Enlarge ↗"
  },
  "t096": {
    "zh": "05 / 快速开始",
    "en": "05 / GET STARTED"
  },
  "t097": {
    "zh": "探索 Ming-3.0-asr-tiny",
    "en": "Explore Ming-3.0-asr-tiny"
  },
  "t098": {
    "zh": "访问项目主页，查看当前版本的模型说明、权重文件与使用方法。",
    "en": "Visit the model page for the current model documentation, weights, and usage instructions."
  },
  "t099": {
    "zh": "前往 Hugging Face",
    "en": "Open Hugging Face"
  },
  "t100": {
    "zh": "HUGGING FACE / 模型 ID",
    "en": "HUGGING FACE / MODEL ID"
  },
  "t101": {
    "zh": "复制模型 ID",
    "en": "Copy model ID"
  },
  "t102": {
    "zh": "模型使用与许可信息以项目仓库中的当前说明为准。",
    "en": "See the project repository for current usage and license information."
  },
  "t103": {
    "zh": "快速开始",
    "en": "Quick start"
  },
  "t104": {
    "zh": "在仓库根目录运行以下命令与 Python 示例。",
    "en": "Run the following commands and Python example from the repository root."
  },
  "t105": {
    "zh": "GitHub README",
    "en": "GitHub README"
  },
  "t106": {
    "zh": "01 · 准备模型与安装依赖",
    "en": "01 · Prepare the model and install dependencies"
  },
  "t107": {
    "zh": "复制",
    "en": "Copy"
  },
  "t108": {
    "zh": "02 · 转写一段音频",
    "en": "02 · Transcribe an audio clip"
  },
  "t109": {
    "zh": "复制",
    "en": "Copy"
  },
  "t110": {
    "zh": "PyTorch / Transformers 原生推理",
    "en": "Native PyTorch / Transformers inference"
  },
  "t111": {
    "zh": "03 · Python 示例",
    "en": "03 · Python example"
  },
  "t112": {
    "zh": "复制",
    "en": "Copy"
  },
  "t113": {
    "zh": "使用说明",
    "en": "Usage notes"
  },
  "t114": {
    "zh": "音频混音并重采样至 16 kHz，长音频按块编码，输入和输出总长度仍受上下文限制。输出为纯文本，不提供词级时间戳或说话人分离，不支持图像和视频输入；当前验证范围不包含量化、分布式生成与流式音频输入。",
    "en": "Audio is mixed down and resampled to 16 kHz. Long audio is encoded in chunks; combined input and output length remains subject to the context limit. Output is plain text, without word-level timestamps or speaker diarization. Image and video inputs are unsupported. Quantization, distributed generation, and streaming audio are outside the current validation scope."
  },
  "t115": {
    "zh": "GitHub 仓库",
    "en": "GitHub repository"
  },
  "t116": {
    "zh": "模型主页 ↗",
    "en": "Model page ↗"
  },
  "t117": {
    "zh": "参考项目：Ming-Omni-TTS ↗",
    "en": "Related project: Ming-Omni-TTS ↗"
  },
  "t118": {
    "zh": "评测图",
    "en": "Evaluation figure"
  },
  "t119": {
    "zh": "关闭 ×",
    "en": "Close ×"
  },
  "t120": {
    "zh": "InclusionAI 首页",
    "en": "InclusionAI home"
  },
  "t121": {
    "zh": "inclusionAI 标志",
    "en": "inclusionAI logo"
  },
  "t122": {
    "zh": "页面导航",
    "en": "Page navigation"
  },
  "t123": {
    "zh": "模型架构：音频编码器经 MLP Projector 连接语言骨干；KDA 与 Gated MLA 混合注意力及 MoE。",
    "en": "Model architecture: Audio Encoder and MLP Projector connect to the language backbone with KDA, Gated MLA, and MoE."
  },
  "t124": {
    "zh": "中文转写样例音频",
    "en": "Chinese transcription sample audio"
  },
  "t125": {
    "zh": "复制运行此样例",
    "en": "Copy sample command"
  },
  "t126": {
    "zh": "英语转写样例音频",
    "en": "English transcription sample audio"
  },
  "t127": {
    "zh": "复制运行此样例",
    "en": "Copy sample command"
  },
  "t128": {
    "zh": "Context ASR：热词纠正片名样例音频",
    "en": "Context ASR film-title correction sample audio"
  },
  "t129": {
    "zh": "复制运行此样例",
    "en": "Copy sample command"
  },
  "t130": {
    "zh": "放大中英文语音识别评测图",
    "en": "Enlarge Chinese and English ASR evaluation"
  },
  "t131": {
    "zh": "中英文语音识别评测图",
    "en": "Chinese and English ASR evaluation"
  },
  "t132": {
    "zh": "放大方言与领域识别评测图",
    "en": "Enlarge dialect and domain evaluation"
  },
  "t133": {
    "zh": "方言与领域识别评测图",
    "en": "Dialect and domain evaluation"
  },
  "t134": {
    "zh": "放大Context ASR评测图",
    "en": "Enlarge Context ASR evaluation"
  },
  "t135": {
    "zh": "Context ASR评测图",
    "en": "Context ASR evaluation"
  },
  "t136": {
    "zh": "复制01 · 准备模型与安装依赖",
    "en": "Copy model setup and installation commands"
  },
  "t137": {
    "zh": "复制02 · 转写一段音频",
    "en": "Copy transcription command"
  },
  "t138": {
    "zh": "复制03 · Python 示例",
    "en": "Copy Python example"
  },
  "hero-intro": {
    "zh": "Ming-3.0-asr-tiny 是 InclusionAI 推出的轻量级语音识别模型。基于 Ling-tiny-v3 与音频编码器，模型统一支持中英文转写、方言识别和上下文增强识别，可结合热词与对话上文识别人名、地名及专业术语，面向多样化的语音转写场景。",
    "en": "Ming-3.0-asr-tiny is a lightweight speech recognition model from InclusionAI. Built on Ling-tiny-v3 and an audio encoder, it brings Chinese and English transcription, dialect recognition, and context-aware ASR into one model. Hotwords and preceding dialogue help recognize names, places, and specialized terminology across a range of transcription scenarios."
  },
  "hero-intro-rich": {
    "zh": "一个模型，识别中英文、方言与真实场景中的复杂语音。加入<strong>热词或对话上文</strong>，帮助听清陌生的人名、地名与专业术语。",
    "en": "One model for Chinese and English speech, dialects, and challenging real-world audio. Add <strong>hotwords or dialogue context</strong> to recognize unfamiliar names, places, and specialized terms."
  },
  "chart-bilingual-aria": {
    "zh": "公开中英文评测 · 平均错误率（%）↓",
    "en": "Public Chinese & English · Average error (%) ↓"
  },
  "chart-bilingual-title": {
    "zh": "公开中英文评测 · 平均错误率（%）↓",
    "en": "Public Chinese & English · Average error (%) ↓"
  },
  "chart-bilingual-legend": {
    "zh": "对比模型",
    "en": "Other models"
  },
  "chart-bilingual-4-closed": {
    "zh": "闭源",
    "en": "Closed"
  },
  "chart-bilingual-5-closed": {
    "zh": "闭源",
    "en": "Closed"
  },
  "chart-bilingual-note": {
    "zh": "每行上柱为中文 CER，下柱为英文 WER；两项分别比较，不合并计算。",
    "en": "Each row shows Chinese CER above English WER. The metrics are compared separately, not combined."
  },
  "chart-dialect-aria": {
    "zh": "方言测试集 · 平均错误率（%）↓",
    "en": "Dialect test sets · Average error (%) ↓"
  },
  "chart-dialect-title": {
    "zh": "方言测试集 · 平均错误率（%）↓",
    "en": "Dialect test sets · Average error (%) ↓"
  },
  "chart-dialect-legend": {
    "zh": "对比模型",
    "en": "Other models"
  },
  "chart-dialect-4-closed": {
    "zh": "闭源",
    "en": "Closed"
  },
  "chart-dialect-5-closed": {
    "zh": "闭源",
    "en": "Closed"
  },
  "chart-dialect-note": {
    "zh": "采用评测图公布的方言平均值；不同方言的单项结果见完整评测图。",
    "en": "Uses the reported dialect averages. Per-dialect results are available in the complete evaluation figure."
  },
  "chart-context-aria": {
    "zh": "Context ASR · 综合 Average ↓",
    "en": "Context ASR · Aggregate Average ↓"
  },
  "chart-context-title": {
    "zh": "Context ASR · 综合 Average ↓",
    "en": "Context ASR · Aggregate Average ↓"
  },
  "chart-context-legend": {
    "zh": "对比模型",
    "en": "Other models"
  },
  "chart-context-2-closed": {
    "zh": "闭源",
    "en": "Closed"
  },
  "chart-context-note": {
    "zh": "Average 为评测图中的综合指标，不等同于单项 WER，也不表示有无上下文的提升幅度。",
    "en": "Average is the aggregate metric in the evaluation figure. It is not a standalone WER or a measured gain from adding context."
  },
  "chart-domain-aria": {
    "zh": "五类业务领域 · 平均错误率（%）↓",
    "en": "Five domains · Average error (%) ↓"
  },
  "chart-domain-title": {
    "zh": "五类业务领域 · 平均错误率（%）↓",
    "en": "Five domains · Average error (%) ↓"
  },
  "chart-domain-legend": {
    "zh": "对比模型",
    "en": "Other models"
  },
  "chart-domain-4-closed": {
    "zh": "闭源",
    "en": "Closed"
  },
  "chart-domain-5-closed": {
    "zh": "闭源",
    "en": "Closed"
  },
  "chart-domain-note": {
    "zh": "对聊天、政务、健康、知识、本地生活的错误率等权平均。",
    "en": "Unweighted mean of chat, government, health, knowledge, and local-services errors."
  },
  "repository-pending-title": {
    "zh": "打开 GitHub 仓库",
    "en": "Open the GitHub repository"
  },
  "github-pending": {
    "zh": "GitHub · 查看代码",
    "en": "GitHub · View code"
  },
  "release-film-eyebrow": {
    "zh": "MING 3.0 · 发版视频",
    "en": "MING 3.0 · RELEASE FILM"
  },
  "release-film-title": {
    "zh": "听见更丰富的世界",
    "en": "Hear more of the world"
  },
  "release-film-desc": {
    "zh": "通过这段短片了解 Ming-3.0-asr-tiny 的语音识别能力与使用场景。",
    "en": "Discover the speech recognition capabilities and use cases of Ming-3.0-asr-tiny."
  },
  "release-film-aria": {
    "zh": "Ming-3.0-asr-tiny 发版视频",
    "en": "Ming-3.0-asr-tiny release film"
  },
  "release-film-fallback": {
    "zh": "观看视频",
    "en": "Watch the film"
  }
};

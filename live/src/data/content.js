import { lang } from "./lang";
export const CONTACT_EMAIL = "askus.solv3d@gmail.com";

const I18N = {
  en: {
    brand: { mark: "S3", name: "Solv3d", tagline: "practical digital transformation" },
    nav: { us: "Us", projects: "Projects", contact: "Contact" },
    hero: {
      eyebrow: "Practical Digital Transformation",
      title: "Digital transformation that starts from the way your business already works.",
      body: "Solv3d helps SMEs improve process, internal tools, reporting, and AI adoption — without waiting for clean data or a perfect stack.",
      windowTitle: "Current reality to first useful move",
      columns: [
        { label: "The Challenge", items: ["Outdated websites", "Inefficient manual processes", "Untapped AI integration"] },
        { label: "Our Levers", items: ["Fresh website overhaul", "Modern automations", "AI implementation"] },
        { label: "Your Outcomes", items: ["Increased online traffic", "Time saved", "Focus on core business"] },
      ],
    },
    team: {
      title: "Us",
      intro: "A small team that stays close to the work. All 3 of us stay hands-on, bringing you through the problem, our solutions and implementation.",
    },
    projects: { title: "Past Projects" },
    faq: {
      eyebrow: "Questions we hear early",
      title: "Reassurance before you commit to anything bigger.",
      intro: "The first conversation should help you decide, not pressure you into a large programme.",
      items: [
        { question: "Do we need clean systems before talking to you?", answer: "No. Most teams come to us while the current setup is still messy. We expect that and work from there." },
        { question: "How quickly can we start with a first move?", answer: "Usually faster than a traditional transformation project. The aim is to define and start one sensible improvement, not redesign everything at once." },
        { question: "Will you push AI even if we are not ready?", answer: "No. We only recommend AI when the process, source material, and review path are ready enough to support it." },
        { question: "Is this only for large companies?", answer: "No. We work with SME teams that need more clarity and less operational drag without hiring a giant consultancy." },
      ],
    },
    footer: { contact: "Contact", location: "Singapore", navigate: "Navigate", home: "Home", copyright: `© ${new Date().getFullYear()} Solv3d. All rights reserved.` },
  },
  zh: {
    brand: { mark: "S3", name: "Solv3d", tagline: "务实的数字化转型" },
    nav: { us: "团队", projects: "项目", contact: "联系" },
    hero: {
      eyebrow: "务实的数字化转型",
      title: "从企业现有工作方式出发的数字化转型。",
      body: "Solv3d 帮助中小企业改善流程、内部工具、报表与 AI 采用，而不是等到数据完美或系统重做后才开始。",
      windowTitle: "从现状到第一个有效动作",
      columns: [
        { label: "当前挑战", items: ["过时的网站", "低效的人工流程", "未开发的 AI 整合"] },
        { label: "我们的手段", items: ["全新网站改版", "现代自动化探索", "有意义的 AI 实施"] },
        { label: "你的成果", items: ["在线流量提升", "时间节省", "更专注于核心业务"] },
      ],
    },
    team: {
      title: "团队",
      intro: "一个贴近工作的小团队。我们三个人都亲力亲为，带你了解问题、我们的方案和落地执行。",
    },
    projects: { title: "过往项目" },
    faq: {
      eyebrow: "我们早期最常听到的问题",
      title: "先让你安心，再谈更大的投入。",
      intro: "第一次沟通应该帮助你判断，而不是把你推进一个过大的项目里。",
      items: [
        { question: "系统还很乱，可以先聊吗？", answer: "可以。大多数团队来找我们时，现状都还不整齐。我们本来就是从这种现实开始工作。" },
        { question: "多久能开始做出第一步？", answer: "通常会比传统转型项目更快。目标是先定义并启动一个合理的改进，而不是一次重做所有东西。" },
        { question: "你们会不会一开始就强推 AI？", answer: "不会。只有当流程、资料来源和复核路径都准备得足够稳妥时，我们才会建议 AI。" },
        { question: "这是只适合大公司的吗？", answer: "不是。我们为需要更清楚判断、又不想请大型咨询公司的中小企业团队服务。" },
      ],
    },
    footer: { contact: "联系", location: "新加坡", navigate: "导航", home: "首页", copyright: `© ${new Date().getFullYear()} Solv3d。保留所有权利。` },
  },
  ms: {
    brand: { mark: "S3", name: "Solv3d", tagline: "transformasi digital yang praktikal" },
    nav: { us: "Kami", projects: "Projek", contact: "Hubungi" },
    hero: {
      eyebrow: "Transformasi digital yang praktikal",
      title: "Transformasi digital yang bermula daripada cara perniagaan anda benar-benar beroperasi.",
      body: "Solv3d membantu PKS memperbaiki proses, alat dalaman, pelaporan, dan penggunaan AI tanpa menunggu data sempurna atau timbunan sistem yang ideal.",
      windowTitle: "Daripada realiti semasa ke langkah pertama yang berguna",
      columns: [
        { label: "Cabaran", items: ["Laman web usang", "Proses manual yang tidak cekap", "Integrasi AI belum diterokai"] },
        { label: "Tuas kami", items: ["Rombakan laman web", "Automasi moden", "Pelaksanaan AI"] },
        { label: "Hasil anda", items: ["Trafik dalam talian meningkat", "Masa dijimatkan", "Fokus pada perniagaan teras"] },
      ],
    },
    team: {
      title: "Kami",
      intro: "Pasukan kecil yang kekal dekat dengan kerja. Kami bertiga kekal hands-on, membawa anda melalui masalah, penyelesaian dan pelaksanaan kami.",
    },
    projects: { title: "Projek Lepas" },
    faq: {
      eyebrow: "Soalan yang biasa muncul awal",
      title: "Kejelasan dahulu sebelum komitmen yang lebih besar.",
      intro: "Perbualan pertama patut membantu anda membuat keputusan, bukan menolak anda ke projek yang terlalu besar.",
      items: [
        { question: "Perlu ke sistem kami sudah kemas sebelum bercakap dengan anda?", answer: "Tidak. Kebanyakan pasukan datang semasa susunan semasa masih bersepah. Kami memang menjangka itu." },
        { question: "Berapa cepat langkah pertama boleh dimulakan?", answer: "Biasanya lebih cepat daripada projek transformasi tradisional. Matlamatnya ialah menentukan dan memulakan satu penambahbaikan yang masuk akal." },
        { question: "Adakah anda akan memaksa AI walaupun kami belum bersedia?", answer: "Tidak. Kami hanya cadangkan AI apabila proses, bahan sumber, dan laluan semakan cukup bersedia." },
        { question: "Adakah ini hanya untuk syarikat besar?", answer: "Tidak. Halaman ini direka untuk pasukan PKS yang perlukan lebih kejelasan dan kurang beban operasi." },
      ],
    },
    footer: { contact: "Hubungi", location: "Singapura", navigate: "Navigasi", home: "Laman utama", copyright: `© ${new Date().getFullYear()} Solv3d. Hak cipta terpelihara.` },
  },
  ta: {
    brand: { mark: "S3", name: "Solv3d", tagline: "நடைமுறை டிஜிட்டல் மாற்றம்" },
    nav: { us: "அணி", projects: "திட்டங்கள்", contact: "தொடர்பு" },
    hero: {
      eyebrow: "நடைமுறை டிஜிட்டல் மாற்றம்",
      title: "உங்கள் நிறுவனம் இப்போது வேலை செய்கிற விதத்திலிருந்தே தொடங்கும் டிஜிட்டல் மாற்றம்.",
      body: "Solv3d சிறு மற்றும் நடுத்தர நிறுவனங்களுக்கு செயல்முறை, உள் கருவிகள், அறிக்கையிடல் மற்றும் AI பயன்பாட்டை மேம்படுத்த உதவுகிறது.",
      windowTitle: "தற்போதைய நிலை முதல் முதல் பயனுள்ள படி வரை",
      columns: [
        { label: "சவால்", items: ["காலாவதியான வலைதளங்கள்", "திறனற்ற கைமுறை செயல்முறைகள்", "பயன்படுத்தப்படாத AI ஒருங்கிணைப்பு"] },
        { label: "எங்கள் வழிமுறைகள்", items: ["புதிய வலைதள மாற்றம்", "நவீன தானியக்கங்கள்", "AI செயல்படுத்தல்"] },
        { label: "உங்கள் விளைவுகள்", items: ["ஆன்லைன் போக்குவரத்து அதிகரிப்பு", "நேரம் சேமிப்பு", "முக்கிய வணிகத்தில் கவனம்"] },
      ],
    },
    team: {
      title: "அணி",
      intro: "வேலைக்கு நெருக்கமாக இருக்கும் சிறு குழு. எங்கள் மூவரும் hands-on ஆக இருந்து, பிரச்சினை, தீர்வுகள் மற்றும் செயல்படுத்தல் வழியாக உங்களை அழைத்துச் செல்கிறோம்.",
    },
    projects: { title: "கடந்த திட்டங்கள்" },
    faq: {
      eyebrow: "ஆரம்பத்தில் நாங்கள் கேட்கும் கேள்விகள்",
      title: "பெரிய commitment க்கு முன் தெளிவும் நிம்மதியும்.",
      intro: "முதல் உரையாடல் உங்களுக்கு முடிவு எடுக்க உதவவேண்டும்; மிகப்பெரிய திட்டத்துக்குள் தள்ள வேண்டாம்.",
      items: [
        { question: "எங்கள் systems இன்னும் சீராக இல்லை. இருந்தும் பேசலாமா?", answer: "ஆமாம். பெரும்பாலான அணிகள் தற்போதைய அமைப்பு இன்னும் குழப்பமாக இருக்கும்போதே எங்களை அணுகுகின்றன." },
        { question: "முதல் படியை எவ்வளவு விரைவாகத் தொடங்கலாம்?", answer: "சாதாரண transformation project ஐ விட பொதுவாக வேகமாகத் தொடங்க முடியும். ஒரு நியாயமான முதல் மேம்பாட்டைத் தொடங்குவதே இலக்கு." },
        { question: "நாங்கள் தயாராக இல்லாவிட்டாலும் AI ஐ தள்ளுவீர்களா?", answer: "இல்லை. process, source material, மற்றும் review path போதுமான அளவு தயாராக இருக்கும் போது மட்டுமே AI ஐ பரிந்துரைக்கிறோம்." },
        { question: "இது பெரிய நிறுவனங்களுக்கு மட்டுமா?", answer: "இல்லை. பெரிய consultancy இல்லாமல் தெளிவும் குறைந்த operational drag உம் தேவைப்படும் SME அணிகளுக்கானது." },
      ],
    },
    footer: { contact: "தொடர்பு", location: "சிங்கப்பூர்", navigate: "வழிசெலுத்தல்", home: "முகப்பு", copyright: `© ${new Date().getFullYear()} Solv3d. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.` },
  },
};

const PROJECTS = {
  items: [
    {
      name: "Fluent",
      type: "Language Learning App",
      description: "A social-media-style language learning platform where users create, share, and explore bite-sized lessons — featuring flashcards, a built-in dictionary, and community-driven content feeds.",
      links: { github: "https://github.com/gongahkia/fluent-prod", youtube: "https://youtu.be/CDzxqKg4azY?si=CeLbFTXc5HBxP5Bz" },
      videos: [
        { src: "/fluent/fluent-onboarding.mp4", label: "Onboarding" },
        { src: "/fluent/fluent-home-feed-1.mp4", label: "Home Feed" },
        { src: "/fluent/fluent-flashcards.mp4", label: "Flashcards" },
        { src: "/fluent/fluent-dictionary.mp4", label: "Dictionary" },
      ],
    },
    {
      name: "DealBreaker",
      type: "LawTech Hackathon — Winner",
      description: "An AI-powered contract analysis tool that transforms legal documents into interactive decision adventures — helping users understand complex clauses through guided scenarios and smart analysis.",
      images: [
        { src: "/lawtech/lawtech-hackathon-1.jpeg", alt: "DealBreaker upload interface" },
        { src: "/lawtech/lawtech-hackathon-2.jpeg", alt: "Contract analysis in progress" },
        { src: "/lawtech/lawtech-hackathon-3.jpeg", alt: "Interactive decision adventure" },
        { src: "/lawtech/lawtech-hackathon-4.jpeg", alt: "Detailed legal overview" },
      ],
      teamPhoto: { src: "/lawtech/lawtech-hackathon-team-win-photo.jpeg", alt: "Team receiving award" },
    },
  ],
};

const TEAM_MEMBERS = [
  { name: "Keith Tang", role: "Product Strategist", portrait: "/founders/keith.jpeg", tags: ["User Requirements", "Business Strategy", "UX"], links: { linkedin: "https://www.linkedin.com/in/keibtang/" } },
  { name: "Gabriel Ong", role: "Technical Lead", portrait: "/founders/gabriel.jpeg", tags: ["Full-Stack Development", "AI Implementation", "DevOps"], links: { linkedin: "https://www.linkedin.com/in/gabriel-zmong/", website: "https://gabrielongzm.com/" } },
  { name: "Astin Tay", role: "Technical Lead", portrait: "/founders/astin.jpeg", tags: ["Legal & Governance", "Solutions Architecture"], links: { linkedin: "https://www.linkedin.com/in/astintay/" } },
];

export function t() { return I18N[lang()] || I18N.en; }
export { PROJECTS, TEAM_MEMBERS };

const CONTACT_EMAIL = "astintwl@gmail.com";
const STORAGE_KEY = "3volve-language";
const DEFAULT_SELECTIONS = {
  business: "services",
  challenge: "workflow",
  setup: "mixed",
  timing: "quarter"
};

const LANGUAGE_OPTIONS = [
  { key: "en", label: "English" },
  { key: "zh", label: "中文" },
  { key: "ms", label: "Bahasa Melayu" },
  { key: "ta", label: "தமிழ்" }
];

const CONTENT = {
  en: {
    brand: {
      tagline: "practical digital transformation"
    },
    nav: {
      solutions: "Solutions",
      about: "About",
      team: "Team"
    },
    cta: {
      contact: "Get in touch",
      secondary: "See how we work"
    },
    hero: {
      eyebrow: "Practical digital transformation",
      title: "Digital transformation that starts from the way your business already works.",
      body: "3volve helps SMEs improve process, internal tools, reporting, and AI adoption without waiting for clean data or a perfect stack.",
      windowTitle: "Current reality to first useful move",
      signals: ["Use existing tools", "Choose with judgment", "Iterate in live use"],
      motion: {
        sourcesLabel: "Current reality",
        sources: ["Inbox threads", "Sheets", "Legacy tools"],
        choicesLabel: "Possible first move",
        choices: ["Process", "Reporting", "Tooling", "AI"],
        outcomesLabel: "What lands",
        outcomes: ["Clearer handoffs", "Useful visibility", "Measured automation"]
      }
    },
    solutions: {
      intro: "We start with the workflow, the tools already in place, and the pressure the team feels now.",
      workflowKicker: "How we work",
      workflowTitle: "Small enough to ship. Clear enough to change behaviour.",
      workflowBody: "The work moves from diagnosis to a live first layer without pretending the business needs a total reset.",
      cards: [
        {
          title: "Process and workflow redesign",
          body: "Untangle handoffs, reviews, ownership, and exceptions before they harden into bigger system problems."
        },
        {
          title: "Internal tools and operating visibility",
          body: "Add the missing layer when spreadsheets, inboxes, and scattered reporting are no longer enough."
        },
        {
          title: "AI where it actually helps",
          body: "Use AI carefully when the workflow, source material, and human checks are ready for it."
        }
      ],
      steps: [
        {
          title: "See the real work",
          body: "Map the people, tools, exceptions, and data already in play."
        },
        {
          title: "Choose the right intervention",
          body: "Decide whether the first answer is process, reporting, tooling, or AI."
        },
        {
          title: "Build the first useful layer",
          body: "Ship something the team can use quickly instead of stretching discovery forever."
        },
        {
          title: "Tighten it in live use",
          body: "Refine from feedback, real edge cases, and actual operating behaviour."
        }
      ]
    },
    about: {
      intro: "Most SMEs do not need more transformation theatre. They need clearer judgment about where work breaks and what the first useful move should be.",
      bodyOne: "That is why 3volve does not jump straight to AI. We start with the process, the current setup, and the data that already exists, even if it is incomplete or messy.",
      bodyTwo: "Sometimes the answer is a better process. Sometimes it is a lighter tool. Sometimes reporting needs to be trusted before anything more ambitious happens. Sometimes AI helps. The point is choosing well, then iterating fast.",
      points: [
        "Meet the business in its current state",
        "Work with the data already available",
        "Ship a first layer quickly and improve from live use"
      ],
      motionCards: [
        {
          key: "inputs",
          label: "Current state",
          title: "Messy inputs are normal.",
          items: ["Email", "Sheets", "Shared drives"]
        },
        {
          key: "decision",
          label: "Judgment",
          title: "The answer is not always AI.",
          items: ["Process", "Reporting", "Tooling", "AI"]
        },
        {
          key: "iteration",
          label: "Delivery",
          title: "Launch, observe, tighten.",
          items: ["First version", "Team feedback", "Refined next step"]
        }
      ]
    },
    team: {
      intro: "3volve stays hands-on. The same people who frame the problem help shape, build, and refine the first version."
    },
    footer: {
      contactLabel: "Contact",
      location: "Singapore",
      languageLabel: "Language",
      copyright: "© {year} 3volve. All rights reserved."
    },
    contact: {
      windowLabel: "Get in touch",
      progressLabel: "Scoped plan",
      draftLabel: "Draft scope note",
      draftNote: "The final button opens an email draft with this note filled in.",
      otherPrompt: "Tell us a little more",
      otherPlaceholder: "Type your answer",
      back: "Back",
      next: "Next",
      review: "Review plan",
      reviewShort: "Review",
      reviewTitle: "Review your scoped plan",
      reviewDescription: "If this looks right, open the drafted email and continue the conversation there.",
      ready: "Open drafted email",
      steps: [
        {
          id: "business",
          shortLabel: "Context",
          question: "What kind of business or team are you running?",
          description: "Pick the closest fit. You can choose Other if none of these match.",
          options: [
            {
              key: "services",
              label: "Professional services",
              detail: "Client-facing teams with delivery handoffs, reviews, and documentation pressure."
            },
            {
              key: "education",
              label: "Education and training",
              detail: "Operators managing enrolment, support, scheduling, content, or learner journeys."
            },
            {
              key: "compliance",
              label: "Compliance-heavy operations",
              detail: "Teams that need traceability, approvals, source control, and stronger operating trust."
            },
            {
              key: "growing",
              label: "Growing operations team",
              detail: "A lean business that has outgrown its current operating model and needs a better next layer."
            },
            {
              key: "other",
              label: "Other",
              detail: "Custom business context shared below."
            }
          ]
        },
        {
          id: "challenge",
          shortLabel: "Need",
          question: "What feels most broken right now?",
          description: "Choose the main pressure point shaping the first move.",
          options: [
            {
              key: "workflow",
              label: "Workflow and handoffs",
              detail: "Work gets stuck or loses context between people, teams, or stages.",
              recommendation: "Start by mapping the current flow, clarifying ownership, and removing the obvious friction before adding more software."
            },
            {
              key: "visibility",
              label: "Reporting and visibility",
              detail: "The team cannot see status clearly or still rebuilds the same numbers by hand.",
              recommendation: "Start by stabilising the reporting path and giving the team a clearer operating view they can trust."
            },
            {
              key: "tools",
              label: "Internal tools and admin load",
              detail: "Too much still depends on manual follow-up, copied data, or inbox coordination.",
              recommendation: "Start with a smaller internal tool or automation layer that removes repeat admin without changing too much at once."
            },
            {
              key: "knowledge",
              label: "Knowledge and search",
              detail: "People struggle to find the right answer, document, or policy quickly.",
              recommendation: "Start by improving the source material and retrieval path so the team can find trusted answers inside the workflow."
            },
            {
              key: "ai",
              label: "Careful AI adoption",
              detail: "The business wants to explore AI but needs a grounded first use case.",
              recommendation: "Start with one narrow AI use case tied to real data, real users, and a clear human review path."
            },
            {
              key: "other",
              label: "Other",
              detail: "Custom challenge shared below.",
              recommendation: "Start with a short working session to frame the problem clearly before deciding whether the first move should be process, tooling, reporting, or AI."
            }
          ]
        },
        {
          id: "setup",
          shortLabel: "Setup",
          question: "What does the current setup look like?",
          description: "This helps shape how much change the team can absorb first.",
          options: [
            {
              key: "manual",
              label: "Mostly manual",
              detail: "A lot still runs through spreadsheets, email, and manual follow-up.",
              advice: "Keep the first change light and close to how the team already works."
            },
            {
              key: "mixed",
              label: "A mix of tools",
              detail: "Some software exists, but the joins between tools and teams still feel patchy.",
              advice: "Keep what is already working and fix the weak joins before adding more layers."
            },
            {
              key: "scattered",
              label: "Scattered data",
              detail: "Important information lives in too many places and ownership is unclear.",
              advice: "Start by creating a clearer source of truth around the work before automating more of it."
            },
            {
              key: "mature",
              label: "Systems exist but adoption is weak",
              detail: "The business has tools already, but the day-to-day behaviour has not settled around them.",
              advice: "Focus on operator experience and change fit so the next move lands in real use."
            },
            {
              key: "other",
              label: "Other",
              detail: "Custom setup shared below.",
              advice: "Keep the first move grounded in the current setup and avoid unnecessary complexity."
            }
          ]
        },
        {
          id: "timing",
          shortLabel: "Timing",
          question: "How quickly do you need a first move?",
          description: "This sets the pace for the first scope and rollout.",
          options: [
            {
              key: "now",
              label: "Now",
              detail: "A practical first move is needed in the next two weeks.",
              summary: "The scope should stay tight and operational from the start.",
              approach: "Move quickly into a short diagnostic and a live first version."
            },
            {
              key: "quarter",
              label: "This quarter",
              detail: "There is room for one focused improvement this quarter.",
              summary: "There is enough space to frame the right first layer well.",
              approach: "Use a short scoping pass, then build one clear improvement the team can absorb."
            },
            {
              key: "explore",
              label: "Exploring",
              detail: "The business is still deciding where the most useful first move is.",
              summary: "The work should begin with sharper framing and option-setting.",
              approach: "Start with discovery, then narrow to the change with the clearest payoff."
            },
            {
              key: "other",
              label: "Other",
              detail: "Custom timing shared below.",
              summary: "The pace can be shaped around the timing you shared.",
              approach: "Match the scope and speed of the first move to your actual window."
            }
          ]
        }
      ],
      plan: {
        titleSuffix: "scoped first move",
        businessLabel: "Business context",
        challengeLabel: "Main pressure",
        setupLabel: "Current setup",
        timingLabel: "Timing",
        recommendationLabel: "Recommended first move",
        subjectPrefix: "3volve enquiry",
        emailGreeting: "Hi 3volve,",
        emailIntro: "We would like to continue the conversation based on the scope note below.",
        emailClose: "Thanks,"
      }
    }
  },
  zh: {
    brand: {
      tagline: "务实的数字化转型"
    },
    nav: {
      solutions: "方案",
      about: "关于",
      team: "团队"
    },
    cta: {
      contact: "联系我们",
      secondary: "查看合作方式"
    },
    hero: {
      eyebrow: "务实的数字化转型",
      title: "从企业现有工作方式出发的数字化转型。",
      body: "3volve 帮助中小企业改善流程、内部工具、报表与 AI 采用，而不是等到数据完美或系统重做后才开始。",
      windowTitle: "从现状到第一个有效动作",
      signals: ["沿用现有工具", "先做正确判断", "在真实使用中迭代"],
      motion: {
        sourcesLabel: "当前现实",
        sources: ["邮箱线程", "表格", "旧系统"],
        choicesLabel: "可能的第一步",
        choices: ["流程", "报表", "工具", "AI"],
        outcomesLabel: "最终落地",
        outcomes: ["更清晰的交接", "更有用的可视化", "更稳妥的自动化"]
      }
    },
    solutions: {
      intro: "我们先看流程、现有工具，以及团队当前真正承受的压力。",
      workflowKicker: "合作方式",
      workflowTitle: "范围足够小，能快速上线；方向足够清晰，能改变行为。",
      workflowBody: "工作会从诊断走到可用的第一层改进，而不是假设企业必须先彻底重置。",
      cards: [
        {
          title: "流程与工作流重整",
          body: "先梳理交接、审核、责任归属和例外情况，再决定是否需要更重的系统。"
        },
        {
          title: "内部工具与运营可视化",
          body: "当表格、邮箱和零散报表不再够用时，补上缺失的一层。"
        },
        {
          title: "在真正合适时引入 AI",
          body: "只有当流程、资料来源和人工复核路径都准备好时，才引入 AI。"
        }
      ],
      steps: [
        {
          title: "看清真实工作",
          body: "梳理当前涉及的人、工具、例外情况和已有数据。"
        },
        {
          title: "选对第一种干预",
          body: "判断答案首先是流程、报表、工具，还是 AI。"
        },
        {
          title: "做出第一层可用改进",
          body: "尽快交付团队真的能用的东西，而不是无限拉长调研。"
        },
        {
          title: "在真实使用中收紧",
          body: "根据反馈、边界情况和实际操作行为继续优化。"
        }
      ]
    },
    about: {
      intro: "大多数中小企业不需要更多“转型表演”。他们需要的是更清楚地判断问题出在哪里，以及第一步应该做什么。",
      bodyOne: "这也是为什么 3volve 不会一开始就跳到 AI。我们先从流程、现有环境和已经存在的数据开始，即使这些数据还不完整或很凌乱。",
      bodyTwo: "有时答案是更好的流程，有时是更轻的工具，有时是先让报表值得信任，有时才轮到 AI。关键在于先选对，再快速迭代。",
      points: [
        "从企业当前状态开始",
        "使用已经存在的数据",
        "快速上线第一层，然后在真实使用中改进"
      ],
      motionCards: [
        {
          key: "inputs",
          label: "当前状态",
          title: "输入混乱很正常。",
          items: ["邮件", "表格", "共享文件夹"]
        },
        {
          key: "decision",
          label: "判断",
          title: "答案不一定是 AI。",
          items: ["流程", "报表", "工具", "AI"]
        },
        {
          key: "iteration",
          label: "交付",
          title: "上线、观察、收紧。",
          items: ["第一版", "团队反馈", "下一步优化"]
        }
      ]
    },
    team: {
      intro: "3volve 保持亲自参与。定义问题的人，也会一起设计、搭建并打磨第一版。"
    },
    footer: {
      contactLabel: "联系",
      location: "新加坡",
      languageLabel: "语言",
      copyright: "© {year} 3volve。保留所有权利。"
    },
    contact: {
      windowLabel: "联系我们",
      progressLabel: "范围草案",
      draftLabel: "范围说明草稿",
      draftNote: "最后一个按钮会打开已经填好此说明的邮件草稿。",
      otherPrompt: "请补充一点背景",
      otherPlaceholder: "请输入你的回答",
      back: "返回",
      next: "下一步",
      review: "查看方案",
      reviewShort: "检查",
      reviewTitle: "检查你的范围草案",
      reviewDescription: "如果这个方向正确，就打开邮件草稿继续沟通。",
      ready: "打开邮件草稿",
      steps: [
        {
          id: "business",
          shortLabel: "背景",
          question: "你经营的是哪一类业务或团队？",
          description: "请选择最接近的选项；如果都不贴切，也可以选“其他”。",
          options: [
            {
              key: "services",
              label: "专业服务",
              detail: "面向客户的团队，常见交付交接、审核和文档压力。"
            },
            {
              key: "education",
              label: "教育与培训",
              detail: "负责招生、支持、排期、内容或学习者旅程的运营团队。"
            },
            {
              key: "compliance",
              label: "合规要求高的运营",
              detail: "需要可追溯、审批、来源控制和更强流程信任的团队。"
            },
            {
              key: "growing",
              label: "正在扩张的运营团队",
              detail: "精干团队已经超出当前运作方式，需要更好的下一层。"
            },
            {
              key: "other",
              label: "其他",
              detail: "下方补充自定义业务背景。"
            }
          ]
        },
        {
          id: "challenge",
          shortLabel: "问题",
          question: "现在最明显的断点是什么？",
          description: "选择最影响第一步范围的压力点。",
          options: [
            {
              key: "workflow",
              label: "流程与交接",
              detail: "工作在不同人、团队或阶段之间卡住，或丢失上下文。",
              recommendation: "先梳理现有流程、明确责任归属、移除最明显的摩擦，再决定是否增加更多软件。"
            },
            {
              key: "visibility",
              label: "报表与可视化",
              detail: "团队看不清状态，或还在手工重复整理同一批数字。",
              recommendation: "先稳定报表路径，让团队拥有一个可信的运营视图。"
            },
            {
              key: "tools",
              label: "内部工具与行政负担",
              detail: "太多事情仍依赖人工追进、复制数据或邮箱协调。",
              recommendation: "先用一个更小的内部工具或自动化层，减少重复行政工作，而不是一次改太多。"
            },
            {
              key: "knowledge",
              label: "知识与搜索",
              detail: "人们很难快速找到正确答案、文件或政策。",
              recommendation: "先改善资料来源和检索路径，让团队能在工作流里找到可信答案。"
            },
            {
              key: "ai",
              label: "谨慎引入 AI",
              detail: "企业希望探索 AI，但需要一个落地且可控的起点。",
              recommendation: "先选一个和真实数据、真实用户、人工复核都绑定的窄场景。"
            },
            {
              key: "other",
              label: "其他",
              detail: "下方补充自定义问题。",
              recommendation: "先用一次短工作坊把问题说清楚，再判断第一步更适合流程、工具、报表还是 AI。"
            }
          ]
        },
        {
          id: "setup",
          shortLabel: "现状",
          question: "目前的环境更接近哪一种？",
          description: "这会影响团队一开始能承受多大的变化。",
          options: [
            {
              key: "manual",
              label: "大多靠人工",
              detail: "很多工作仍通过表格、邮件和人工跟进完成。",
              advice: "第一步应尽量轻量，并贴近团队当前做事方式。"
            },
            {
              key: "mixed",
              label: "工具很多但不连贯",
              detail: "已有一些软件，但工具之间和团队之间的衔接仍很松散。",
              advice: "保留已经有效的部分，先修补连接处，再增加新层。"
            },
            {
              key: "scattered",
              label: "数据分散",
              detail: "重要信息散落在太多地方，责任归属也不清楚。",
              advice: "先围绕任务建立更清晰的事实来源，再自动化更多步骤。"
            },
            {
              key: "mature",
              label: "系统已有但使用不稳",
              detail: "工具已经存在，但日常行为还没有真正围绕它稳定下来。",
              advice: "优先改善操作体验和变更适配，让下一步在真实使用中站稳。"
            },
            {
              key: "other",
              label: "其他",
              detail: "下方补充自定义现状。",
              advice: "第一步保持贴近当前环境，避免不必要的复杂度。"
            }
          ]
        },
        {
          id: "timing",
          shortLabel: "节奏",
          question: "你希望多快看到第一个动作？",
          description: "这会决定第一轮范围和推进节奏。",
          options: [
            {
              key: "now",
              label: "现在",
              detail: "接下来两周内就需要一个实际可行的第一步。",
              summary: "范围一开始就应当紧凑且贴近运营。",
              approach: "快速进入短诊断，并尽快做出可用的第一版。"
            },
            {
              key: "quarter",
              label: "本季度",
              detail: "这个季度内可以做一项聚焦改进。",
              summary: "有足够空间把第一层范围定得更准确。",
              approach: "先做短范围界定，再建设一个团队能吸收的明确改进。"
            },
            {
              key: "explore",
              label: "还在探索",
              detail: "企业仍在判断最有价值的第一步是什么。",
              summary: "这类工作应先从更清晰的问题界定和选项比较开始。",
              approach: "先做发现，再收窄到回报最清楚的那一项改变。"
            },
            {
              key: "other",
              label: "其他",
              detail: "下方补充自定义时间要求。",
              summary: "推进节奏可以按你给出的时间窗口来设计。",
              approach: "让第一步的范围和速度贴合你的实际节奏。"
            }
          ]
        }
      ],
      plan: {
        titleSuffix: "首个范围建议",
        businessLabel: "业务背景",
        challengeLabel: "主要压力",
        setupLabel: "当前环境",
        timingLabel: "时间要求",
        recommendationLabel: "建议的第一步",
        subjectPrefix: "3volve 咨询",
        emailGreeting: "你好，3volve：",
        emailIntro: "我们希望根据下面的范围说明继续沟通。",
        emailClose: "谢谢，"
      }
    }
  },
  ms: {
    brand: {
      tagline: "transformasi digital yang praktikal"
    },
    nav: {
      solutions: "Penyelesaian",
      about: "Tentang",
      team: "Pasukan"
    },
    cta: {
      contact: "Hubungi kami",
      secondary: "Lihat cara kami bekerja"
    },
    hero: {
      eyebrow: "Transformasi digital yang praktikal",
      title: "Transformasi digital yang bermula daripada cara perniagaan anda benar-benar beroperasi.",
      body: "3volve membantu PKS memperbaiki proses, alat dalaman, pelaporan, dan penggunaan AI tanpa menunggu data sempurna atau timbunan sistem yang ideal.",
      windowTitle: "Daripada realiti semasa ke langkah pertama yang berguna",
      signals: ["Guna alat sedia ada", "Pilih dengan pertimbangan", "Ulang baik dalam penggunaan sebenar"],
      motion: {
        sourcesLabel: "Realiti semasa",
        sources: ["Rantaian e-mel", "Lembaran kerja", "Sistem lama"],
        choicesLabel: "Langkah pertama yang mungkin",
        choices: ["Proses", "Pelaporan", "Alat", "AI"],
        outcomesLabel: "Apa yang benar-benar terhasil",
        outcomes: ["Serahan lebih jelas", "Keterlihatan berguna", "Automasi yang terkawal"]
      }
    },
    solutions: {
      intro: "Kami bermula dengan aliran kerja, alat yang sudah wujud, dan tekanan sebenar yang sedang dirasai pasukan.",
      workflowKicker: "Cara kami bekerja",
      workflowTitle: "Cukup kecil untuk dihantar. Cukup jelas untuk mengubah tingkah laku.",
      workflowBody: "Kerja bergerak daripada diagnosis kepada lapisan pertama yang hidup tanpa menganggap perniagaan perlu dirombak sepenuhnya dahulu.",
      cards: [
        {
          title: "Reka semula proses dan aliran kerja",
          body: "Leraikan serahan, semakan, pemilikan, dan pengecualian sebelum semuanya mengeras menjadi masalah sistem yang lebih besar."
        },
        {
          title: "Alat dalaman dan keterlihatan operasi",
          body: "Tambah lapisan yang hilang apabila lembaran kerja, peti masuk, dan pelaporan yang berpecah tidak lagi mencukupi."
        },
        {
          title: "AI hanya apabila benar-benar sesuai",
          body: "Gunakan AI dengan berhati-hati apabila aliran kerja, bahan sumber, dan semakan manusia sudah bersedia."
        }
      ],
      steps: [
        {
          title: "Lihat kerja sebenar",
          body: "Petakan orang, alat, pengecualian, dan data yang sudah ada."
        },
        {
          title: "Pilih campur tangan yang betul",
          body: "Tentukan sama ada jawapan pertama ialah proses, pelaporan, alat, atau AI."
        },
        {
          title: "Bina lapisan pertama yang berguna",
          body: "Hantar sesuatu yang boleh digunakan pasukan dengan cepat, bukan memanjangkan penemuan tanpa akhir."
        },
        {
          title: "Ketatkan dalam penggunaan sebenar",
          body: "Perbaik daripada maklum balas, kes tepi sebenar, dan tingkah laku operasi yang berlaku."
        }
      ]
    },
    about: {
      intro: "Kebanyakan PKS tidak memerlukan lebih banyak sandiwara transformasi. Mereka perlukan pertimbangan yang lebih jelas tentang di mana kerja rosak dan apakah langkah pertama yang berguna.",
      bodyOne: "Sebab itu 3volve tidak terus melompat kepada AI. Kami bermula dengan proses, susunan sedia ada, dan data yang sudah ada walaupun ia belum kemas.",
      bodyTwo: "Kadang-kadang jawapannya ialah proses yang lebih baik. Kadang-kadang alat yang lebih ringan. Kadang-kadang pelaporan perlu dipercayai dahulu. Kadang-kadang AI membantu. Intinya ialah memilih dengan baik, kemudian beriterasi dengan pantas.",
      points: [
        "Temui perniagaan pada keadaan semasanya",
        "Gunakan data yang sudah tersedia",
        "Hantar lapisan pertama dengan cepat dan baiki melalui penggunaan sebenar"
      ],
      motionCards: [
        {
          key: "inputs",
          label: "Keadaan semasa",
          title: "Input yang berselerak itu normal.",
          items: ["E-mel", "Lembaran kerja", "Pemacu kongsi"]
        },
        {
          key: "decision",
          label: "Pertimbangan",
          title: "Jawapannya bukan sentiasa AI.",
          items: ["Proses", "Pelaporan", "Alat", "AI"]
        },
        {
          key: "iteration",
          label: "Pelaksanaan",
          title: "Lancar, perhati, ketatkan.",
          items: ["Versi pertama", "Maklum balas pasukan", "Langkah seterusnya yang diperhalus"]
        }
      ]
    },
    team: {
      intro: "3volve kekal terlibat secara langsung. Orang yang membingkaikan masalah juga membantu membentuk, membina, dan memperhalus versi pertama."
    },
    footer: {
      contactLabel: "Hubungi",
      location: "Singapura",
      languageLabel: "Bahasa",
      copyright: "© {year} 3volve. Hak cipta terpelihara."
    },
    contact: {
      windowLabel: "Hubungi kami",
      progressLabel: "Pelan berlingkup",
      draftLabel: "Draf nota skop",
      draftNote: "Butang terakhir akan membuka draf e-mel yang sudah diisi dengan nota ini.",
      otherPrompt: "Ceritakan sedikit lagi",
      otherPlaceholder: "Taip jawapan anda",
      back: "Kembali",
      next: "Seterusnya",
      review: "Semak pelan",
      reviewShort: "Semak",
      reviewTitle: "Semak pelan skop anda",
      reviewDescription: "Jika ini nampak tepat, buka draf e-mel dan teruskan perbualan di sana.",
      ready: "Buka draf e-mel",
      steps: [
        {
          id: "business",
          shortLabel: "Konteks",
          question: "Apakah jenis perniagaan atau pasukan anda?",
          description: "Pilih yang paling hampir. Anda juga boleh pilih Lain-lain.",
          options: [
            {
              key: "services",
              label: "Perkhidmatan profesional",
              detail: "Pasukan berdepan klien dengan serahan, semakan, dan tekanan dokumentasi."
            },
            {
              key: "education",
              label: "Pendidikan dan latihan",
              detail: "Operator yang mengurus pendaftaran, sokongan, jadual, kandungan, atau perjalanan pelajar."
            },
            {
              key: "compliance",
              label: "Operasi berkeperluan pematuhan tinggi",
              detail: "Pasukan yang memerlukan kebolehkesanan, kelulusan, kawalan sumber, dan keyakinan operasi yang lebih kuat."
            },
            {
              key: "growing",
              label: "Pasukan operasi yang sedang berkembang",
              detail: "Perniagaan lean yang sudah melebihi model operasi semasanya dan perlukan lapisan seterusnya."
            },
            {
              key: "other",
              label: "Lain-lain",
              detail: "Konteks perniagaan tersuai dikongsi di bawah."
            }
          ]
        },
        {
          id: "challenge",
          shortLabel: "Keperluan",
          question: "Apa yang paling terasa rosak sekarang?",
          description: "Pilih tekanan utama yang membentuk langkah pertama.",
          options: [
            {
              key: "workflow",
              label: "Aliran kerja dan serahan",
              detail: "Kerja tersekat atau hilang konteks antara orang, pasukan, atau peringkat.",
              recommendation: "Mulakan dengan memetakan aliran semasa, menjelaskan pemilikan, dan membuang geseran yang paling jelas sebelum menambah lebih banyak perisian."
            },
            {
              key: "visibility",
              label: "Pelaporan dan keterlihatan",
              detail: "Pasukan tidak dapat melihat status dengan jelas atau masih membina semula angka yang sama secara manual.",
              recommendation: "Mulakan dengan menstabilkan laluan pelaporan dan memberikan pasukan pandangan operasi yang boleh dipercayai."
            },
            {
              key: "tools",
              label: "Alat dalaman dan beban pentadbiran",
              detail: "Terlalu banyak lagi bergantung pada susulan manual, salinan data, atau koordinasi peti masuk.",
              recommendation: "Mulakan dengan alat dalaman yang lebih kecil atau lapisan automasi yang mengurangkan kerja pentadbiran berulang tanpa mengubah terlalu banyak sekaligus."
            },
            {
              key: "knowledge",
              label: "Pengetahuan dan carian",
              detail: "Orang sukar mencari jawapan, dokumen, atau dasar yang betul dengan cepat.",
              recommendation: "Mulakan dengan memperbaiki bahan sumber dan laluan capaian supaya pasukan boleh mendapatkan jawapan yang dipercayai dalam aliran kerja."
            },
            {
              key: "ai",
              label: "Penerapan AI yang berhati-hati",
              detail: "Perniagaan mahu meneroka AI tetapi perlukan kes guna pertama yang berasas.",
              recommendation: "Mulakan dengan satu kes guna AI yang sempit dan terikat pada data sebenar, pengguna sebenar, dan laluan semakan manusia yang jelas."
            },
            {
              key: "other",
              label: "Lain-lain",
              detail: "Cabaran tersuai dikongsi di bawah.",
              recommendation: "Mulakan dengan sesi kerja yang ringkas untuk membingkaikan masalah dengan jelas sebelum memutuskan sama ada langkah pertama patut berupa proses, alat, pelaporan, atau AI."
            }
          ]
        },
        {
          id: "setup",
          shortLabel: "Susunan",
          question: "Bagaimanakah rupa susunan semasa anda?",
          description: "Ini membantu menentukan sejauh mana perubahan awal yang boleh diserap pasukan.",
          options: [
            {
              key: "manual",
              label: "Kebanyakannya manual",
              detail: "Banyak kerja masih berjalan melalui lembaran kerja, e-mel, dan susulan manual.",
              advice: "Pastikan perubahan pertama ringan dan dekat dengan cara pasukan sudah bekerja."
            },
            {
              key: "mixed",
              label: "Campuran alat",
              detail: "Ada perisian sedia ada, tetapi sambungan antara alat dan pasukan masih terasa longgar.",
              advice: "Kekalkan apa yang sudah berfungsi dan baiki sambungan lemah sebelum menambah lapisan baru."
            },
            {
              key: "scattered",
              label: "Data bertaburan",
              detail: "Maklumat penting hidup di terlalu banyak tempat dan pemilikan tidak jelas.",
              advice: "Mulakan dengan sumber kebenaran yang lebih jelas di sekeliling kerja sebelum mengautomasikan lebih banyak daripadanya."
            },
            {
              key: "mature",
              label: "Sistem ada tetapi penggunaan lemah",
              detail: "Perniagaan sudah ada alat, tetapi tingkah laku harian belum benar-benar stabil di sekelilingnya.",
              advice: "Fokus pada pengalaman operator dan kesesuaian perubahan supaya langkah seterusnya benar-benar digunakan."
            },
            {
              key: "other",
              label: "Lain-lain",
              detail: "Susunan tersuai dikongsi di bawah.",
              advice: "Pastikan langkah pertama berakar pada susunan semasa dan elakkan kerumitan yang tidak perlu."
            }
          ]
        },
        {
          id: "timing",
          shortLabel: "Masa",
          question: "Berapa cepat anda perlukan langkah pertama?",
          description: "Ini menetapkan rentak untuk skop awal dan pelancarannya.",
          options: [
            {
              key: "now",
              label: "Sekarang",
              detail: "Langkah praktikal pertama diperlukan dalam dua minggu akan datang.",
              summary: "Skop perlu ketat dan operasional sejak awal.",
              approach: "Bergerak cepat kepada diagnosis ringkas dan versi pertama yang hidup."
            },
            {
              key: "quarter",
              label: "Suku ini",
              detail: "Ada ruang untuk satu penambahbaikan yang fokus dalam suku ini.",
              summary: "Ada ruang yang cukup untuk membingkaikan lapisan pertama dengan baik.",
              approach: "Gunakan skop ringkas dahulu, kemudian bina satu penambahbaikan yang jelas dan boleh diserap pasukan."
            },
            {
              key: "explore",
              label: "Masih meneroka",
              detail: "Perniagaan masih menentukan apakah langkah pertama yang paling berguna.",
              summary: "Kerja patut bermula dengan pembingkaian yang lebih tajam dan penetapan pilihan.",
              approach: "Mulakan dengan discovery, kemudian sempitkan kepada perubahan yang paling jelas pulangannya."
            },
            {
              key: "other",
              label: "Lain-lain",
              detail: "Keperluan masa tersuai dikongsi di bawah.",
              summary: "Rentaknya boleh dibentuk mengikut jangka masa yang anda kongsi.",
              approach: "Padankan skop dan kelajuan langkah pertama dengan jendela masa sebenar anda."
            }
          ]
        }
      ],
      plan: {
        titleSuffix: "langkah pertama yang disyorkan",
        businessLabel: "Konteks perniagaan",
        challengeLabel: "Tekanan utama",
        setupLabel: "Susunan semasa",
        timingLabel: "Masa",
        recommendationLabel: "Langkah pertama yang disyorkan",
        subjectPrefix: "Pertanyaan 3volve",
        emailGreeting: "Hai 3volve,",
        emailIntro: "Kami ingin meneruskan perbualan berdasarkan nota skop di bawah.",
        emailClose: "Terima kasih,"
      }
    }
  },
  ta: {
    brand: {
      tagline: "நடைமுறை டிஜிட்டல் மாற்றம்"
    },
    nav: {
      solutions: "தீர்வுகள்",
      about: "பற்றி",
      team: "அணி"
    },
    cta: {
      contact: "தொடர்பு கொள்ளுங்கள்",
      secondary: "நாங்கள் எப்படி பணிபுரிகிறோம்"
    },
    hero: {
      eyebrow: "நடைமுறை டிஜிட்டல் மாற்றம்",
      title: "உங்கள் நிறுவனம் இப்போது வேலை செய்கிற விதத்திலிருந்தே தொடங்கும் டிஜிட்டல் மாற்றம்.",
      body: "3volve சிறு மற்றும் நடுத்தர நிறுவனங்களுக்கு செயல்முறை, உள் கருவிகள், அறிக்கையிடல் மற்றும் AI பயன்பாட்டை மேம்படுத்த உதவுகிறது; சுத்தமான தரவு அல்லது முழுமையான stack க்காக காத்திருக்க வேண்டியதில்லை.",
      windowTitle: "இற்போதைய நிலை முதல் முதல் பயனுள்ள அடுத்த படி வரை",
      signals: ["இருக்கும் கருவிகளிலிருந்தே தொடங்கு", "சரியான தீர்மானம் செய்", "உண்மை பயன்பாட்டில் மேம்படுத்து"],
      motion: {
        sourcesLabel: "இற்போதைய நிலை",
        sources: ["மின்னஞ்சல் தொடர்கள்", "அட்டவணைகள்", "பழைய அமைப்புகள்"],
        choicesLabel: "சாத்தியமான முதல் நடவடிக்கை",
        choices: ["செயல்முறை", "அறிக்கையிடல்", "கருவிகள்", "AI"],
        outcomesLabel: "நிறைவேறும் விளைவு",
        outcomes: ["தெளிவான handoff", "பயனுள்ள visibility", "கட்டுப்பாட்டுள்ள automation"]
      }
    },
    solutions: {
      intro: "நாங்கள் முதலில் workflow, ஏற்கனவே உள்ள கருவிகள், மற்றும் குழு தற்போது உணரும் அழுத்தத்தை பார்க்கிறோம்.",
      workflowKicker: "நாங்கள் வேலை செய்வது",
      workflowTitle: "வெளியிடுவதற்கு போதுமான அளவு சுருக்கமாக. நடத்தை மாற்றுவதற்கு போதுமான அளவு தெளிவாக.",
      workflowBody: "மொத்த அமைப்பை முழுவதும் மறுசீரமைக்க வேண்டுமென கருதாமல், வேலை diagnosis இலிருந்து பயன்படுத்தக்கூடிய முதல் அடுக்கிற்கு நகர்கிறது.",
      cards: [
        {
          title: "செயல்முறை மற்றும் workflow மறுவடிவு",
          body: "handoff, review, ownership, மற்றும் exception களை முதலில் சரி செய்து, பெரிய system சிக்கலாக மாறாமல் தடுக்கவும்."
        },
        {
          title: "உள் கருவிகள் மற்றும் செயல்பாட்டு visibility",
          body: "spreadsheet, inbox, மற்றும் சிதறிய reporting போதாமல் போகும் இடத்தில் தேவைப்படும் அடுத்த அடுக்கை சேர்க்கவும்."
        },
        {
          title: "உண்மையில் பொருந்தும் இடத்தில் மட்டும் AI",
          body: "workflow, source material, மற்றும் human review path தயாரான பிறகே AI ஐ கொண்டு வாருங்கள்."
        }
      ],
      steps: [
        {
          title: "உண்மையான வேலையை பாருங்கள்",
          body: "ஏற்கனவே பயன்படுத்தப்படும் மனிதர்கள், கருவிகள், exception கள், மற்றும் data ஐ வரைபடமிடுங்கள்."
        },
        {
          title: "சரியான intervention ஐ தேர்ந்தெடுக்கவும்",
          body: "முதல் பதில் செயல்முறைதானா, reporting தானா, tooling தானா, அல்லது AI தானா என்பதை தீர்மானிக்கவும்."
        },
        {
          title: "முதல் பயனுள்ள அடுக்கை உருவாக்கவும்",
          body: "முடிவில்லாத discovery க்கு பதில், குழு விரைவாக பயன்படுத்தக்கூடிய ஒன்றை வெளியிடுங்கள்."
        },
        {
          title: "உண்மையான பயன்பாட்டில் சீரமைக்கவும்",
          body: "feedback, edge case, மற்றும் actual operating behaviour அடிப்படையில் மேம்படுத்துங்கள்."
        }
      ]
    },
    about: {
      intro: "பெரும்பாலான SMEs க்கு இன்னும் அதிகமான 'transformation theatre' தேவையில்லை. வேலை எங்கு உடைகிறது, முதல் பயனுள்ள படி எது என்பதைப் பற்றிய தெளிவான தீர்மானமே தேவை.",
      bodyOne: "அதனால்தான் 3volve நேராக AI க்கு தாவுவதில்லை. முழுமையில்லாததாயினும் குழப்பமானதாயினும், ஏற்கனவே உள்ள செயல்முறை, setup, மற்றும் data இலிருந்தே தொடங்குகிறோம்.",
      bodyTwo: "சில நேரங்களில் பதில் நல்ல செயல்முறை. சில நேரங்களில் இலகுவான கருவி. சில நேரங்களில் reporting நம்பகமாக வேண்டும். சில நேரங்களில் AI உதவும். முக்கியம் என்னவென்றால் சரியாக தேர்ந்தெடுத்து, பின்னர் வேகமாக iteration செய்வது.",
      points: [
        "நிறுவனத்தை அதன் தற்போதைய நிலையிலேயே சந்திக்கவும்",
        "ஏற்கனவே உள்ள data உடன் வேலை செய்யவும்",
        "முதல் அடுக்கை விரைவாக வெளியிட்டு, live use மூலம் மேம்படுத்தவும்"
      ],
      motionCards: [
        {
          key: "inputs",
          label: "தற்போதைய நிலை",
          title: "குழப்பமான input கள் சாதாரணம்.",
          items: ["மின்னஞ்சல்", "அட்டவணைகள்", "பகிரப்பட்ட drive கள்"]
        },
        {
          key: "decision",
          label: "தீர்மானம்",
          title: "பதில் எப்போதும் AI அல்ல.",
          items: ["செயல்முறை", "அறிக்கையிடல்", "கருவிகள்", "AI"]
        },
        {
          key: "iteration",
          label: "வழங்கல்",
          title: "வெளியிடு, கவனி, சீரமை.",
          items: ["முதல் பதிப்பு", "குழு கருத்து", "சீரமைக்கப்பட்ட அடுத்த படி"]
        }
      ]
    },
    team: {
      intro: "3volve நேரடியாகவே பணியில் இருக்கும். பிரச்சினையை வரையறுக்கும் அதே நபர்களே முதல் பதிப்பை வடிவமைத்து, உருவாக்கி, மேம்படுத்த உதவுவார்கள்."
    },
    footer: {
      contactLabel: "தொடர்பு",
      location: "சிங்கப்பூர்",
      languageLabel: "மொழி",
      copyright: "© {year} 3volve. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    },
    contact: {
      windowLabel: "தொடர்பு கொள்ளுங்கள்",
      progressLabel: "வரையறுக்கப்பட்ட திட்டம்",
      draftLabel: "Scope குறிப்பு வரைவு",
      draftNote: "இறுதி பட்டன் இந்த குறிப்புடன் முன் நிரப்பப்பட்ட மின்னஞ்சல் draft ஐ திறக்கும்.",
      otherPrompt: "கொஞ்சம் மேலும் சொல்லுங்கள்",
      otherPlaceholder: "உங்கள் பதிலை টাইப் செய்யுங்கள்",
      back: "பின்",
      next: "அடுத்து",
      review: "திட்டத்தை பார்க்கவும்",
      reviewShort: "பரிசீலனை",
      reviewTitle: "உங்கள் scoped plan ஐ பரிசீலிக்கவும்",
      reviewDescription: "இது சரியாகத் தோன்றினால், email draft ஐ திறந்து அங்கிருந்து உரையாடலை தொடருங்கள்.",
      ready: "மின்னஞ்சல் draft ஐ திறக்கவும்",
      steps: [
        {
          id: "business",
          shortLabel: "சூழல்",
          question: "நீங்கள் எந்த வகை நிறுவனம் அல்லது குழுவை நடத்துகிறீர்கள்?",
          description: "அருகிலான தேர்வை தேர்ந்தெடுக்கவும். பொருந்தவில்லை என்றால் 'மற்றவை' ஐ தேர்ந்தெடுக்கலாம்.",
          options: [
            {
              key: "services",
              label: "தொழில்முறை சேவைகள்",
              detail: "client-facing குழுக்கள்; delivery handoff, review, மற்றும் documentation அழுத்தம் அதிகம்."
            },
            {
              key: "education",
              label: "கல்வி மற்றும் பயிற்சி",
              detail: "enrolment, support, scheduling, content, அல்லது learner journey களை நிர்வகிக்கும் operators."
            },
            {
              key: "compliance",
              label: "compliance அதிகம் தேவைப்படும் operations",
              detail: "traceability, approval, source control, மற்றும் அதிக operating trust தேவைப்படும் குழுக்கள்."
            },
            {
              key: "growing",
              label: "வளரும் operations குழு",
              detail: "தற்போதைய operating model ஐ கடந்துபோன ஒரு lean business; அடுத்த நல்ல அடுக்கு தேவைப்படுகிறது."
            },
            {
              key: "other",
              label: "மற்றவை",
              detail: "கீழே தனிப்பயன் business context பகிரப்பட்டுள்ளது."
            }
          ]
        },
        {
          id: "challenge",
          shortLabel: "தேவை",
          question: "இப்போது மிகவும் உடைந்து காணப்படுவது எது?",
          description: "முதல் படி எதை நோக்கி இருக்க வேண்டும் என்பதை தீர்மானிக்கும் முக்கிய அழுத்தத்தை தேர்ந்தெடுக்கவும்.",
          options: [
            {
              key: "workflow",
              label: "workflow மற்றும் handoff",
              detail: "வேலை மனிதர்கள், குழுக்கள், அல்லது நிலைகளுக்கு இடையில் சிக்கிக் கொள்கிறது அல்லது context இழக்கிறது.",
              recommendation: "முதலில் current flow ஐ map செய்து, ownership ஐ தெளிவுபடுத்தி, மேலும் software சேர்ப்பதற்கு முன் வெளிப்படையான friction ஐ அகற்றுங்கள்."
            },
            {
              key: "visibility",
              label: "reporting மற்றும் visibility",
              detail: "குழுவிற்கு status தெளிவாக தெரியவில்லை அல்லது அதே எண்களை கையால் மீண்டும் உருவாக்க வேண்டி வருகிறது.",
              recommendation: "முதலில் reporting பாதையை நிலைப்படுத்தி, குழு நம்பக்கூடிய operating view ஒன்றை உருவாக்குங்கள்."
            },
            {
              key: "tools",
              label: "உள் கருவிகள் மற்றும் admin சுமை",
              detail: "manual follow-up, copied data, அல்லது inbox coordination மீது இன்னும் அதிகம் சார்ந்திருக்கிறது.",
              recommendation: "ஒரே நேரத்தில் மிக அதிகம் மாற்றாமல், repeated admin ஐ குறைக்கும் சிறிய internal tool அல்லது automation layer இலிருந்து தொடங்குங்கள்."
            },
            {
              key: "knowledge",
              label: "knowledge மற்றும் search",
              detail: "சரியான பதில், document, அல்லது policy ஐ மக்கள் விரைவாகக் கண்டுபிடிக்க முடியவில்லை.",
              recommendation: "workflow க்குள் நம்பகமான பதில்களை பெற source material மற்றும் retrieval பாதையை முதலில் மேம்படுத்துங்கள்."
            },
            {
              key: "ai",
              label: "கவனமான AI பயன்பாடு",
              detail: "AI ஐ ஆராய வேண்டும்; ஆனால் நிலையான முதல் use case வேண்டும்.",
              recommendation: "உண்மையான data, உண்மையான users, மற்றும் தெளிவான human review path உடன் இணைந்த ஒரு narrow AI use case இலிருந்து தொடங்குங்கள்."
            },
            {
              key: "other",
              label: "மற்றவை",
              detail: "கீழே தனிப்பயன் challenge பகிரப்பட்டுள்ளது.",
              recommendation: "முதலில் ஒரு சுருக்கமான working session மூலம் பிரச்சினையைத் தெளிவுபடுத்தி, முதல் intervention செயல்முறைதானா, tooling தானா, reporting தானா, அல்லது AI தானா என்பதை முடிவு செய்யுங்கள்."
            }
          ]
        },
        {
          id: "setup",
          shortLabel: "அமைப்பு",
          question: "தற்போதைய setup எப்படிப் பார்க்கிறது?",
          description: "குழு முதலில் எவ்வளவு மாற்றத்தை ஏற்க முடியும் என்பதைக் காண இது உதவும்.",
          options: [
            {
              key: "manual",
              label: "மிகவும் manual",
              detail: "பல வேலைகள் இன்னும் spreadsheet, email, மற்றும் manual follow-up வழியாக செல்கின்றன.",
              advice: "முதல் மாற்றம் இலகுவாகவும், குழு ஏற்கனவே வேலை செய்கிற முறைக்கு அருகிலுமாக இருக்க வேண்டும்."
            },
            {
              key: "mixed",
              label: "கலந்த கருவிகள்",
              detail: "சில software ஏற்கனவே உள்ளது; ஆனால் tools மற்றும் teams க்கிடையேயான இணைப்பு இன்னும் பலவீனமாக உள்ளது.",
              advice: "ஏற்கனவே வேலை செய்யும் விஷயங்களை வைத்துக் கொண்டு, புதிய அடுக்குகளை சேர்ப்பதற்கு முன் பலவீனமான இணைப்புகளைச் சரிசெய்யுங்கள்."
            },
            {
              key: "scattered",
              label: "சிதறிய data",
              detail: "முக்கிய தகவல் பல இடங்களில் உள்ளது; ownership தெளிவாக இல்லை.",
              advice: "மேலும் automation செய்வதற்கு முன், வேலையைச் சுற்றி ஒரு தெளிவான source of truth அமைக்கவும்."
            },
            {
              key: "mature",
              label: "systems உள்ளன; ஆனால் adoption பலவீனம்",
              detail: "கருவிகள் உள்ளன; ஆனால் நாள் தோறும் நடத்தை அவற்றைச் சுற்றி இன்னும் நிலையாகவில்லை.",
              advice: "அடுத்த படி live use இல் நிலைநிற்ற operator experience மற்றும் change fit மீது கவனம் செலுத்துங்கள்."
            },
            {
              key: "other",
              label: "மற்றவை",
              detail: "கீழே தனிப்பயன் setup பகிரப்பட்டுள்ளது.",
              advice: "முதல் படியை தற்போதைய setup இல் உறுதியாக வைத்துக் கொண்டு, தேவையற்ற சிக்கலை தவிர்க்கவும்."
            }
          ]
        },
        {
          id: "timing",
          shortLabel: "நேரம்",
          question: "முதல் பயனுள்ள படி எவ்வளவு விரைவாக வேண்டும்?",
          description: "இது முதல் scope மற்றும் rollout க்கு வேகத்தை அமைக்கிறது.",
          options: [
            {
              key: "now",
              label: "இப்போது",
              detail: "அடுத்த இரண்டு வாரங்களில் ஒரு நடைமுறை முதல் படி தேவைப்படுகிறது.",
              summary: "scope ஆரம்பத்திலிருந்தே இறுக்கமாகவும் செயல்பாட்டு மையமாகவும் இருக்க வேண்டும்.",
              approach: "விரைவாக ஒரு குறுகிய diagnostic மற்றும் live first version க்கு நகரவும்."
            },
            {
              key: "quarter",
              label: "இந்த காலாண்டில்",
              detail: "இந்த காலாண்டில் ஒரு focused improvement க்கு இடம் உள்ளது.",
              summary: "முதல் layer ஐ நன்றாக வரையறுக்க போதுமான இடம் உள்ளது.",
              approach: "முதலில் ஒரு short scoping pass, பின்னர் குழு ஏற்கக்கூடிய ஒரு தெளிவான மேம்பாட்டை உருவாக்கவும்."
            },
            {
              key: "explore",
              label: "ஆராய்ந்து கொண்டிருக்கிறோம்",
              detail: "மிகப் பயனுள்ள முதல் படி எது என்பதை நிறுவனம் இன்னும் தீர்மானித்து வருகிறது.",
              summary: "இந்த வேலை முதலில் sharper framing மற்றும் option-setting மூலம் தொடங்க வேண்டும்.",
              approach: "முதலில் discovery செய்யுங்கள்; பின்னர் தெளிவான பயன் தரும் மாற்றத்திற்குள் குறுக்குங்கள்."
            },
            {
              key: "other",
              label: "மற்றவை",
              detail: "கீழே தனிப்பயன் timing பகிரப்பட்டுள்ளது.",
              summary: "நீங்கள் பகிர்ந்த காலச்சூழலை அடிப்படையாகக் கொண்டு வேகம் அமைக்கலாம்.",
              approach: "முதல் படியின் scope மற்றும் வேகத்தை உங்கள் உண்மையான நேரச் சாளரத்துடன் பொருத்துங்கள்."
            }
          ]
        }
      ],
      plan: {
        titleSuffix: "வரையறுக்கப்பட்ட முதல் படி",
        businessLabel: "Business context",
        challengeLabel: "முக்கிய அழுத்தம்",
        setupLabel: "தற்போதைய setup",
        timingLabel: "நேரம்",
        recommendationLabel: "பரிந்துரைக்கப்படும் முதல் படி",
        subjectPrefix: "3volve enquiry",
        emailGreeting: "வணக்கம் 3volve,",
        emailIntro: "கீழே உள்ள scope note அடிப்படையில் உரையாடலைத் தொடர விரும்புகிறோம்.",
        emailClose: "நன்றி,"
      }
    }
  }
};

const FOUNDERS = [
  {
    key: "astin",
    name: "Astin Tay",
    initials: "AT",
    portrait: "assets/founders/astin.jpg",
    content: {
      en: {
        role: "Workflow, governance, and problem framing",
        lead: "Starts with the operating reality, the constraints, and where structure matters most.",
        bio: "Helps teams frame the real problem before any tooling decision is made.",
        tags: ["Workflow", "Governance", "Scope"]
      },
      zh: {
        role: "流程、治理与问题界定",
        lead: "从运营现实、约束和结构需求开始。",
        bio: "帮助团队在任何工具决策前先把真正的问题说清楚。",
        tags: ["流程", "治理", "范围"]
      },
      ms: {
        role: "Aliran kerja, tadbir urus, dan pembingkaian masalah",
        lead: "Bermula dengan realiti operasi, kekangan, dan tempat struktur paling penting.",
        bio: "Membantu pasukan mentakrif masalah sebenar sebelum sebarang keputusan alat dibuat.",
        tags: ["Aliran kerja", "Tadbir urus", "Skop"]
      },
      ta: {
        role: "Workflow, governance, மற்றும் problem framing",
        lead: "இயக்க உண்மை நிலை, கட்டுப்பாடுகள், மற்றும் structure மிக முக்கியமான இடத்திலிருந்து தொடங்குகிறார்.",
        bio: "எந்த tooling முடிவுக்கும் முன் உண்மையான பிரச்சினையைத் தெளிவுபடுத்த குழுக்களுக்கு உதவுகிறார்.",
        tags: ["Workflow", "Governance", "Scope"]
      }
    }
  },
  {
    key: "keith",
    name: "Keith Tang",
    initials: "KT",
    portrait: "assets/founders/keith.jpg",
    content: {
      en: {
        role: "Product, UX, and adoption",
        lead: "Turns the solution into something operators can actually understand and use.",
        bio: "Keeps the first version usable enough that behaviour changes in day-to-day work.",
        tags: ["Product", "UX", "Adoption"]
      },
      zh: {
        role: "产品、体验与落地采用",
        lead: "把方案做成操作人员真正能理解和使用的东西。",
        bio: "确保第一版足够可用，能改变日常工作的实际行为。",
        tags: ["产品", "体验", "采用"]
      },
      ms: {
        role: "Produk, UX, dan penerimaan",
        lead: "Menjadikan penyelesaian sesuatu yang benar-benar boleh difahami dan digunakan oleh operator.",
        bio: "Memastikan versi pertama cukup boleh guna untuk mengubah tingkah laku kerja harian.",
        tags: ["Produk", "UX", "Penerimaan"]
      },
      ta: {
        role: "Product, UX, மற்றும் adoption",
        lead: "operators உண்மையில் புரிந்து கொண்டு பயன்படுத்தக்கூடியதாக தீர்வை மாற்றுகிறார்.",
        bio: "தினசரி பணியில் நடத்தை மாறும் அளவுக்கு முதல் பதிப்பை usable ஆக வைத்திருக்கிறார்.",
        tags: ["Product", "UX", "Adoption"]
      }
    }
  },
  {
    key: "gabriel",
    name: "Gabriel Ong",
    initials: "GO",
    portrait: "assets/founders/gabriel.jpg",
    content: {
      en: {
        role: "Systems, tooling, and AI delivery",
        lead: "Builds the technical layer when the first move needs real engineering or AI implementation.",
        bio: "Owns the delivery side when the answer involves systems, integrations, or applied AI.",
        tags: ["Systems", "Tooling", "AI"]
      },
      zh: {
        role: "系统、工具与 AI 交付",
        lead: "当第一步需要真正的工程实现或 AI 落地时，负责技术层搭建。",
        bio: "当答案涉及系统、集成或应用型 AI 时，负责交付侧。",
        tags: ["系统", "工具", "AI"]
      },
      ms: {
        role: "Sistem, alat, dan penyampaian AI",
        lead: "Membina lapisan teknikal apabila langkah pertama memerlukan kejuruteraan sebenar atau pelaksanaan AI.",
        bio: "Memegang sisi penyampaian apabila jawapannya melibatkan sistem, integrasi, atau AI terapan.",
        tags: ["Sistem", "Alat", "AI"]
      },
      ta: {
        role: "Systems, tooling, மற்றும் AI delivery",
        lead: "முதல் நடவடிக்கைக்கு உண்மையான engineering அல்லது AI implementation தேவைப்பட்டால் technical layer ஐ உருவாக்குகிறார்.",
        bio: "systems, integration, அல்லது applied AI உடன் பதில் தொடர்புடையபோது delivery பகுதியை கவனிக்கிறார்.",
        tags: ["Systems", "Tooling", "AI"]
      }
    }
  }
];

function getContent(language) {
  return CONTENT[language] || CONTENT.en;
}

function getPathValue(object, path) {
  return path.split(".").reduce((value, segment) => (value ? value[segment] : undefined), object);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createState(overrides = {}) {
  const wizardOverrides = overrides.wizard || {};

  return {
    language: overrides.language || "en",
    overlayOpen: Boolean(overrides.overlayOpen),
    stepIndex: typeof overrides.stepIndex === "number" ? overrides.stepIndex : 0,
    wizard: {
      business: wizardOverrides.business ?? DEFAULT_SELECTIONS.business,
      challenge: wizardOverrides.challenge ?? DEFAULT_SELECTIONS.challenge,
      setup: wizardOverrides.setup ?? DEFAULT_SELECTIONS.setup,
      timing: wizardOverrides.timing ?? DEFAULT_SELECTIONS.timing,
      other: { ...(wizardOverrides.other || {}) }
    }
  };
}

function getHeroContent(language = "en") {
  const hero = getContent(language).hero;

  return {
    eyebrow: hero.eyebrow,
    title: hero.title,
    body: hero.body,
    windowTitle: hero.windowTitle,
    signals: [...hero.signals],
    motion: {
      sourcesLabel: hero.motion.sourcesLabel,
      sources: [...hero.motion.sources],
      choicesLabel: hero.motion.choicesLabel,
      choices: [...hero.motion.choices],
      outcomesLabel: hero.motion.outcomesLabel,
      outcomes: [...hero.motion.outcomes]
    }
  };
}

function getSolutionCards(language = "en") {
  return getContent(language).solutions.cards.map((item) => ({ ...item }));
}

function getWorkflowSteps(language = "en") {
  return getContent(language).solutions.steps.map((item) => ({ ...item }));
}

function getAboutContent(language = "en") {
  const about = getContent(language).about;

  return {
    intro: about.intro,
    bodyOne: about.bodyOne,
    bodyTwo: about.bodyTwo,
    points: [...about.points],
    motionCards: about.motionCards.map((item) => ({ ...item, items: [...item.items] }))
  };
}

function getTeamCards(language = "en") {
  return FOUNDERS.map((founder) => ({
    key: founder.key,
    name: founder.name,
    initials: founder.initials,
    portrait: founder.portrait,
    ...(founder.content[language] || founder.content.en)
  })).map((item) => ({ ...item, tags: [...item.tags] }));
}

function getWizardSteps(language = "en") {
  return getContent(language).contact.steps.map((step) => ({
    id: step.id,
    shortLabel: step.shortLabel,
    question: step.question,
    description: step.description,
    options: step.options.map((option) => ({ ...option }))
  }));
}

function getFooterCopyright(language = "en") {
  return getContent(language).footer.copyright.replace("{year}", String(new Date().getFullYear()));
}

function resolveSelection(state, stepId, language = "en") {
  const steps = getWizardSteps(language);
  const step = steps.find((item) => item.id === stepId);

  if (!step) {
    return null;
  }

  const selectedKey = state.wizard[stepId] ?? DEFAULT_SELECTIONS[stepId];
  const selected = step.options.find((option) => option.key === selectedKey) || step.options[0];

  if (selected.key !== "other") {
    return selected;
  }

  const customText = (state.wizard.other?.[stepId] || "").trim();

  if (!customText) {
    return selected;
  }

  return {
    ...selected,
    label: customText,
    detail: customText
  };
}

function buildPlan(state, language = "en") {
  const content = getContent(language);
  const business = resolveSelection(state, "business", language);
  const challenge = resolveSelection(state, "challenge", language);
  const setup = resolveSelection(state, "setup", language);
  const timing = resolveSelection(state, "timing", language);

  const recommendation = [challenge.recommendation, setup.advice, timing.approach].filter(Boolean).join(" ");
  const title = `${business.label}: ${content.contact.plan.titleSuffix}`;
  const summary = `${timing.summary} ${challenge.recommendation}`;
  const points = [
    `${content.contact.plan.businessLabel}: ${business.detail}`,
    `${content.contact.plan.challengeLabel}: ${challenge.detail}`,
    `${content.contact.plan.setupLabel}: ${setup.detail}`,
    `${content.contact.plan.timingLabel}: ${timing.detail}`,
    `${content.contact.plan.recommendationLabel}: ${recommendation}`
  ];

  return {
    title,
    summary,
    points,
    plainText: `${title}\n${summary}\n- ${points.join("\n- ")}`
  };
}

function buildMailto(state, language = "en") {
  const content = getContent(language);
  const business = resolveSelection(state, "business", language);
  const challenge = resolveSelection(state, "challenge", language);
  const setup = resolveSelection(state, "setup", language);
  const timing = resolveSelection(state, "timing", language);
  const plan = buildPlan(state, language);
  const subject = `${content.contact.plan.subjectPrefix}: ${challenge.label} / ${business.label}`;
  const body = [
    content.contact.plan.emailGreeting,
    "",
    content.contact.plan.emailIntro,
    "",
    `${content.contact.plan.businessLabel}: ${business.label}`,
    `${content.contact.plan.challengeLabel}: ${challenge.label}`,
    `${content.contact.plan.setupLabel}: ${setup.label}`,
    `${content.contact.plan.timingLabel}: ${timing.label}`,
    "",
    plan.plainText,
    "",
    content.contact.plan.emailClose
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return LANGUAGE_OPTIONS.some((option) => option.key === stored) ? stored : "en";
  } catch (_error) {
    return "en";
  }
}

function writeStoredLanguage(language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch (_error) {
    // Ignore storage issues in locked-down environments.
  }
}

function renderHero(elements, language) {
  const hero = getHeroContent(language);

  elements.heroSignals.innerHTML = hero.signals
    .map((item) => `<span class="signal-pill">${escapeHtml(item)}</span>`)
    .join("");

  elements.heroMotion.innerHTML = `
    <div class="motion-stage">
      <span class="motion-label">${escapeHtml(hero.motion.sourcesLabel)}</span>
      <div class="motion-pill-column">
        ${hero.motion.sources
          .map(
            (item, index) => `
              <span class="motion-pill motion-pill-float" style="--delay:${index * 0.45}s">${escapeHtml(item)}</span>
            `
          )
          .join("")}
      </div>
    </div>
    <div class="motion-stage motion-stage-choice">
      <span class="motion-label">${escapeHtml(hero.motion.choicesLabel)}</span>
      <div class="motion-choice-grid">
        ${hero.motion.choices
          .map(
            (item, index) => `
              <span class="motion-choice" style="--delay:${index * 0.35}s">${escapeHtml(item)}</span>
            `
          )
          .join("")}
      </div>
    </div>
    <div class="motion-stage">
      <span class="motion-label">${escapeHtml(hero.motion.outcomesLabel)}</span>
      <div class="motion-results">
        ${hero.motion.outcomes
          .map(
            (item, index) => `
              <div class="motion-result-row" style="--delay:${index * 0.4}s">
                <span class="motion-dot"></span>
                <span>${escapeHtml(item)}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderSolutions(elements, language) {
  const cards = getSolutionCards(language);
  const steps = getWorkflowSteps(language);

  elements.solutionCards.innerHTML = cards
    .map(
      (item) => `
        <article class="solution-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `
    )
    .join("");

  elements.workflowSteps.innerHTML = steps
    .map(
      (item, index) => `
        <li class="workflow-step">
          <span class="workflow-index">${index + 1}</span>
          <div>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.body)}</p>
          </div>
        </li>
      `
    )
    .join("");
}

function renderAbout(elements, language) {
  const about = getAboutContent(language);

  elements.aboutPoints.innerHTML = about.points
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  elements.aboutMotion.innerHTML = about.motionCards
    .map((card) => renderAboutMotionCard(card))
    .join("");
}

function renderAboutMotionCard(card) {
  if (card.key === "decision") {
    return `
      <article class="about-card about-card-decision">
        <span class="card-label">${escapeHtml(card.label)}</span>
        <h3>${escapeHtml(card.title)}</h3>
        <div class="decision-orbit">
          ${card.items
            .map(
              (item, index) => `
                <span class="decision-token" style="--delay:${index * 0.35}s">${escapeHtml(item)}</span>
              `
            )
            .join("")}
        </div>
      </article>
    `;
  }

  if (card.key === "iteration") {
    return `
      <article class="about-card about-card-iteration">
        <span class="card-label">${escapeHtml(card.label)}</span>
        <h3>${escapeHtml(card.title)}</h3>
        <div class="iteration-stack">
          ${card.items
            .map(
              (item, index) => `
                <div class="iteration-row" style="--delay:${index * 0.4}s">
                  <span>${escapeHtml(item)}</span>
                  <span class="iteration-bar"></span>
                </div>
              `
            )
            .join("")}
        </div>
      </article>
    `;
  }

  return `
    <article class="about-card about-card-inputs">
      <span class="card-label">${escapeHtml(card.label)}</span>
      <h3>${escapeHtml(card.title)}</h3>
      <div class="input-stack">
        ${card.items
          .map(
            (item, index) => `
              <span class="input-pill" style="--delay:${index * 0.35}s">${escapeHtml(item)}</span>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderTeam(elements, language) {
  const team = getTeamCards(language);

  elements.teamGrid.innerHTML = team
    .map(
      (item) => `
        <article class="team-card">
          <div class="team-portrait" data-founder="${escapeHtml(item.key)}">
            <img src="${escapeHtml(item.portrait)}" alt="${escapeHtml(item.name)}" loading="lazy" />
            <span class="team-initials">${escapeHtml(item.initials)}</span>
          </div>
          <h3>${escapeHtml(item.name)}</h3>
          <p class="team-role">${escapeHtml(item.role)}</p>
          <p class="team-lead">${escapeHtml(item.lead)}</p>
          <p class="team-bio">${escapeHtml(item.bio)}</p>
          <div class="team-tags">
            ${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  hydrateFounderPortraits(elements.teamGrid);
}

function hydrateFounderPortraits(container) {
  container.querySelectorAll(".team-portrait").forEach((portrait) => {
    const image = portrait.querySelector("img");

    if (!image) {
      return;
    }

    const markLoaded = () => {
      portrait.classList.add("has-image");
    };

    const markMissing = () => {
      portrait.classList.remove("has-image");
      image.remove();
    };

    if (image.complete && image.naturalWidth > 0) {
      markLoaded();
      return;
    }

    if (image.complete) {
      markMissing();
      return;
    }

    image.addEventListener("load", markLoaded, { once: true });
    image.addEventListener("error", markMissing, { once: true });
  });
}

function renderLanguageSelect(elements, language) {
  elements.languageSelect.innerHTML = LANGUAGE_OPTIONS
    .map(
      (option) => `
        <option value="${option.key}" ${option.key === language ? "selected" : ""}>${escapeHtml(option.label)}</option>
      `
    )
    .join("");
}

function getCurrentStep(state, language) {
  const steps = getWizardSteps(language);
  return state.stepIndex < steps.length ? steps[state.stepIndex] : null;
}

function isCurrentStepValid(state, language) {
  const currentStep = getCurrentStep(state, language);

  if (!currentStep) {
    return true;
  }

  const selected = state.wizard[currentStep.id];

  if (!selected) {
    return false;
  }

  if (selected !== "other") {
    return true;
  }

  return Boolean((state.wizard.other?.[currentStep.id] || "").trim());
}

function renderContactDraft(elements, state, language) {
  const plan = buildPlan(state, language);

  elements.contactPlanTitle.textContent = plan.title;
  elements.contactPlanSummary.textContent = plan.summary;
  elements.contactPlanPoints.innerHTML = plan.points.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderContactOverlay(elements, state) {
  const content = getContent(state.language);
  const steps = getWizardSteps(state.language);
  const currentStep = getCurrentStep(state, state.language);
  const isReview = !currentStep;

  renderContactDraft(elements, state, state.language);

  elements.contactSubmit.textContent = content.contact.ready;
  elements.contactBack.textContent = content.contact.back;
  elements.contactOtherInput.placeholder = content.contact.otherPlaceholder;

  elements.contactProgressText.textContent = isReview
    ? content.contact.reviewShort
    : `${state.stepIndex + 1} / ${steps.length}`;

  elements.contactProgressPills.innerHTML = steps
    .map((step, index) => {
      const classNames = [
        "progress-pill",
        index < state.stepIndex ? "is-complete" : "",
        index === state.stepIndex && !isReview ? "is-active" : ""
      ]
        .filter(Boolean)
        .join(" ");

      return `<span class="${classNames}">${escapeHtml(step.shortLabel)}</span>`;
    })
    .concat(
      `<span class="progress-pill ${isReview ? "is-active" : ""}">${escapeHtml(content.contact.reviewShort)}</span>`
    )
    .join("");

  if (isReview) {
    const selections = ["business", "challenge", "setup", "timing"].map((stepId) => ({
      id: stepId,
      label: content.contact.plan[`${stepId}Label`] || content.contact.plan.businessLabel,
      value: resolveSelection(state, stepId, state.language).label
    }));

    elements.contactQuestion.textContent = content.contact.reviewTitle;
    elements.contactDescription.textContent = content.contact.reviewDescription;
    elements.contactOptions.innerHTML = selections
      .map(
        (item) => `
          <article class="review-card">
            <span>${escapeHtml(
              item.id === "business"
                ? content.contact.plan.businessLabel
                : item.id === "challenge"
                  ? content.contact.plan.challengeLabel
                  : item.id === "setup"
                    ? content.contact.plan.setupLabel
                    : content.contact.plan.timingLabel
            )}</span>
            <strong>${escapeHtml(item.value)}</strong>
          </article>
        `
      )
      .join("");
    elements.contactOtherShell.hidden = true;
    elements.contactNext.hidden = true;
    elements.contactSubmit.hidden = false;
    elements.contactBack.disabled = false;
    return;
  }

  const selectedValue = state.wizard[currentStep.id];
  const isOther = selectedValue === "other";

  elements.contactQuestion.textContent = currentStep.question;
  elements.contactDescription.textContent = currentStep.description;
  elements.contactOptions.innerHTML = currentStep.options
    .map((option) => {
      const isActive = option.key === selectedValue;
      return `
        <button
          type="button"
          class="contact-option ${isActive ? "is-active" : ""}"
          data-step-id="${currentStep.id}"
          data-option-key="${option.key}"
          aria-pressed="${isActive ? "true" : "false"}"
        >
          <strong>${escapeHtml(option.label)}</strong>
          <span>${escapeHtml(option.detail)}</span>
        </button>
      `;
    })
    .join("");
  elements.contactOtherShell.hidden = !isOther;
  elements.contactOtherInput.value = state.wizard.other?.[currentStep.id] || "";
  elements.contactNext.hidden = false;
  elements.contactSubmit.hidden = true;
  elements.contactNext.textContent = state.stepIndex === steps.length - 1 ? content.contact.review : content.contact.next;
  elements.contactNext.disabled = !isCurrentStepValid(state, state.language);
  elements.contactBack.disabled = state.stepIndex === 0;
}

function syncOverlayVisibility(elements, open) {
  if (open) {
    elements.contactOverlay.hidden = false;
    document.body.classList.add("has-overlay");
    window.requestAnimationFrame(() => {
      elements.contactOverlay.classList.add("is-open");
    });
    return;
  }

  document.body.classList.remove("has-overlay");
  elements.contactOverlay.classList.remove("is-open");
  window.setTimeout(() => {
    if (!elements.contactOverlay.classList.contains("is-open")) {
      elements.contactOverlay.hidden = true;
    }
  }, 220);
}

function renderCopy(elements, language) {
  const content = getContent(language);
  document.documentElement.lang = language;
  document.title = `3volve | ${content.brand.tagline}`;

  elements.copyNodes.forEach((node) => {
    const value = getPathValue(content, node.dataset.copyPath);

    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  elements.footerCopyright.textContent = getFooterCopyright(language);
}

function renderApp(elements, state) {
  renderCopy(elements, state.language);
  renderLanguageSelect(elements, state.language);
  renderHero(elements, state.language);
  renderSolutions(elements, state.language);
  renderAbout(elements, state.language);
  renderTeam(elements, state.language);
  renderContactOverlay(elements, state);
  syncOverlayVisibility(elements, state.overlayOpen);
}

function initApp() {
  const elements = {
    copyNodes: [...document.querySelectorAll("[data-copy-path]")],
    heroSignals: document.querySelector("[data-hero-signals]"),
    heroMotion: document.querySelector("[data-hero-motion]"),
    solutionCards: document.querySelector("[data-solution-cards]"),
    workflowSteps: document.querySelector("[data-workflow-steps]"),
    aboutPoints: document.querySelector("[data-about-points]"),
    aboutMotion: document.querySelector("[data-about-motion]"),
    teamGrid: document.querySelector("[data-team-grid]"),
    languageSelect: document.querySelector("[data-language-select]"),
    footerCopyright: document.querySelector("[data-footer-copyright]"),
    contactOverlay: document.querySelector("[data-contact-overlay]"),
    contactQuestion: document.querySelector("[data-contact-question]"),
    contactDescription: document.querySelector("[data-contact-description]"),
    contactOptions: document.querySelector("[data-contact-options]"),
    contactOtherShell: document.querySelector("[data-contact-other-shell]"),
    contactOtherInput: document.querySelector("[data-contact-other-input]"),
    contactBack: document.querySelector("[data-contact-back]"),
    contactNext: document.querySelector("[data-contact-next]"),
    contactSubmit: document.querySelector("[data-contact-submit]"),
    contactPlanTitle: document.querySelector("[data-contact-plan-title]"),
    contactPlanSummary: document.querySelector("[data-contact-plan-summary]"),
    contactPlanPoints: document.querySelector("[data-contact-plan-points]"),
    contactProgressText: document.querySelector("[data-contact-progress-text]"),
    contactProgressPills: document.querySelector("[data-contact-progress-pills]"),
    contactOpeners: [...document.querySelectorAll("[data-contact-open]")],
    contactClosers: [...document.querySelectorAll("[data-contact-close]")]
  };

  let state = createState({
    language: readStoredLanguage()
  });

  function commit(updater) {
    state = typeof updater === "function" ? updater(state) : updater;
    renderApp(elements, state);
  }

  function openOverlay() {
    commit((current) => ({
      ...current,
      overlayOpen: true,
      stepIndex: 0
    }));
  }

  function closeOverlay() {
    commit((current) => ({
      ...current,
      overlayOpen: false
    }));
  }

  renderApp(elements, state);

  elements.contactOpeners.forEach((button) => {
    button.addEventListener("click", openOverlay);
  });

  elements.contactClosers.forEach((button) => {
    button.addEventListener("click", closeOverlay);
  });

  elements.languageSelect.addEventListener("change", (event) => {
    const nextLanguage = event.target.value;
    writeStoredLanguage(nextLanguage);

    commit((current) => ({
      ...current,
      language: nextLanguage
    }));
  });

  elements.contactOptions.addEventListener("click", (event) => {
    const optionButton = event.target.closest("[data-option-key]");

    if (!optionButton) {
      return;
    }

    const stepId = optionButton.dataset.stepId;
    const optionKey = optionButton.dataset.optionKey;

    commit((current) => ({
      ...current,
      wizard: {
        ...current.wizard,
        [stepId]: optionKey,
        other: {
          ...current.wizard.other
        }
      }
    }));

    if (optionKey === "other") {
      window.setTimeout(() => {
        elements.contactOtherInput.focus();
      }, 0);
    }
  });

  elements.contactOtherInput.addEventListener("input", (event) => {
    const currentStep = getCurrentStep(state, state.language);

    if (!currentStep) {
      return;
    }

    state = {
      ...state,
      wizard: {
        ...state.wizard,
        other: {
          ...state.wizard.other,
          [currentStep.id]: event.target.value
        }
      }
    };

    renderContactDraft(elements, state, state.language);
    elements.contactNext.disabled = !isCurrentStepValid(state, state.language);
  });

  elements.contactBack.addEventListener("click", () => {
    if (state.stepIndex === 0) {
      return;
    }

    commit((current) => ({
      ...current,
      stepIndex: Math.max(0, current.stepIndex - 1)
    }));
  });

  elements.contactNext.addEventListener("click", () => {
    if (!isCurrentStepValid(state, state.language)) {
      return;
    }

    commit((current) => ({
      ...current,
      stepIndex: current.stepIndex + 1
    }));
  });

  elements.contactSubmit.addEventListener("click", () => {
    window.location.href = buildMailto(state, state.language);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.overlayOpen) {
      closeOverlay();
    }
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
}

if (typeof module !== "undefined") {
  module.exports = {
    CONTACT_EMAIL,
    LANGUAGE_OPTIONS,
    CONTENT,
    FOUNDERS,
    DEFAULT_SELECTIONS,
    createState,
    getHeroContent,
    getSolutionCards,
    getWorkflowSteps,
    getAboutContent,
    getTeamCards,
    getWizardSteps,
    buildPlan,
    buildMailto,
    getFooterCopyright
  };
}

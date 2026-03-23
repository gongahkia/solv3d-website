const CONTACT_EMAIL = "astintwl@gmail.com";
const STORAGE_KEY = "3-guys-language";

const LANGUAGE_OPTIONS = [
  { key: "en", label: "English" },
  { key: "zh", label: "中文" },
  { key: "ms", label: "Bahasa Melayu" },
  { key: "ta", label: "தமிழ்" }
];

function buildPortraitDataUrl(initials, startColor, endColor) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${startColor}" />
          <stop offset="100%" stop-color="${endColor}" />
        </linearGradient>
      </defs>
      <rect width="480" height="480" rx="88" fill="url(#g)" />
      <circle cx="360" cy="118" r="84" fill="rgba(255,255,255,0.22)" />
      <circle cx="128" cy="362" r="110" fill="rgba(255,255,255,0.16)" />
      <text x="50%" y="53%" text-anchor="middle" dominant-baseline="middle" font-family="Aptos, Avenir Next, Arial, sans-serif" font-size="150" font-weight="700" fill="#ffffff">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const CONTENT = {
  en: {
    meta: {
      title: "Practical Digital Support for SMEs",
      description:
        "3 guys helps SME teams fix messy workflows, reduce manual admin, and introduce AI carefully using the tools they already have."
    },
    brand: {
      tagline: "practical digital support for SMEs"
    },
    nav: {
      services: "Help",
      nextSteps: "Next",
      workflow: "Process",
      team: "Team",
      faq: "FAQ",
      contact: "Contact",
      menuLabel: "Open menu",
      menuTitle: "Menu"
    },
    cta: {
      primary: "Talk to us",
      secondary: "Our process"
    },
    hero: {
      eyebrow: "Practical digital support for growing SMEs",
      title: "Fix the mess first.",
      body: "We help SME teams untangle handoffs, cut admin, and use AI only where it fits.",
      cards: [
        {
          label: "Diagnosis",
          title: "See where work gets stuck.",
          body: "We start with the current flow, not an ideal system.",
          points: ["Where work slows down", "What is still manual", "What the team can actually absorb"]
        },
        {
          label: "Recommendation",
          title: "Choose the first move.",
          body: "It may be a process fix, a lighter tool, or careful AI.",
          points: ["Clear priorities", "Plain-language options", "A realistic first scope"]
        },
        {
          label: "Rollout",
          title: "Make it useful fast.",
          body: "Start small, ship early, then tighten it in real use.",
          points: ["A faster first version", "Feedback from real use", "A better next decision"]
        }
      ]
    },
    trust: {
      items: [
        {
          title: "Founder-led",
          body: "The people framing the problem stay close to the work."
        },
        {
          title: "Works with existing tools",
          body: "We start from the systems your team already uses."
        },
        {
          title: "Singapore-based",
          body: "Built for practical, fast-moving SME conversations."
        },
        {
          title: "Multilingual",
          body: "We support communication across English, Chinese, Malay, and Tamil."
        }
      ]
    },
    services: {
      eyebrow: "What we help with",
      title: "Support that starts with real pressure, not big-system theory.",
      intro: "The first conversation should sound like your day-to-day reality, not a software sales pitch.",
      cards: [
        {
          accent: "Handoffs and approvals",
          title: "Fix work that keeps bouncing between people.",
          body: "When tasks stall, ownership is fuzzy, or approvals keep circling, we help simplify the flow and make responsibilities clearer."
        },
        {
          accent: "Admin load",
          title: "Reduce repeated follow-up and manual busywork.",
          body: "If the team is still chasing updates, copying details around, and rebuilding the same view every week, we help lighten that load."
        },
        {
          accent: "Careful AI",
          title: "Introduce AI where it genuinely helps.",
          body: "We only recommend AI when the task, source material, and review process are solid enough to trust the result."
        }
      ]
    },
    nextSteps: {
      eyebrow: "What happens next",
      title: "A first move your team can understand and use.",
      intro: "We keep the early phase practical so you can decide clearly and move without overcommitting.",
      steps: [
        {
          icon: "observe",
          title: "We understand how work is happening now.",
          body: "We start by seeing the real flow before recommending anything.",
          points: [
            {
              icon: "flow",
              title: "Current flow",
              body: "We trace how work moves today across people, approvals, files, and tools."
            },
            {
              icon: "friction",
              title: "Where it drags",
              body: "We call out the steps where work gets delayed, repeated, or lost."
            },
            {
              icon: "people",
              title: "What the team can carry",
              body: "We note where change needs to stay light enough for the team to absorb."
            }
          ]
        },
        {
          icon: "recommend",
          title: "We recommend the first useful move.",
          body: "We turn what we learned into one clear first decision.",
          points: [
            {
              icon: "options",
              title: "Plain-language options",
              body: "We explain the realistic routes without technical overload or vague ambition."
            },
            {
              icon: "scope",
              title: "A first scope",
              body: "We narrow the work to something useful, visible, and possible in the near term."
            },
            {
              icon: "fit",
              title: "Fit to your setup",
              body: "We shape the recommendation around your current tools, timing, and operating reality."
            }
          ]
        },
        {
          icon: "refine",
          title: "We help build and refine the first improvement.",
          body: "If you continue, we stay close enough to make the first version useful.",
          points: [
            {
              icon: "build",
              title: "A working first version",
              body: "We help turn the recommendation into something the team can actually start using."
            },
            {
              icon: "feedback",
              title: "Real-use feedback",
              body: "We learn from live use instead of assuming the first version is already right."
            },
            {
              icon: "tighten",
              title: "A clearer next decision",
              body: "We refine the first move so the next step is based on evidence, not guesswork."
            }
          ]
        }
      ]
    },
    proof: {
      eyebrow: "Composite testimonials",
      title: "What people say after working with 3 guys.",
      intro: "These are composite, anonymized testimonials based on the kinds of early-stage engagements 3 guys takes on.",
      ctaEyebrow: "Want a first conversation like this?",
      ctaTitle: "Bring the messy version first. We will shape the first useful move.",
      ctaButton: "Start the conversation",
      openLabel: "Open project",
      detailEyebrow: "Portfolio project",
      startLabel: "Starting point",
      changeLabel: "What we changed",
      outcomeLabel: "What shifted",
      focusLabel: "Focus areas",
      cases: [
        {
          label: "Composite quote",
          quote: "We finally had one view we could trust instead of chasing updates across inboxes.",
          person: "Operations lead",
          companyType: "Regional services SME",
          projectName: "Handoff and status reset",
          projectSummary:
            "Mapped the inbox-and-spreadsheet chain, clarified ownership, and introduced one lighter status view around the tools the team already used.",
          focus: ["handoffs and approvals", "shared status visibility", "lighter operating layer"],
          title: "An operations team was losing context across inboxes and spreadsheets.",
          situation: "Too much work depended on follow-up messages, scattered files, and manual checking.",
          change: "We reshaped the handoff flow, clarified ownership, and defined a lighter operating layer around the existing tools.",
          outcome: "The team got clearer status, fewer dropped tasks, and a first improvement they could adopt quickly."
        },
        {
          label: "Composite quote",
          quote: "The delivery team stopped rebuilding the same update over and over.",
          person: "Delivery lead",
          companyType: "Client-facing services business",
          projectName: "Calmer delivery control",
          projectSummary:
            "Simplified how delivery updates were assembled, removed repeated admin work, and created one shared operating view the team would actually maintain.",
          focus: ["delivery rhythm", "repeated admin load", "shared operating view"],
          title: "A client-facing business needed a calmer way to manage delivery.",
          situation: "Updates were being rebuilt by hand and the team had no trusted view of what needed attention next.",
          change: "We simplified the process, reduced repeated admin work, and introduced one shared operating view the team could actually use.",
          outcome: "Leadership had better visibility and the delivery team spent less time chasing the same answers."
        },
        {
          label: "Composite quote",
          quote: "We found one safe AI use case instead of forcing AI into everything.",
          person: "General manager",
          companyType: "Growing SME team",
          projectName: "Controlled AI first step",
          projectSummary:
            "Narrowed the problem, cleaned up the source material, and defined one AI-assisted step with human checks built in before anything wider was attempted.",
          focus: ["controlled AI trial", "source readiness", "human review path"],
          title: "A growing team wanted to explore AI without creating new risk.",
          situation: "They had real interest in AI, but no clear first use case and no safe review path.",
          change: "We narrowed the problem, cleaned up the source material, and defined one controlled AI-assisted step with human checks.",
          outcome: "The team could test AI in a grounded way without turning the whole operation upside down."
        }
      ]
    },
    workflow: {
      eyebrow: "How we work",
      title: "Small enough to start quickly. Clear enough to build confidence.",
      intro: "3 guys is structured for first moves that change the day-to-day experience of work, not slide-deck theatre.",
      noteEyebrow: "What this feels like",
      noteTitle: "A practical first improvement, not a giant transformation programme.",
      noteBody: "If the right answer is process, we say process. If it is a lighter tool, we say that. If AI helps, we help shape it carefully. The point is choosing well and moving cleanly.",
      steps: [
        {
          title: "See the current state clearly.",
          body: "We start with what the team is really doing today, including the workarounds."
        },
        {
          title: "Shape one sensible first scope.",
          body: "We define a first change that fits the business, the timeline, and the team's capacity."
        },
        {
          title: "Ship, observe, and tighten.",
          body: "We refine based on live use so the next decision is better than the first assumption."
        }
      ]
    },
    team: {
      eyebrow: "The people you work with",
      title: "A small team that stays close to the work.",
      intro: "3 guys stays hands-on. The same people who frame the problem help shape, build, and refine the first version."
    },
    faq: {
      eyebrow: "Questions we hear early",
      title: "Reassurance before you commit to anything bigger.",
      intro: "The first conversation should help you decide, not pressure you into a large programme.",
      items: [
        {
          question: "Do we need clean systems before talking to you?",
          answer: "No. Most teams come to us while the current setup is still messy. We expect that and work from there."
        },
        {
          question: "How quickly can we start with a first move?",
          answer: "Usually faster than a traditional transformation project. The aim is to define and start one sensible improvement, not redesign everything at once."
        },
        {
          question: "Will you push AI even if we are not ready?",
          answer: "No. We only recommend AI when the process, source material, and review path are ready enough to support it."
        },
        {
          question: "Is this only for large companies?",
          answer: "No. The page is built for SME teams that need more clarity and less operational drag without hiring a giant consultancy."
        }
      ]
    },
    contactForm: {
      eyebrow: "Contact",
      title: "Tell us what is slowing your team down.",
      intro: "Share a little context and we will turn it into a practical starting conversation.",
      sideEyebrow: "What to expect",
      sideTitle: "We keep the first conversation practical.",
      sidePoints: [
        "A short note about your situation is enough to start.",
        "We focus on the first useful move, not a giant wish list.",
        "If email is easier, you can contact us directly."
      ],
      note: "This opens a drafted email with your details filled in.",
      fallbackLabel: "Prefer email?",
      submit: "Open drafted email",
      progressLabel: "Draft coverage",
      readinessLabel: "Status",
      readinessReady: "Ready to draft",
      readinessPending: "{remaining} details left",
      previewEyebrow: "Draft preview",
      previewTitle: "What the email draft will contain.",
      previewSubjectLabel: "Subject",
      previewNoteLabel: "Opening note",
      previewEmpty: "Your note will appear here once you describe what is slowing the team down.",
      sendingTitle: "Folding your note into a letter",
      sendingBody: "One moment while we package this card into a draft and open your mail app.",
      mailFallbackSubject: "New enquiry",
      mailSubjectPrefix: "3 guys enquiry",
      mailGreeting: "Hi 3 guys,",
      mailIntro: "I'd like to start a conversation about the following:",
      timelineEmpty: "Not specified",
      mailClose: "Thanks,",
      fields: {
        name: {
          label: "Name",
          placeholder: "Your name"
        },
        email: {
          label: "Work email",
          placeholder: "name@company.com"
        },
        company: {
          label: "Company",
          placeholder: "Your company"
        },
        timeline: {
          label: "Preferred timeline"
        },
        challenge: {
          label: "What is slowing you down right now?",
          placeholder: "Tell us where work feels messy, repetitive, or unclear."
        }
      },
      timelineOptions: [
        { value: "", label: "Select a timeline" },
        { value: "now", label: "As soon as possible" },
        { value: "quarter", label: "Within this quarter" },
        { value: "exploring", label: "Still exploring the right first move" }
      ],
      validation: {
        required: "Please fill in this field.",
        email: "Enter a valid email address."
      }
    },
    footer: {
      contactLabel: "Contact",
      location: "Singapore",
      languageLabel: "Language",
      copyright: "© {year} 3 guys. All rights reserved."
    }
  },
  zh: {
    meta: {
      title: "面向中小企业的务实数字支持",
      description: "3 guys 帮助中小企业理顺混乱流程、减少重复行政工作，并在真正合适时谨慎引入 AI。"
    },
    brand: {
      tagline: "面向中小企业的务实数字支持"
    },
    nav: {
      services: "帮助",
      nextSteps: "下一步",
      workflow: "流程",
      team: "团队",
      faq: "常见问题",
      contact: "联系",
      menuLabel: "打开菜单",
      menuTitle: "菜单"
    },
    cta: {
      primary: "联系我们",
      secondary: "我们的流程"
    },
    hero: {
      eyebrow: "面向成长型中小企业的务实数字支持",
      title: "先把混乱理顺。",
      body: "我们帮助中小企业理顺交接、减轻行政负担，并只在合适时使用 AI。",
      cards: [
        {
          label: "诊断",
          title: "先看工作卡在哪里。",
          body: "我们从当前流程开始，不从理想系统开始。",
          points: ["哪里最容易卡住", "哪些事情仍靠人工", "团队实际能承受多大变化"]
        },
        {
          label: "建议",
          title: "先选最有用的一步。",
          body: "可能是流程、轻量工具，或谨慎使用 AI。",
          points: ["优先级更清楚", "用业务语言说明选择", "第一轮范围更现实"]
        },
        {
          label: "落地",
          title: "先做出能用的版本。",
          body: "先小范围开始，尽快上线，再根据真实使用收紧。",
          points: ["更快看到第一版", "来自真实使用的反馈", "下一次决策更稳妥"]
        }
      ]
    },
    trust: {
      items: [
        {
          title: "创始人亲自参与",
          body: "定义问题的人，会一直参与到实际工作里。"
        },
        {
          title: "沿用现有工具",
          body: "我们从团队已经在用的系统和工具开始。"
        },
        {
          title: "立足新加坡",
          body: "适合中小企业务实、快速推进的沟通方式。"
        },
        {
          title: "多语言支持",
          body: "可支持英语、中文、马来语与泰米尔语沟通。"
        }
      ]
    },
    services: {
      eyebrow: "我们能帮什么",
      title: "从真实压力出发，而不是从宏大系统理论出发。",
      intro: "第一次沟通应该听起来像你每天面对的问题，而不是软件销售话术。",
      cards: [
        {
          accent: "交接与审批",
          title: "修复总是在不同人之间来回打转的工作。",
          body: "当任务容易卡住、责任不清或审批反复时，我们会帮助你把流程变得更清楚、更顺。"
        },
        {
          accent: "行政负担",
          title: "减少重复跟进和手动杂务。",
          body: "如果团队还在不断追更新、复制资料、重复整理同一份视图，我们会帮助你减轻这些负担。"
        },
        {
          accent: "谨慎使用 AI",
          title: "只在真正有帮助的时候引入 AI。",
          body: "只有当任务、资料来源和复核流程足够稳妥时，我们才会建议把 AI 放进流程里。"
        }
      ]
    },
    nextSteps: {
      eyebrow: "接下来会发生什么",
      title: "先做一个团队能理解、也能用起来的第一步。",
      intro: "我们会把前期做得务实，让你在不过度投入的情况下也能清楚判断下一步。",
      steps: [
        {
          icon: "observe",
          title: "我们先了解现在的工作是怎么发生的。",
          body: "在给建议之前，我们先看清真实流程。",
          points: [
            {
              icon: "flow",
              title: "当前流程",
              body: "我们梳理工作今天是怎样在人员、审批、文件和工具之间流动的。"
            },
            {
              icon: "friction",
              title: "卡住的地方",
              body: "我们会指出哪些步骤最容易拖慢、重复，或让工作掉下去。"
            },
            {
              icon: "people",
              title: "团队能承受多少变化",
              body: "我们也会判断变化需要保持多轻，团队才真的接得住。"
            }
          ]
        },
        {
          icon: "recommend",
          title: "我们提出最有价值的第一步建议。",
          body: "我们把观察整理成一个清楚、可判断的第一步。",
          points: [
            {
              icon: "options",
              title: "用业务语言说明选择",
              body: "我们会把现实可行的路径讲清楚，而不是堆技术术语或空泛愿景。"
            },
            {
              icon: "scope",
              title: "先收成一个小范围",
              body: "我们会把第一轮范围收窄成近期就能落地、也看得见效果的事情。"
            },
            {
              icon: "fit",
              title: "贴合你现在的环境",
              body: "建议会围绕你现有工具、时间安排和实际运营方式来定。"
            }
          ]
        },
        {
          icon: "refine",
          title: "我们帮助你做出并打磨第一轮改进。",
          body: "如果继续往前走，我们会参与到第一版真正能用为止。",
          points: [
            {
              icon: "build",
              title: "先做出能工作的版本",
              body: "我们帮助你把建议变成团队真的可以开始使用的第一版。"
            },
            {
              icon: "feedback",
              title: "根据真实使用来调整",
              body: "我们从真实使用中学习，而不是假设第一版已经完全正确。"
            },
            {
              icon: "tighten",
              title: "让下一次决策更清楚",
              body: "我们会把第一步收紧好，让后续判断建立在证据上，而不是猜测上。"
            }
          ]
        }
      ]
    },
    proof: {
      eyebrow: "组合式评价",
      title: "合作过的人，通常会这样形容。",
      intro: "以下是根据 3 guys 常见早期合作整理出的匿名组合式评价。",
      ctaEyebrow: "也想先这样聊一聊？",
      ctaTitle: "先把混乱版本带来，我们会帮你收成第一步。",
      ctaButton: "开始沟通",
      openLabel: "查看项目",
      detailEyebrow: "项目摘要",
      startLabel: "起点",
      changeLabel: "我们做了什么",
      outcomeLabel: "带来了什么变化",
      focusLabel: "关注重点",
      cases: [
        {
          label: "组合式评价",
          quote: "我们终于有了一个能相信的共同视图，不用再在邮箱里追状态。",
          person: "运营负责人",
          companyType: "区域服务型中小企业",
          projectName: "交接与状态重整",
          projectSummary: "我们梳理了邮箱与表格之间的链路，明确责任，并围绕现有工具补上一层更轻的状态视图。",
          focus: ["交接与审批", "共享状态视图", "更轻的运营层"],
          title: "一个运营团队在邮箱和表格之间不断丢失上下文。",
          situation: "太多工作依赖补发消息、分散文件和人工核对。",
          change: "我们重整了交接流程、明确责任，并围绕现有工具补上更轻的运营层。",
          outcome: "团队看状态更清楚，漏项更少，也更快用上了第一轮改进。"
        },
        {
          label: "组合式评价",
          quote: "交付团队终于不用一遍又一遍重做同一份更新了。",
          person: "交付负责人",
          companyType: "客户服务型业务",
          projectName: "更稳定的交付控制面",
          projectSummary: "我们简化了交付更新的整理方式，减少重复行政工作，并建立了一个团队愿意维护的共享运营视图。",
          focus: ["交付节奏", "重复行政负担", "共享运营视图"],
          title: "一个面向客户的团队需要更稳定的交付方式。",
          situation: "更新信息反复手工整理，团队也没有一个可信的共同视图。",
          change: "我们简化了流程、减少重复行政工作，并建立了一个大家愿意使用的共享运营视图。",
          outcome: "管理层能更清楚掌握状况，交付团队也少花很多时间追同样的答案。"
        },
        {
          label: "组合式评价",
          quote: "我们先找到了一个安全的 AI 场景，而不是把 AI 硬塞进所有事情里。",
          person: "总经理",
          companyType: "成长中的中小企业团队",
          projectName: "受控的 AI 第一步",
          projectSummary: "我们先缩小问题范围、整理资料来源，再定义一个带人工复核的 AI 辅助步骤，而不是一次全面铺开。",
          focus: ["受控 AI 试点", "资料准备度", "人工复核路径"],
          title: "一个成长中的团队想试 AI，但不想冒太大风险。",
          situation: "他们对 AI 有兴趣，但没有清楚的第一场景，也没有可靠的复核路径。",
          change: "我们先缩小问题范围，整理资料来源，再设计一个有人审核的受控 AI 步骤。",
          outcome: "团队能在更稳妥的前提下测试 AI，而不是一次把整个运营方式推翻。"
        }
      ]
    },
    workflow: {
      eyebrow: "合作方式",
      title: "足够小，能快速开始。足够清楚，能建立信心。",
      intro: "3 guys 适合做那些能改变日常工作体验的第一步，而不是只做漂亮的汇报材料。",
      noteEyebrow: "实际感受",
      noteTitle: "这是务实的第一轮改进，不是大型转型项目。",
      noteBody: "如果答案是流程，我们就会说流程。如果答案是更轻的工具，我们就会说工具。如果 AI 真有帮助，我们会谨慎地一起落地。重点是先判断对，再干净地推进。",
      steps: [
        {
          title: "先把当前状态看清楚。",
          body: "我们从团队今天真正怎么做事开始，包括那些临时补丁和变通方式。"
        },
        {
          title: "先定义一个合理的第一轮范围。",
          body: "我们会把第一步收成一个适合业务、时间和团队承受力的范围。"
        },
        {
          title: "上线、观察、再收紧。",
          body: "我们会根据真实使用继续调整，让下一次决策比第一次假设更准确。"
        }
      ]
    },
    team: {
      eyebrow: "与你合作的人",
      title: "一个小团队，但会一直贴近工作现场。",
      intro: "3 guys 保持亲自参与。定义问题的人，也会参与方案塑造、第一版搭建与后续打磨。"
    },
    faq: {
      eyebrow: "我们早期最常听到的问题",
      title: "先让你安心，再谈更大的投入。",
      intro: "第一次沟通应该帮助你判断，而不是把你推进一个过大的项目里。",
      items: [
        {
          question: "系统还很乱，可以先聊吗？",
          answer: "可以。大多数团队来找我们时，现状都还不整齐。我们本来就是从这种现实开始工作。"
        },
        {
          question: "多久能开始做出第一步？",
          answer: "通常会比传统转型项目更快。目标是先定义并启动一个合理的改进，而不是一次重做所有东西。"
        },
        {
          question: "你们会不会一开始就强推 AI？",
          answer: "不会。只有当流程、资料来源和复核路径都准备得足够稳妥时，我们才会建议 AI。"
        },
        {
          question: "这是只适合大公司的吗？",
          answer: "不是。这个页面本来就是为需要更清楚判断、又不想请大型咨询公司的中小企业团队准备的。"
        }
      ]
    },
    contactForm: {
      eyebrow: "联系",
      title: "告诉我们，什么正在拖慢你的团队。",
      intro: "给一点背景就够了，我们会把它变成一次务实的起始沟通。",
      sideEyebrow: "你可以期待什么",
      sideTitle: "第一次沟通会保持务实。",
      sidePoints: [
        "一段简短背景说明，就足够开始。",
        "我们关注第一步最有用的改进，而不是一张很长的愿望清单。",
        "如果你更习惯邮件，也可以直接联系。"
      ],
      note: "点击后会打开一封已填好内容的邮件草稿。",
      fallbackLabel: "更喜欢直接发邮件？",
      submit: "打开邮件草稿",
      progressLabel: "草稿完成度",
      readinessLabel: "状态",
      readinessReady: "可以打开邮件",
      readinessPending: "还差 {remaining} 项",
      previewEyebrow: "草稿预览",
      previewTitle: "邮件草稿会包含这些内容。",
      previewSubjectLabel: "主题",
      previewNoteLabel: "开场说明",
      previewEmpty: "当你描述当前阻碍后，这里会显示邮件里的开场内容。",
      sendingTitle: "正在把内容折成一封信",
      sendingBody: "稍等，我们会把这张卡片收成邮件草稿，并为你打开邮件应用。",
      mailFallbackSubject: "新的咨询",
      mailSubjectPrefix: "3 guys 咨询",
      mailGreeting: "你好，3 guys：",
      mailIntro: "我想基于以下情况开始一次沟通：",
      timelineEmpty: "未说明",
      mailClose: "谢谢，",
      fields: {
        name: {
          label: "姓名",
          placeholder: "你的姓名"
        },
        email: {
          label: "工作邮箱",
          placeholder: "name@company.com"
        },
        company: {
          label: "公司",
          placeholder: "你的公司"
        },
        timeline: {
          label: "希望的时间节奏"
        },
        challenge: {
          label: "现在最拖慢你们的是什么？",
          placeholder: "告诉我们哪些地方让工作变得混乱、重复，或不够清楚。"
        }
      },
      timelineOptions: [
        { value: "", label: "选择时间节奏" },
        { value: "now", label: "希望尽快开始" },
        { value: "quarter", label: "希望在本季度内推进" },
        { value: "exploring", label: "还在判断第一步该做什么" }
      ],
      validation: {
        required: "请填写此字段。",
        email: "请输入有效的邮箱地址。"
      }
    },
    footer: {
      contactLabel: "联系",
      location: "新加坡",
      languageLabel: "语言",
      copyright: "© {year} 3 guys。保留所有权利。"
    }
  },
  ms: {
    meta: {
      title: "Sokongan digital yang praktikal untuk PKS",
      description: "3 guys membantu pasukan PKS merapikan aliran kerja yang berselerak, mengurangkan beban kerja manual, dan menggunakan AI dengan berhati-hati."
    },
    brand: {
      tagline: "sokongan digital yang praktikal untuk PKS"
    },
    nav: {
      services: "Bantuan",
      nextSteps: "Seterusnya",
      workflow: "Proses",
      team: "Pasukan",
      faq: "Soalan lazim",
      contact: "Hubungi",
      menuLabel: "Buka menu",
      menuTitle: "Menu"
    },
    cta: {
      primary: "Hubungi kami",
      secondary: "Proses kami"
    },
    hero: {
      eyebrow: "Sokongan digital yang praktikal untuk PKS yang sedang berkembang",
      title: "Baiki yang berselerak dahulu.",
      body: "Kami membantu pasukan PKS merapikan serahan kerja, mengurangkan beban admin, dan menggunakan AI hanya apabila ia benar-benar sesuai.",
      cards: [
        {
          label: "Diagnosis",
          title: "Lihat dahulu di mana kerja tersekat.",
          body: "Kami bermula dengan aliran semasa, bukan sistem yang ideal.",
          points: ["Di mana kerja tersekat", "Apa yang masih dibuat secara manual", "Apa yang realistik untuk pasukan terima"]
        },
        {
          label: "Cadangan",
          title: "Pilih langkah pertama.",
          body: "Ia mungkin pembaikan proses, alat yang lebih ringan, atau AI yang digunakan dengan berhati-hati.",
          points: ["Keutamaan yang lebih jelas", "Pilihan dalam bahasa perniagaan", "Skop awal yang lebih realistik"]
        },
        {
          label: "Pelaksanaan",
          title: "Jadikannya berguna dengan cepat.",
          body: "Mulakan kecil, lancarkan awal, dan perhalus dalam penggunaan sebenar.",
          points: ["Versi pertama yang lebih cepat", "Maklum balas dari penggunaan sebenar", "Keputusan seterusnya yang lebih yakin"]
        }
      ]
    },
    trust: {
      items: [
        {
          title: "Dipimpin pengasas",
          body: "Orang yang membingkaikan masalah juga kekal dekat dengan kerja."
        },
        {
          title: "Guna alat sedia ada",
          body: "Kami bermula daripada sistem yang pasukan anda sudah gunakan."
        },
        {
          title: "Berpangkalan di Singapura",
          body: "Sesuai untuk perbualan PKS yang perlukan kejelasan dan tindakan pantas."
        },
        {
          title: "Berbilang bahasa",
          body: "Kami boleh menyokong komunikasi dalam bahasa Inggeris, Cina, Melayu, dan Tamil."
        }
      ]
    },
    services: {
      eyebrow: "Apa yang kami bantu",
      title: "Bermula daripada tekanan sebenar, bukan teori sistem yang besar.",
      intro: "Perbualan pertama patut kedengaran seperti realiti harian anda, bukan seperti jualan perisian.",
      cards: [
        {
          accent: "Serahan dan kelulusan",
          title: "Baiki kerja yang sentiasa berulang alik antara orang.",
          body: "Apabila tugas tersekat, pemilikan kabur, atau kelulusan berpusing-pusing, kami bantu menjadikan aliran kerja lebih jelas."
        },
        {
          accent: "Beban admin",
          title: "Kurangkan susulan berulang dan kerja manual yang meletihkan.",
          body: "Jika pasukan masih mengejar kemas kini, menyalin maklumat, dan membina semula pandangan yang sama setiap minggu, kami bantu meringankan beban itu."
        },
        {
          accent: "AI yang berhati-hati",
          title: "Gunakan AI hanya apabila ia benar-benar membantu.",
          body: "Kami hanya cadangkan AI apabila tugas, bahan sumber, dan laluan semakan sudah cukup kukuh untuk dipercayai."
        }
      ]
    },
    nextSteps: {
      eyebrow: "Apa yang berlaku seterusnya",
      title: "Langkah pertama yang pasukan anda boleh faham dan gunakan.",
      intro: "Kami pastikan fasa awal kekal praktikal supaya anda boleh menilai dengan jelas tanpa terlebih komited.",
      steps: [
        {
          icon: "observe",
          title: "Kami fahami dahulu bagaimana kerja berlaku sekarang.",
          body: "Sebelum memberi cadangan, kami lihat aliran sebenar dahulu.",
          points: [
            {
              icon: "flow",
              title: "Aliran semasa",
              body: "Kami jejak bagaimana kerja bergerak hari ini merentasi orang, kelulusan, fail, dan alat."
            },
            {
              icon: "friction",
              title: "Di mana ia tersangkut",
              body: "Kami kenal pasti langkah yang paling mudah tertangguh, berulang, atau tercicir."
            },
            {
              icon: "people",
              title: "Apa yang pasukan mampu tampung",
              body: "Kami nilai juga berapa ringan perubahan itu perlu supaya pasukan boleh benar-benar menyerapnya."
            }
          ]
        },
        {
          icon: "recommend",
          title: "Kami cadangkan langkah pertama yang paling berguna.",
          body: "Kami jadikan pemerhatian tadi sebagai satu keputusan pertama yang jelas.",
          points: [
            {
              icon: "options",
              title: "Pilihan dalam bahasa mudah",
              body: "Kami terangkan laluan yang realistik tanpa istilah teknikal berlebihan atau cita-cita kabur."
            },
            {
              icon: "scope",
              title: "Skop pertama yang masuk akal",
              body: "Kami kecilkan kerja kepada sesuatu yang berguna, nampak hasilnya, dan boleh dibuat dalam masa terdekat."
            },
            {
              icon: "fit",
              title: "Sesuai dengan susunan semasa",
              body: "Cadangan dibentuk mengikut alat sedia ada, masa, dan realiti operasi anda."
            }
          ]
        },
        {
          icon: "refine",
          title: "Kami bantu bina dan memperhalus penambahbaikan pertama.",
          body: "Jika anda teruskan, kami kekal dekat sehingga versi pertama benar-benar berguna.",
          points: [
            {
              icon: "build",
              title: "Versi pertama yang boleh digunakan",
              body: "Kami bantu tukarkan cadangan itu menjadi sesuatu yang boleh mula digunakan oleh pasukan."
            },
            {
              icon: "feedback",
              title: "Maklum balas penggunaan sebenar",
              body: "Kami belajar daripada penggunaan hidup, bukan menganggap versi pertama sudah sempurna."
            },
            {
              icon: "tighten",
              title: "Keputusan seterusnya lebih jelas",
              body: "Kami perkemaskan langkah pertama supaya langkah selepas itu berpandukan bukti, bukan tekaan."
            }
          ]
        }
      ]
    },
    proof: {
      eyebrow: "Testimoni komposit",
      title: "Apa yang orang kata selepas bekerja dengan 3 guys.",
      intro: "Ini ialah testimoni komposit tanpa nama berdasarkan jenis penglibatan awal yang biasa diambil oleh 3 guys.",
      ctaEyebrow: "Mahukan perbualan pertama seperti ini?",
      ctaTitle: "Bawa dahulu versi yang masih berselerak. Kami akan bentuk langkah pertama yang berguna.",
      ctaButton: "Mulakan perbualan",
      openLabel: "Buka projek",
      detailEyebrow: "Nota projek",
      startLabel: "Keadaan awal",
      changeLabel: "Apa yang kami ubah",
      outcomeLabel: "Apa yang berubah",
      focusLabel: "Bidang fokus",
      cases: [
        {
          label: "Petikan komposit",
          quote: "Akhirnya kami ada satu pandangan yang boleh dipercayai, bukan lagi mengejar kemas kini merentas e-mel.",
          person: "Ketua operasi",
          companyType: "PKS perkhidmatan serantau",
          projectName: "Tetapan semula serahan dan status",
          projectSummary: "Kami petakan rantaian e-mel dan lembaran kerja, jelaskan pemilikan, dan wujudkan satu pandangan status yang lebih ringan di sekeliling alat sedia ada.",
          focus: ["serahan dan kelulusan", "keterlihatan status bersama", "lapisan operasi yang lebih ringan"],
          title: "Sebuah pasukan operasi hilang konteks antara e-mel dan lembaran kerja.",
          situation: "Terlalu banyak kerja bergantung pada susulan mesej, fail yang bertaburan, dan semakan manual.",
          change: "Kami susun semula aliran serahan, jelaskan pemilikan, dan bina lapisan operasi yang lebih ringan di sekeliling alat sedia ada.",
          outcome: "Pasukan mendapat status yang lebih jelas, kurang kerja tercicir, dan versi pertama yang cepat digunakan."
        },
        {
          label: "Petikan komposit",
          quote: "Pasukan delivery akhirnya berhenti membina semula kemas kini yang sama berulang kali.",
          person: "Ketua delivery",
          companyType: "Perniagaan perkhidmatan berdepan klien",
          projectName: "Kawalan delivery yang lebih tenang",
          projectSummary: "Kami ringkaskan cara kemas kini delivery disusun, kurangkan kerja admin berulang, dan bina satu pandangan operasi bersama yang benar-benar akan dijaga oleh pasukan.",
          focus: ["rentak delivery", "beban admin berulang", "pandangan operasi bersama"],
          title: "Sebuah perniagaan berdepan klien memerlukan cara kerja yang lebih tenang.",
          situation: "Kemas kini dibina semula secara manual dan tiada pandangan bersama yang benar-benar dipercayai oleh pasukan.",
          change: "Kami ringkaskan proses, kurangkan kerja admin berulang, dan perkenalkan satu pandangan operasi yang lebih mudah digunakan.",
          outcome: "Pihak pengurusan mendapat keterlihatan yang lebih baik dan pasukan penyampaian kurang menghabiskan masa mengejar jawapan yang sama."
        },
        {
          label: "Petikan komposit",
          quote: "Kami jumpa satu kes guna AI yang selamat, bukannya memaksa AI masuk ke semua perkara.",
          person: "Pengurus besar",
          companyType: "Pasukan PKS yang sedang berkembang",
          projectName: "Langkah AI pertama yang terkawal",
          projectSummary: "Kami kecilkan skop masalah, kemaskan bahan sumber, dan takrifkan satu langkah AI berbantu dengan semakan manusia sebelum apa-apa yang lebih luas dicuba.",
          focus: ["percubaan AI terkawal", "kesiapan bahan sumber", "laluan semakan manusia"],
          title: "Sebuah pasukan yang berkembang mahu mencuba AI tanpa risiko berlebihan.",
          situation: "Mereka berminat dengan AI, tetapi tiada kes guna pertama yang jelas dan tiada laluan semakan yang selamat.",
          change: "Kami kecilkan skop masalah, kemaskan bahan sumber, dan tentukan satu langkah AI yang dikawal dengan semakan manusia.",
          outcome: "Pasukan dapat menguji AI secara berasas tanpa menggoncang keseluruhan operasi."
        }
      ]
    },
    workflow: {
      eyebrow: "Cara kami bekerja",
      title: "Cukup kecil untuk mula cepat. Cukup jelas untuk membina keyakinan.",
      intro: "3 guys direka untuk langkah awal yang mengubah pengalaman kerja harian, bukan untuk persembahan yang cantik sahaja.",
      noteEyebrow: "Bagaimana rasanya",
      noteTitle: "Ini penambahbaikan pertama yang praktikal, bukan program transformasi yang besar.",
      noteBody: "Jika jawapannya proses, kami kata proses. Jika jawapannya alat yang lebih ringan, kami kata itu. Jika AI membantu, kami bantu bentuk dengan berhati-hati. Intinya ialah memilih dengan baik dan bergerak dengan kemas.",
      steps: [
        {
          title: "Lihat keadaan semasa dengan jelas.",
          body: "Kami bermula dengan cara kerja sebenar pasukan hari ini, termasuk jalan pintas dan penyelesaian sementara."
        },
        {
          title: "Bentuk satu skop awal yang masuk akal.",
          body: "Kami takrifkan satu perubahan pertama yang sesuai dengan perniagaan, masa, dan kapasiti pasukan."
        },
        {
          title: "Lancar, perhati, dan ketatkan.",
          body: "Kami perhalus berdasarkan penggunaan sebenar supaya keputusan seterusnya lebih tepat daripada andaian awal."
        }
      ]
    },
    team: {
      eyebrow: "Orang yang akan bekerja dengan anda",
      title: "Pasukan kecil yang kekal dekat dengan kerja.",
      intro: "3 guys kekal hands-on. Orang yang membingkaikan masalah juga membantu membentuk, membina, dan memperhalus versi pertama."
    },
    faq: {
      eyebrow: "Soalan yang biasa muncul awal",
      title: "Kejelasan dahulu sebelum komitmen yang lebih besar.",
      intro: "Perbualan pertama patut membantu anda membuat keputusan, bukan menolak anda ke projek yang terlalu besar.",
      items: [
        {
          question: "Perlu ke sistem kami sudah kemas sebelum bercakap dengan anda?",
          answer: "Tidak. Kebanyakan pasukan datang semasa susunan semasa masih bersepah. Kami memang menjangka itu."
        },
        {
          question: "Berapa cepat langkah pertama boleh dimulakan?",
          answer: "Biasanya lebih cepat daripada projek transformasi tradisional. Matlamatnya ialah menentukan dan memulakan satu penambahbaikan yang masuk akal."
        },
        {
          question: "Adakah anda akan memaksa AI walaupun kami belum bersedia?",
          answer: "Tidak. Kami hanya cadangkan AI apabila proses, bahan sumber, dan laluan semakan cukup bersedia."
        },
        {
          question: "Adakah ini hanya untuk syarikat besar?",
          answer: "Tidak. Halaman ini direka untuk pasukan PKS yang perlukan lebih kejelasan dan kurang beban operasi tanpa perlu melantik firma perunding besar."
        }
      ]
    },
    contactForm: {
      eyebrow: "Hubungi",
      title: "Beritahu kami apa yang sedang melambatkan pasukan anda.",
      intro: "Beri sedikit konteks dan kami akan jadikannya titik mula perbualan yang praktikal.",
      sideEyebrow: "Apa yang boleh dijangka",
      sideTitle: "Perbualan pertama kami kekal praktikal.",
      sidePoints: [
        "Nota ringkas tentang situasi anda sudah memadai untuk bermula.",
        "Kami fokus pada langkah pertama yang paling berguna, bukan senarai harapan yang panjang.",
        "Jika e-mel lebih mudah, anda boleh hubungi kami terus."
      ],
      note: "Ini akan membuka draf e-mel dengan butiran anda diisi.",
      fallbackLabel: "Lebih suka e-mel terus?",
      submit: "Buka draf e-mel",
      progressLabel: "Liputan draf",
      readinessLabel: "Status",
      readinessReady: "Sedia untuk draf",
      readinessPending: "{remaining} butiran lagi",
      previewEyebrow: "Pratonton draf",
      previewTitle: "Inilah kandungan draf e-mel itu.",
      previewSubjectLabel: "Subjek",
      previewNoteLabel: "Nota pembukaan",
      previewEmpty: "Nota anda akan muncul di sini sebaik sahaja anda terangkan apa yang sedang melambatkan pasukan.",
      sendingTitle: "Melipat nota anda menjadi surat",
      sendingBody: "Sebentar sementara kami menukarkan kad ini menjadi draf dan membuka aplikasi e-mel anda.",
      mailFallbackSubject: "Pertanyaan baharu",
      mailSubjectPrefix: "Pertanyaan 3 guys",
      mailGreeting: "Hai 3 guys,",
      mailIntro: "Saya ingin memulakan perbualan berdasarkan perkara berikut:",
      timelineEmpty: "Tidak dinyatakan",
      mailClose: "Terima kasih,",
      fields: {
        name: {
          label: "Nama",
          placeholder: "Nama anda"
        },
        email: {
          label: "E-mel kerja",
          placeholder: "name@company.com"
        },
        company: {
          label: "Syarikat",
          placeholder: "Syarikat anda"
        },
        timeline: {
          label: "Jangka masa pilihan"
        },
        challenge: {
          label: "Apa yang sedang melambatkan anda sekarang?",
          placeholder: "Terangkan di mana kerja terasa berselerak, berulang, atau tidak jelas."
        }
      },
      timelineOptions: [
        { value: "", label: "Pilih jangka masa" },
        { value: "now", label: "Secepat mungkin" },
        { value: "quarter", label: "Dalam suku ini" },
        { value: "exploring", label: "Masih meneroka langkah pertama yang sesuai" }
      ],
      validation: {
        required: "Sila isi ruangan ini.",
        email: "Masukkan alamat e-mel yang sah."
      }
    },
    footer: {
      contactLabel: "Hubungi",
      location: "Singapura",
      languageLabel: "Bahasa",
      copyright: "© {year} 3 guys. Hak cipta terpelihara."
    }
  },
  ta: {
    meta: {
      title: "சிறு மற்றும் நடுத்தர நிறுவனங்களுக்கு நடைமுறை டிஜிட்டல் ஆதரம்",
      description: "3 guys குழப்பமான பணிப்போக்குகளை சீர்செய்ய, கைமுறை நிர்வாகச் சுமையை குறைக்க, மற்றும் AI ஐ கவனமாக அறிமுகப்படுத்த SME அணிகளுக்கு உதவுகிறது."
    },
    brand: {
      tagline: "சிறு மற்றும் நடுத்தர நிறுவனங்களுக்கு நடைமுறை டிஜிட்டல் ஆதரம்"
    },
    nav: {
      services: "உதவி",
      nextSteps: "அடுத்து",
      workflow: "செயல்முறை",
      team: "அணி",
      faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      contact: "தொடர்பு",
      menuLabel: "பட்டியலைத் திறக்கவும்",
      menuTitle: "பட்டியல்"
    },
    cta: {
      primary: "பேசலாம்",
      secondary: "எங்கள் நடைமுறை"
    },
    hero: {
      eyebrow: "வளர்ந்து வரும் SME களுக்கான நடைமுறை டிஜிட்டல் ஆதரம்",
      title: "முதலில் குழப்பத்தைச் சரிசெய்யுங்கள்.",
      body: "SME அணிகளுக்கு handoff களைச் சீர்செய்ய, admin சுமையை குறைக்க, மற்றும் பொருத்தமான இடங்களில் மட்டுமே AI ஐப் பயன்படுத்த உதவுகிறோம்.",
      cards: [
        {
          label: "பரிசோதனை",
          title: "வேலை எங்கு நின்றுவிடுகிறது என்பதைப் பாருங்கள்.",
          body: "நாங்கள் தற்போதைய flow இலிருந்தே தொடங்குகிறோம்.",
          points: ["வேலை எங்கே நின்றுவிடுகிறது", "எது இன்னும் கைமுறையாக உள்ளது", "அணி உண்மையில் எதை ஏற்க முடியும்"]
        },
        {
          label: "பரிந்துரை",
          title: "முதல் சரியான படியைத் தேர்வு செய்யுங்கள்.",
          body: "அது process ஆக இருக்கலாம், எளிய tool ஆக இருக்கலாம், அல்லது கவனமான AI ஆக இருக்கலாம்.",
          points: ["தெளிவான முன்னுரிமைகள்", "வணிக மொழியில் விளக்கப்பட்ட தேர்வுகள்", "யதார்த்தமான முதல் வரம்பு"]
        },
        {
          label: "நடைமுறைப்படுத்தல்",
          title: "விரைவில் பயன்படும் பதிப்பை உருவாக்குங்கள்.",
          body: "சிறிய அளவில் தொடங்கி, உண்மையான பயன்பாட்டில் மேம்படுத்துங்கள்.",
          points: ["வேகமான முதல் பதிப்பு", "உண்மையான பயன்பாட்டிலிருந்து கருத்து", "அடுத்த முடிவுக்கு கூடுதல் நம்பிக்கை"]
        }
      ]
    },
    trust: {
      items: [
        {
          title: "Founders நேரடியாக ஈடுபடுவர்",
          body: "பிரச்சினையை வரையறுக்கும் நபர்களே தொடர்ந்து வேலைக்குள் இருப்பார்கள்."
        },
        {
          title: "ஏற்கனவே உள்ள கருவிகளுடன் வேலை",
          body: "உங்கள் அணி ஏற்கனவே பயன்படுத்தும் அமைப்புகளிலிருந்தே நாங்கள் தொடங்குகிறோம்."
        },
        {
          title: "சிங்கப்பூரை மையமாகக் கொண்டது",
          body: "வேகமாக முடிவு செய்ய வேண்டிய SME உரையாடல்களுக்கு ஏற்ற நடைமுறை அணுகுமுறை."
        },
        {
          title: "பல மொழி ஆதரம்",
          body: "ஆங்கிலம், சீனம், மலாய், மற்றும் தமிழ் மொழிகளில் தொடர்பு கொள்ள உதவ முடியும்."
        }
      ]
    },
    services: {
      eyebrow: "நாங்கள் உதவும் பகுதி",
      title: "பெரிய system theory இலிருந்து அல்ல, உண்மையான அழுத்தத்திலிருந்து தொடங்குகிறது.",
      intro: "முதல் உரையாடல் உங்கள் தினசரி சிக்கலைப் போலவே இருக்க வேண்டும்; software sales pitch போல அல்ல.",
      cards: [
        {
          accent: "handoff கள் மற்றும் approvals",
          title: "மக்களுக்கிடையே திரும்பித் திரும்பச் செல்லும் வேலையைச் சரிசெய்யுங்கள்.",
          body: "பணிகள் நின்றுவிடும்போது, ownership தெளிவில்லாதபோது, அல்லது approvals சுற்றித்திரியும் போது, வேலை ஓட்டத்தை நாங்கள் தெளிவாக்க உதவுகிறோம்."
        },
        {
          accent: "நிர்வாகச் சுமை",
          title: "மீண்டும் மீண்டும் follow-up செய்ய வேண்டிய வேலைகளை குறைக்குங்கள்.",
          body: "அணி இன்னும் updates தேடி, விவரங்களை copy செய்து, அதே view ஐ மீண்டும் உருவாக்கிக் கொண்டிருந்தால், அந்தச் சுமையை நாங்கள் குறைக்க உதவுகிறோம்."
        },
        {
          accent: "கவனமான AI",
          title: "உண்மையில் உதவும் இடங்களில் மட்டுமே AI ஐ அறிமுகப்படுத்துங்கள்.",
          body: "வேலை, source material, மற்றும் review நடைமுறை போதுமான அளவு வலுவாக இருக்கும் போது மட்டுமே AI ஐ நாங்கள் பரிந்துரைக்கிறோம்."
        }
      ]
    },
    nextSteps: {
      eyebrow: "அடுத்து என்ன நடக்கும்",
      title: "உங்கள் அணி புரிந்து கொண்டு பயன்படுத்தக்கூடிய முதல் படி.",
      intro: "ஆரம்ப கட்டத்தை நாங்கள் நடைமுறையாக வைத்திருக்கிறோம், அதனால் தேவைக்கு மேல் commit செய்யாமல் தெளிவாக முடிவு செய்ய முடியும்.",
      steps: [
        {
          icon: "observe",
          title: "இப்போது வேலை எப்படி நடக்கிறது என்பதை நாங்கள் புரிந்து கொள்கிறோம்.",
          body: "பரிந்துரை சொல்லும் முன், உண்மையான flow ஐ முதலில் பார்க்கிறோம்.",
          points: [
            {
              icon: "flow",
              title: "தற்போதைய flow",
              body: "இன்று வேலை மனிதர்கள், approvals, files, மற்றும் tools இடையே எப்படி நகர்கிறது என்பதை நாங்கள் பின்தொடர்கிறோம்."
            },
            {
              icon: "friction",
              title: "எங்கு சிக்குகிறது",
              body: "வேலை எங்கு தாமதமாகிறது, மீண்டும் மீண்டும் நடக்கிறது, அல்லது விடுபடுகிறது என்பதை நாங்கள் கண்டுபிடிக்கிறோம்."
            },
            {
              icon: "people",
              title: "அணி ஏற்றுக்கொள்ளும் அளவு",
              body: "மாற்றம் அணி உண்மையில் ஏற்றுக்கொள்ளும் அளவுக்கு எவ்வளவு எளிமையாக இருக்க வேண்டும் என்பதையும் நாங்கள் பார்க்கிறோம்."
            }
          ]
        },
        {
          icon: "recommend",
          title: "முதலில் உதவும் பரிந்துரையை நாங்கள் தருகிறோம்.",
          body: "நாங்கள் பார்த்ததை ஒரு தெளிவான முதல் முடிவாக மாற்றுகிறோம்.",
          points: [
            {
              icon: "options",
              title: "எளிய business language",
              body: "அதிக technical terms இல்லாமல், உண்மையில் சாத்தியமான வழிகளை நாங்கள் விளக்குகிறோம்."
            },
            {
              icon: "scope",
              title: "நியாயமான முதல் வரம்பு",
              body: "முதல் முயற்சியை விரைவில் தொடங்க முடியும், பயன் தரும் அளவுக்கு மட்டும் நாங்கள் சுருக்குகிறோம்."
            },
            {
              icon: "fit",
              title: "உங்கள் சூழலுக்கு ஏற்றது",
              body: "பரிந்துரை உங்கள் தற்போதைய tools, நேரம், மற்றும் operation reality ஐச் சுற்றியே வடிவமைக்கப்படுகிறது."
            }
          ]
        },
        {
          icon: "refine",
          title: "முதல் மேம்பாட்டை உருவாக்கவும் நயப்படுத்தவும் நாங்கள் உதவுகிறோம்.",
          body: "நீங்கள் முன்னேறினால், முதல் version உண்மையில் பயன்படும்வரை நாங்கள் அருகில் இருப்போம்.",
          points: [
            {
              icon: "build",
              title: "பயன்படுத்தக்கூடிய முதல் version",
              body: "பரிந்துரையை அணி உண்மையில் பயன்படுத்த தொடங்கக்கூடிய ஒன்றாக மாற்ற நாங்கள் உதவுகிறோம்."
            },
            {
              icon: "feedback",
              title: "உண்மையான பயன்பாட்டின் feedback",
              body: "முதல் version ஏற்கனவே சரி என்று கருதாமல், real use இலிருந்து நாங்கள் கற்றுக்கொள்கிறோம்."
            },
            {
              icon: "tighten",
              title: "அடுத்த முடிவு இன்னும் தெளிவு",
              body: "முதல் படியை நாங்கள் நயப்படுத்துகிறோம், அதனால் அடுத்த முடிவு guess அல்ல, evidence அடிப்படையாக இருக்கும்."
            }
          ]
        }
      ]
    },
    proof: {
      eyebrow: "கூட்டு testimonial கள்",
      title: "3 guys உடன் வேலை செய்த பிறகு மக்கள் இப்படி சொல்கிறார்கள்.",
      intro: "இவை 3 guys பொதுவாகச் செய்யும் தொடக்கநிலை பணிகளை அடிப்படையாகக் கொண்ட பெயரில்லா கூட்டு testimonial கள்.",
      ctaEyebrow: "இப்படிப் முதல் உரையாடல் வேண்டுமா?",
      ctaTitle: "முதலில் குழப்பமான version ஐ கொண்டு வாருங்கள். நாங்கள் முதல் பயனுள்ள படியை வடிவமைப்போம்.",
      ctaButton: "உரையாடலைத் தொடங்குங்கள்",
      openLabel: "Project ஐத் திறக்கவும்",
      detailEyebrow: "Portfolio project",
      startLabel: "தொடக்க நிலை",
      changeLabel: "நாங்கள் மாற்றியது",
      outcomeLabel: "மாற்றம் என்ன",
      focusLabel: "கவனம் செலுத்திய பகுதிகள்",
      cases: [
        {
          label: "கூட்டு quote",
          quote: "Email களில் status தேடுவதற்குப் பதிலாக நம்பத்தகுந்த ஒரு view எங்களுக்கு கிடைத்தது.",
          person: "Operations lead",
          companyType: "பிராந்திய service SME",
          projectName: "Handoff மற்றும் status reset",
          projectSummary: "Email மற்றும் spreadsheet chain ஐ map செய்து, ownership ஐ தெளிவுபடுத்தி, ஏற்கனவே இருந்த tools சுற்றி ஒரு எளிய status view ஐ உருவாக்கினோம்.",
          focus: ["handoff கள் மற்றும் approvals", "shared status visibility", "lighter operating layer"],
          title: "ஒரு operations அணி email களும் spreadsheets களும் இடையில் context ஐ இழந்தது.",
          situation: "பல வேலைகள் follow-up messages, சிதறிய files, மற்றும் கைமுறைச் சரிபார்ப்புகள்மீது சார்ந்திருந்தன.",
          change: "நாங்கள் handoff flow ஐ மறுசீரமைத்து, ownership ஐ தெளிவுபடுத்தி, ஏற்கனவே உள்ள கருவிகளைச் சுற்றி ஒரு எளிய operating layer ஐ வடிவமைத்தோம்.",
          outcome: "அணிக்கு status தெளிவானது, விடுபட்ட வேலைகள் குறைந்தன, மற்றும் முதல் மேம்பாட்டை விரைவாகப் பயன்படுத்த முடிந்தது."
        },
        {
          label: "கூட்டு quote",
          quote: "Delivery அணி அதே update ஐ மீண்டும் மீண்டும் உருவாக்குவதை நிறுத்தியது.",
          person: "Delivery lead",
          companyType: "Client-facing service business",
          projectName: "Calmer delivery control",
          projectSummary: "Delivery updates எப்படி உருவாக்கப்படுகின்றன என்பதை எளிமைப்படுத்தி, மீண்டும் வரும் admin வேலையை குறைத்து, அணி பராமரிக்கும் shared operating view ஒன்றை உருவாக்கினோம்.",
          focus: ["delivery rhythm", "repeated admin load", "shared operating view"],
          title: "ஒரு client-facing business க்கு அமைதியான delivery முறை தேவைப்பட்டது.",
          situation: "Updates கைமுறையாக மீண்டும் உருவாக்கப்பட்டன; மேலும் எந்தப் பொருளிலும் அனைவரும் நம்பும் ஒரே view இல்லை.",
          change: "நாங்கள் process ஐ எளிமைப்படுத்தி, மீண்டும் வரும் admin வேலையை குறைத்து, அணி உண்மையில் பயன்படுத்தக்கூடிய ஒரு shared operating view ஐ அமைத்தோம்.",
          outcome: "Leadership க்கு visibility மேம்பட்டது; delivery அணி அதே பதில்களைத் தேடுவதில் செலவிட்ட நேரம் குறைந்தது."
        },
        {
          label: "கூட்டு quote",
          quote: "AI ஐ எல்லா இடத்திலும் தள்ளாமல், ஒரு பாதுகாப்பான முதல் use case ஐ கண்டுபிடித்தோம்.",
          person: "General manager",
          companyType: "வளரும் SME அணி",
          projectName: "Controlled AI first step",
          projectSummary: "பிரச்சினையைச் சுருக்கி, source material ஐ சுத்தப்படுத்தி, மனித review உடன் ஒரு AI-assisted படியை முதலில் வடிவமைத்தோம்.",
          focus: ["controlled AI trial", "source readiness", "human review path"],
          title: "வளர்ந்து கொண்டிருந்த ஒரு அணி அதிக அபாயமின்றி AI ஐ சோதிக்க விரும்பியது.",
          situation: "AI மீது ஆர்வம் இருந்தது; ஆனால் தெளிவான முதல் use case அல்லது பாதுகாப்பான review நடைமுறை இல்லை.",
          change: "நாங்கள் பிரச்சினையைச் சுருக்கி, source material ஐ ஒழுங்குபடுத்து, human checks உடன் ஒரு கட்டுப்படுத்தப்பட்ட AI படியை வடிவமைத்தோம்.",
          outcome: "முழு operation ஐ குலைக்காமல், அணி AI ஐ நிதானமாகச் சோதிக்க முடிந்தது."
        }
      ]
    },
    workflow: {
      eyebrow: "நாங்கள் வேலை செய்வது எப்படி",
      title: "விரைவாகத் தொடங்க போதுமான அளவு சுருக்கமாக. நம்பிக்கை உருவாக போதுமான அளவு தெளிவாக.",
      intro: "3 guys தினசரி வேலை அனுபவத்தை மாற்றும் முதல் படிகளுக்காக வடிவமைக்கப்பட்டுள்ளது; presentation theatre க்காக அல்ல.",
      noteEyebrow: "இது எப்படி உணரப்படும்",
      noteTitle: "இது ஒரு நடைமுறை முதல் மேம்பாடு; பெரிய transformation programme அல்ல.",
      noteBody: "பதில் process என்றால் அதைத் தெளிவாகச் சொல்வோம். எளிய tool என்றால் அதையும் சொல்வோம். AI உதவுமானால் கவனமாக வடிவமைப்போம். முக்கியம் சரியாகத் தேர்ந்தெடுத்து சுத்தமாக நகர்வதே.",
      steps: [
        {
          title: "தற்போதைய நிலையை தெளிவாகப் பாருங்கள்.",
          body: "இன்று அணி உண்மையில் எப்படி வேலை செய்கிறது என்பதிலிருந்தே, workarounds உட்பட, நாங்கள் தொடங்குகிறோம்."
        },
        {
          title: "நியாயமான ஒரு முதல் வரம்பை வடிவமைக்கவும்.",
          body: "வணிகம், காலஅளவு, மற்றும் அணியின் திறன் ஆகியவற்றிற்கு பொருந்தும் ஒரு முதல் மாற்றத்தை நாங்கள் வரையறுக்கிறோம்."
        },
        {
          title: "வெளியிடுங்கள், கவனியுங்கள், நயப்படுத்துங்கள்.",
          body: "உண்மையான பயன்பாட்டின் அடிப்படையில் நாங்கள் மேம்படுத்துகிறோம்; அடுத்த முடிவு முதல் ஊகத்தை விடச் சிறந்ததாக இருக்கும்."
        }
      ]
    },
    team: {
      eyebrow: "உங்களுடன் வேலை செய்பவர்கள்",
      title: "வேலைக்குப் பக்கத்தில் இருப்பது சிறிய அணிதான்.",
      intro: "3 guys hands-on ஆகவே இருக்கும். பிரச்சினையை வரையறுக்கும் அதே நபர்களே முதல் பதிப்பை வடிவமைக்கவும், உருவாக்கவும், நயப்படுத்தவும் உதவுவார்கள்."
    },
    faq: {
      eyebrow: "ஆரம்பத்தில் நாங்கள் கேட்கும் கேள்விகள்",
      title: "பெரிய commitment க்கு முன் தெளிவும் நிம்மதியும்.",
      intro: "முதல் உரையாடல் உங்களுக்கு முடிவு எடுக்க உதவவேண்டும்; மிகப்பெரிய திட்டத்துக்குள் தள்ள வேண்டாம்.",
      items: [
        {
          question: "எங்கள் systems இன்னும் சீராக இல்லை. இருந்தும் பேசலாமா?",
          answer: "ஆமாம். பெரும்பாலான அணிகள் தற்போதைய அமைப்பு இன்னும் குழப்பமாக இருக்கும்போதே எங்களை அணுகுகின்றன. அதைத்தான் நாங்கள் எதிர்பார்க்கிறோம்."
        },
        {
          question: "முதல் படியை எவ்வளவு விரைவாகத் தொடங்கலாம்?",
          answer: "சாதாரண transformation project ஐ விட பொதுவாக வேகமாகத் தொடங்க முடியும். இலக்கு எல்லாவற்றையும் மறுசீரமைப்பது அல்ல; ஒரு நியாயமான முதல் மேம்பாட்டைத் தொடங்குவது."
        },
        {
          question: "நாங்கள் தயாராக இல்லாவிட்டாலும் நீங்கள் AI ஐ தள்ளுவீர்களா?",
          answer: "இல்லை. process, source material, மற்றும் review path போதுமான அளவு தயாராக இருக்கும் போது மட்டுமே AI ஐ நாங்கள் பரிந்துரைக்கிறோம்."
        },
        {
          question: "இது பெரிய நிறுவனங்களுக்கு மட்டுமா?",
          answer: "இல்லை. பெரிய consultancy இல்லாமல் கூடுதல் தெளிவும் குறைந்த operational drag உம் தேவைப்படும் SME அணிகளுக்காகத்தான் இந்தப் பக்கம் அமைக்கப்பட்டுள்ளது."
        }
      ]
    },
    contactForm: {
      eyebrow: "தொடர்பு",
      title: "உங்கள் அணியை மெதுவாக்குவது என்ன என்பதைச் சொல்லுங்கள்.",
      intro: "சிறிது background போதுமானது; அதை நாம் நடைமுறை ஆரம்ப உரையாடலாக மாற்றுவோம்.",
      sideEyebrow: "எதை எதிர்பார்க்கலாம்",
      sideTitle: "முதல் உரையாடல் நடைமுறையாகவே இருக்கும்.",
      sidePoints: [
        "உங்கள் நிலையைப் பற்றிய ஒரு சுருக்கமான குறிப்பே தொடங்கப் போதுமானது.",
        "ஒரு நீண்ட wish list அல்ல; மிகப் பயனுள்ள முதல் படிதான் எங்கள் கவனம்.",
        "Email எளிதானதாக இருந்தால், நேரடியாகவும் தொடர்பு கொள்ளலாம்."
      ],
      note: "இது உங்கள் விவரங்களுடன் ஒரு email draft ஐத் திறக்கும்.",
      fallbackLabel: "நேரடியாக email அனுப்ப விருப்பமா?",
      submit: "Email draft ஐத் திறக்கவும்",
      progressLabel: "Draft நிறைவு",
      readinessLabel: "நிலை",
      readinessReady: "Draft திறக்கத் தயாராக உள்ளது",
      readinessPending: "இன்னும் {remaining} விவரங்கள் தேவை",
      previewEyebrow: "Draft preview",
      previewTitle: "Email draft இல் சேரப்போகும் விஷயம் இது.",
      previewSubjectLabel: "Subject",
      previewNoteLabel: "தொடக்க குறிப்பு",
      previewEmpty: "உங்கள் அணியை மெதுவாக்குவது என்ன என்பதைச் சொன்னவுடன், அந்த குறிப்பை இங்கே காண்பீர்கள்.",
      sendingTitle: "உங்கள் குறிப்பை ஒரு கடிதமாக மடிக்கிறோம்",
      sendingBody: "ஒரு நிமிடம். இந்த card ஐ email draft ஆக மாற்றி, உங்கள் mail app ஐ திறக்கிறோம்.",
      mailFallbackSubject: "புதிய enquiry",
      mailSubjectPrefix: "3 guys enquiry",
      mailGreeting: "வணக்கம் 3 guys,",
      mailIntro: "பின்வரும் விஷயங்களைப் பற்றி உரையாடலைத் தொடங்க விரும்புகிறேன்:",
      timelineEmpty: "குறிப்பிடப்படவில்லை",
      mailClose: "நன்றி,",
      fields: {
        name: {
          label: "பெயர்",
          placeholder: "உங்கள் பெயர்"
        },
        email: {
          label: "வேலை email",
          placeholder: "name@company.com"
        },
        company: {
          label: "நிறுவனம்",
          placeholder: "உங்கள் நிறுவனம்"
        },
        timeline: {
          label: "விரும்பும் காலம்"
        },
        challenge: {
          label: "இப்போது எந்த விஷயம் உங்களை மெதுவாக்குகிறது?",
          placeholder: "வேலை எங்கே குழப்பமாக, மீண்டும் மீண்டும், அல்லது தெளிவில்லாமல் இருக்கிறது என்பதைச் சொல்லுங்கள்."
        }
      },
      timelineOptions: [
        { value: "", label: "ஒரு காலத்தைத் தேர்வு செய்யவும்" },
        { value: "now", label: "விரைவாகத் தொடங்க வேண்டும்" },
        { value: "quarter", label: "இந்த காலாண்டுக்குள்" },
        { value: "exploring", label: "சரியான முதல் படியை இன்னும் ஆராய்கிறோம்" }
      ],
      validation: {
        required: "இந்த புலத்தை நிரப்பவும்.",
        email: "செல்லுபடியாகும் email முகவரியை உள்ளிடவும்."
      }
    },
    footer: {
      contactLabel: "தொடர்பு",
      location: "சிங்கப்பூர்",
      languageLabel: "மொழி",
      copyright: "© {year} 3 guys. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    }
  }
};

const FOUNDERS = [
  {
    key: "astin",
    name: "Astin Tay",
    initials: "AT",
    portrait: "assets/founders/astin.png",
    content: {
      en: {
        role: "Workflow, governance, and problem framing",
        lead: "Starts with the operating reality, the constraints, and where clarity matters most.",
        bio: "Helps teams define the real problem before they spend money on the wrong fix.",
        tags: ["Workflow", "Clarity", "Scope"]
      },
      zh: {
        role: "流程、治理与问题界定",
        lead: "从运营现实、约束条件以及最需要清楚结构的地方开始。",
        bio: "帮助团队在投入错误方案之前，先把真正的问题说清楚。",
        tags: ["流程", "清晰", "范围"]
      },
      ms: {
        role: "Aliran kerja, tadbir urus, dan pembingkaian masalah",
        lead: "Bermula dengan realiti operasi, kekangan, dan tempat kejelasan paling diperlukan.",
        bio: "Membantu pasukan mentakrif masalah sebenar sebelum melabur pada pembaikan yang salah.",
        tags: ["Aliran kerja", "Kejelasan", "Skop"]
      },
      ta: {
        role: "பணிப்போக்கு, நிர்வாக ஒழுங்கு, மற்றும் பிரச்சினை விளக்கம்",
        lead: "இயக்கத்தின் உண்மை நிலை, கட்டுப்பாடுகள், மற்றும் அதிக தெளிவு தேவைப்படும் இடத்திலிருந்து தொடங்குகிறார்.",
        bio: "தவறான தீர்வில் செலவழிக்கும் முன், உண்மையான பிரச்சினையை அணி தெளிவாகப் பார்க்க உதவுகிறார்.",
        tags: ["பணிப்போக்கு", "தெளிவு", "வரம்பு"]
      }
    }
  },
  {
    key: "keith",
    name: "Keith Tang",
    initials: "KT",
    portrait: "assets/founders/keith.png",
    content: {
      en: {
        role: "Product, UX, and adoption",
        lead: "Turns the first solution into something operators can actually understand and use.",
        bio: "Keeps the first version usable enough that day-to-day behaviour really changes.",
        tags: ["Product", "UX", "Adoption"]
      },
      zh: {
        role: "产品、体验与落地采用",
        lead: "把第一轮方案做成操作人员真正能理解和使用的东西。",
        bio: "确保第一版足够好用，能真正改变日常行为。",
        tags: ["产品", "体验", "采用"]
      },
      ms: {
        role: "Produk, UX, dan penerimaan",
        lead: "Menjadikan penyelesaian awal sesuatu yang benar-benar boleh difahami dan digunakan oleh operator.",
        bio: "Memastikan versi pertama cukup boleh guna untuk mengubah tingkah laku harian.",
        tags: ["Produk", "UX", "Penerimaan"]
      },
      ta: {
        role: "தயாரிப்பு, பயன்பாட்டு அனுபவம், மற்றும் நடைமுறைப் பயன்பாடு",
        lead: "முதல் தீர்வை operators உண்மையில் புரிந்து கொண்டு பயன்படுத்தக்கூடியதாக மாற்றுகிறார்.",
        bio: "முதல் பதிப்பு தினசரி வேலை நடத்தையை மாற்றும் அளவுக்கு பயன்படுமாறு வைத்திருக்கிறார்.",
        tags: ["தயாரிப்பு", "அனுபவம்", "பயன்பாடு"]
      }
    }
  },
  {
    key: "gabriel",
    name: "Gabriel Ong",
    initials: "GO",
    portrait: "assets/founders/gabriel.png",
    content: {
      en: {
        role: "Systems, tooling, and AI delivery",
        lead: "Builds the technical layer when the first move needs real engineering or careful AI implementation.",
        bio: "Owns delivery when the answer involves systems, integrations, or applied AI.",
        tags: ["Systems", "Tooling", "AI"]
      },
      zh: {
        role: "系统、工具与 AI 落地",
        lead: "当第一步需要真正工程实现或谨慎的 AI 交付时，负责技术层的搭建。",
        bio: "当答案涉及系统、集成或应用型 AI 时，负责交付侧。",
        tags: ["系统", "工具", "AI"]
      },
      ms: {
        role: "Sistem, alat, dan penyampaian AI",
        lead: "Membina lapisan teknikal apabila langkah pertama memerlukan kejuruteraan sebenar atau pelaksanaan AI yang berhati-hati.",
        bio: "Memegang sisi penyampaian apabila jawapannya melibatkan sistem, integrasi, atau AI terapan.",
        tags: ["Sistem", "Alat", "AI"]
      },
      ta: {
        role: "அமைப்புகள், கருவிகள், மற்றும் AI செயலாக்கம்",
        lead: "முதல் படிக்கு உண்மையான engineering அல்லது கவனமான AI implementation தேவைப்பட்டால் technical layer ஐ உருவாக்குகிறார்.",
        bio: "systems, integrations, அல்லது applied AI உடன் பதில் தொடர்புடையபோது delivery பகுதியை கவனிக்கிறார்.",
        tags: ["அமைப்புகள்", "கருவிகள்", "AI"]
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

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

const NEXT_STEP_STAGE_ICONS = {
  observe: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3.5 12c2.5-4.1 5.5-6.2 8.5-6.2s6 2.1 8.5 6.2c-2.5 4.1-5.5 6.2-8.5 6.2s-6-2.1-8.5-6.2Z"/>
      <circle cx="12" cy="12" r="2.4"/>
      <path d="M12 5.8V3.2M5.7 8.8 3.8 7.4M18.3 8.8l1.9-1.4"/>
    </svg>
  `,
  recommend: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3.5v17"/>
      <path d="M12 5.8h6.4l-2.5 3.2 2.5 3.2H12"/>
      <path d="M12 11.8H5.6l2.5 3.1-2.5 3.3H12"/>
    </svg>
  `,
  refine: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4.2" y="12.2" width="5.2" height="5.2" rx="1.2"/>
      <rect x="9.8" y="8.4" width="5.2" height="9" rx="1.2"/>
      <rect x="15.4" y="5.4" width="4.4" height="12" rx="1.2"/>
      <path d="M7 8.2V6.4M7 18.3v-1.8M4.8 10.4 3.4 9M9.2 10.4 10.6 9"/>
    </svg>
  `
};

const NEXT_STEP_POINT_ICONS = {
  flow: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="7" r="2.1"/>
      <circle cx="18" cy="17" r="2.1"/>
      <path d="M8.2 7h4.8a3 3 0 0 1 3 3v1.5M15.8 17H11a3 3 0 0 1-3-3v-1.5"/>
    </svg>
  `,
  friction: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7.5 4.5h9M7.5 19.5h9"/>
      <path d="M8 4.8v4.3c0 1.6 1.3 2.9 2.9 2.9h2.2c1.6 0 2.9 1.3 2.9 2.9v4.3"/>
      <path d="M16 4.8v4.3c0 1.6-1.3 2.9-2.9 2.9h-2.2C9.3 12 8 13.3 8 14.9v4.3"/>
    </svg>
  `,
  people: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8" cy="9" r="2.4"/>
      <circle cx="16.3" cy="8.3" r="1.9"/>
      <path d="M4.7 17.8c.9-2.2 2.6-3.3 5-3.3s4.1 1.1 5 3.3"/>
      <path d="M14.1 16.9c.7-1.6 2-2.4 3.8-2.4 1.1 0 2.1.3 3 .9"/>
    </svg>
  `,
  options: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4.5" y="6" width="6.2" height="4.6" rx="1.1"/>
      <rect x="13.3" y="6" width="6.2" height="4.6" rx="1.1"/>
      <rect x="8.9" y="13.4" width="6.2" height="4.6" rx="1.1"/>
    </svg>
  `,
  scope: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="6.8"/>
      <circle cx="12" cy="12" r="3.2"/>
      <path d="M12 2.7v3.2M12 18.1v3.2M21.3 12h-3.2M5.9 12H2.7"/>
    </svg>
  `,
  fit: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 7.5h14M5 16.5h14"/>
      <circle cx="9" cy="7.5" r="2.2"/>
      <circle cx="15" cy="16.5" r="2.2"/>
    </svg>
  `,
  build: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4.6" y="12.8" width="5.2" height="5.2" rx="1"/>
      <rect x="9.4" y="7.8" width="5.2" height="5.2" rx="1"/>
      <rect x="14.2" y="12.8" width="5.2" height="5.2" rx="1"/>
    </svg>
  `,
  feedback: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 15.8H5.4A1.9 1.9 0 0 1 3.5 14V6.4a1.9 1.9 0 0 1 1.9-1.9h8.7A1.9 1.9 0 0 1 16 6.4V8"/>
      <path d="m7 15.8 2.5 2.7v-2.7h3.3"/>
      <path d="M17 9.4h1.6a1.9 1.9 0 0 1 1.9 1.9v7.4a1.9 1.9 0 0 1-1.9 1.9H10a1.9 1.9 0 0 1-1.9-1.9v-2.1"/>
      <path d="m17 9.4-2.5-2.7v2.7H11"/>
    </svg>
  `,
  tighten: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="m8.1 12.4 2.4 2.4 5.4-5.6"/>
      <path d="M12 3.4v2.3M12 18.3v2.3M20.6 12h-2.3M5.7 12H3.4"/>
      <path d="m17.6 6.4-1.6 1.6M8 16l-1.6 1.6M17.6 17.6 16 16M8 8 6.4 6.4"/>
    </svg>
  `
};

function getNextStepStageIcon(iconKey) {
  return NEXT_STEP_STAGE_ICONS[iconKey] || NEXT_STEP_STAGE_ICONS.observe;
}

function getNextStepPointIcon(iconKey) {
  return NEXT_STEP_POINT_ICONS[iconKey] || NEXT_STEP_POINT_ICONS.flow;
}

function createState(overrides = {}) {
  const form = overrides.form || {};

  return {
    language: overrides.language || "en",
    mobileMenuOpen: Boolean(overrides.mobileMenuOpen),
    isMailing: Boolean(overrides.isMailing),
    selectedProofIndex: Number.isInteger(overrides.selectedProofIndex) ? overrides.selectedProofIndex : 0,
    showErrors: Boolean(overrides.showErrors),
    errors: { ...(overrides.errors || {}) },
    form: {
      name: form.name || "",
      email: form.email || "",
      company: form.company || "",
      challenge: form.challenge || "",
      timeline: form.timeline || ""
    }
  };
}

function getHeroContent(language = "en") {
  const hero = getContent(language).hero;
  return {
    eyebrow: hero.eyebrow,
    title: hero.title,
    body: hero.body,
    cards: hero.cards.map((card) => ({ ...card, points: [...card.points] }))
  };
}

function getServiceCards(language = "en") {
  return getContent(language).services.cards.map((item) => ({ ...item }));
}

function getNextSteps(language = "en") {
  return getContent(language).nextSteps.steps.map((item) => ({
    ...item,
    points: (item.points || []).map((point) => ({ ...point }))
  }));
}

function getProofCases(language = "en") {
  return getContent(language).proof.cases.map((item) => ({ ...item, focus: [...item.focus] }));
}

function getWorkflowContent(language = "en") {
  const workflow = getContent(language).workflow;
  return {
    steps: workflow.steps.map((item) => ({ ...item })),
    noteEyebrow: workflow.noteEyebrow,
    noteTitle: workflow.noteTitle,
    noteBody: workflow.noteBody
  };
}

function getFaqItems(language = "en") {
  return getContent(language).faq.items.map((item) => ({ ...item }));
}

function getContactContent(language = "en") {
  const contact = getContent(language).contactForm;
  return {
    ...contact,
    timelineOptions: contact.timelineOptions.map((item) => ({ ...item })),
    sidePoints: [...contact.sidePoints]
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

function getFooterCopyright(language = "en") {
  return getContent(language).footer.copyright.replace("{year}", String(new Date().getFullYear()));
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validateForm(form, language = "en") {
  const { validation } = getContent(language).contactForm;
  const errors = {};

  if (!form.name.trim()) {
    errors.name = validation.required;
  }

  if (!form.email.trim()) {
    errors.email = validation.required;
  } else if (!isValidEmail(form.email)) {
    errors.email = validation.email;
  }

  if (!form.company.trim()) {
    errors.company = validation.required;
  }

  if (!form.challenge.trim()) {
    errors.challenge = validation.required;
  }

  return errors;
}

function buildContactDraft(form, language = "en") {
  const contact = getContent(language).contactForm;
  const timelineOptions = new Map(contact.timelineOptions.map((option) => [option.value, option.label]));
  const timelineLabel = form.timeline ? timelineOptions.get(form.timeline) || form.timeline : contact.timelineEmpty;
  const subject = `${contact.mailSubjectPrefix}: ${form.company.trim() || form.name.trim() || contact.mailFallbackSubject}`;
  const body = [
    contact.mailGreeting,
    "",
    contact.mailIntro,
    "",
    `${contact.fields.name.label}: ${form.name.trim()}`,
    `${contact.fields.email.label}: ${form.email.trim()}`,
    `${contact.fields.company.label}: ${form.company.trim()}`,
    `${contact.fields.timeline.label}: ${timelineLabel}`,
    "",
    `${contact.fields.challenge.label}:`,
    form.challenge.trim(),
    "",
    contact.mailClose,
    form.name.trim()
  ].join("\n");

  const requiredCount = [
    Boolean(form.name.trim()),
    Boolean(form.email.trim() && isValidEmail(form.email)),
    Boolean(form.company.trim()),
    Boolean(form.challenge.trim())
  ].filter(Boolean).length;

  return {
    contact,
    subject,
    body,
    timelineLabel,
    previewCompany: form.company.trim() || contact.fields.company.placeholder,
    previewEmail: form.email.trim() || contact.fields.email.placeholder,
    previewBody: form.challenge.trim() || contact.previewEmpty,
    requiredCount
  };
}

function buildMailto(form, language = "en") {
  const draft = buildContactDraft(form, language);

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
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

function renderCopy(elements, language) {
  const content = getContent(language);

  document.documentElement.lang = language;
  document.title = `3 guys | ${content.meta.title}`;
  elements.metaDescription.setAttribute("content", content.meta.description);
  elements.metaOgTitle.setAttribute("content", `3 guys | ${content.meta.title}`);
  elements.metaOgDescription.setAttribute("content", content.meta.description);

  elements.copyNodes.forEach((node) => {
    const value = getPathValue(content, node.dataset.copyPath);

    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  elements.placeholderNodes.forEach((node) => {
    const value = getPathValue(content, node.dataset.placeholderPath);

    if (typeof value === "string") {
      node.setAttribute("placeholder", value);
    }
  });

  elements.footerCopyright.textContent = getFooterCopyright(language);
}

function renderLanguageSelects(elements, language) {
  const optionsMarkup = LANGUAGE_OPTIONS.map(
    (option) => `<option value="${option.key}" ${option.key === language ? "selected" : ""}>${escapeHtml(option.label)}</option>`
  ).join("");

  elements.languageSelects.forEach((select) => {
    select.innerHTML = optionsMarkup;
    select.value = language;
  });
}

function renderHeroStack(elements, language) {
  const hero = getHeroContent(language);
  const boxCount = Math.max(hero.cards.length, 3);

  elements.heroStack.innerHTML = `
    <div class="hero-pipeline">
      <div class="factory-ceiling" aria-hidden="true"></div>
      <div class="factory-gauge" aria-hidden="true">
        ${Array.from({ length: boxCount })
          .map(() => "<span></span>")
          .join("")}
      </div>
      <div class="factory-dropper" aria-hidden="true">
        <span class="factory-dropper-body"></span>
        <span class="factory-dropper-mouth"></span>
      </div>
      <div class="factory-drop-guide" aria-hidden="true"></div>
      <div class="factory-conveyor" aria-hidden="true">
        <span class="factory-conveyor-track"></span>
        <span class="factory-conveyor-belt"></span>
        <span class="factory-conveyor-roller"></span>
        <span class="factory-conveyor-roller is-second"></span>
        <span class="factory-conveyor-exit"></span>
      </div>
      ${Array.from({ length: boxCount })
        .map(
          (_value, index) => `
            <div class="factory-box" aria-hidden="true" style="--box-delay: ${(index * 2.2).toFixed(1)}s;">
              <span class="factory-box-tape"></span>
              <span class="factory-box-sticker">${String(index + 1).padStart(2, "0")}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderServices(elements, language) {
  const cards = getServiceCards(language);

  elements.servicesGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="service-card">
          <span class="service-card-accent">${escapeHtml(card.accent)}</span>
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.body)}</p>
        </article>
      `
    )
    .join("");
}

function renderNextSteps(elements, language) {
  const steps = getNextSteps(language);

  elements.nextStepsGrid.innerHTML = `
    ${steps
      .map(
        (step, index) => `
        <article class="step-card" data-step-card data-step-kind="${escapeHtml(step.icon || "observe")}" data-step-index="${index}">
          <div class="step-rail" aria-hidden="true">
            <span class="step-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="step-icon">
              ${getNextStepStageIcon(step.icon)}
            </span>
          </div>
          <div class="step-content">
            <div class="step-copy">
              <h3>${escapeHtml(step.title)}</h3>
              <p class="step-summary">${escapeHtml(step.body)}</p>
            </div>
            <ul class="step-point-list">
              ${(step.points || [])
                .map(
                  (point, pointIndex) => `
                    <li class="step-point" data-step-point data-step-point-index="${pointIndex}">
                      <span class="step-point-icon" aria-hidden="true">
                        ${getNextStepPointIcon(point.icon)}
                      </span>
                      <div class="step-point-copy">
                        <strong>${escapeHtml(point.title)}</strong>
                        <p>${escapeHtml(point.body)}</p>
                      </div>
                    </li>
                  `
                )
                .join("")}
            </ul>
          </div>
        </article>
      `
      )
      .join("")}
  `;
}

function renderProof(elements, state) {
  const cases = getProofCases(state.language);
  const activeIndex = Math.min(Math.max(state.selectedProofIndex, 0), Math.max(cases.length - 1, 0));

  elements.proofGrid.innerHTML = cases
    .map(
      (item, index) => `
        <button
          type="button"
          class="proof-card ${index === activeIndex ? "is-active" : ""}"
          data-proof-trigger="${index}"
          aria-pressed="${index === activeIndex ? "true" : "false"}"
        >
          <span class="proof-card-label">${escapeHtml(item.label)}</span>
          <p class="proof-card-quote">“${escapeHtml(item.quote)}”</p>
          <div class="proof-card-meta">
            <strong>${escapeHtml(item.person)}</strong>
            <span>${escapeHtml(item.companyType)}</span>
          </div>
        </button>
      `
    )
    .join("");
}

function renderWorkflow(elements, language) {
  const workflow = getWorkflowContent(language);

  elements.workflowList.innerHTML = workflow.steps
    .map(
      (step, index) => `
        <li class="workflow-item">
          <span class="workflow-item-index">${index + 1}</span>
          <div>
            <h3>${escapeHtml(step.title)}</h3>
            <p>${escapeHtml(step.body)}</p>
          </div>
        </li>
      `
    )
    .join("");
}

function renderFaq(elements, language) {
  const items = getFaqItems(language);

  elements.faqGrid.innerHTML = items
    .map(
      (item) => `
        <article class="faq-card">
          <h3>${escapeHtml(item.question)}</h3>
          <p>${escapeHtml(item.answer)}</p>
        </article>
      `
    )
    .join("");
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

function renderContactSection(elements, state) {
  const content = getContactContent(state.language);
  const draft = buildContactDraft(state.form, state.language);

  elements.contactTimeline.innerHTML = content.timelineOptions
    .map(
      (option) => `
        <option value="${escapeHtml(option.value)}" ${option.value === state.form.timeline ? "selected" : ""}>
          ${escapeHtml(option.label)}
        </option>
      `
    )
    .join("");

  elements.formFields.name.value = state.form.name;
  elements.formFields.email.value = state.form.email;
  elements.formFields.company.value = state.form.company;
  elements.formFields.challenge.value = state.form.challenge;
  elements.contactTimeline.value = state.form.timeline;

  elements.contactPreviewSubject.textContent = draft.subject;
  elements.contactPreviewCompany.textContent = draft.previewCompany;
  elements.contactPreviewEmail.textContent = draft.previewEmail;
  elements.contactPreviewTimeline.textContent = draft.timelineLabel;
  elements.contactPreviewBody.textContent = draft.previewBody;
  elements.contactForm.classList.toggle("is-mailing", state.isMailing);
  elements.contactSubmit.disabled = state.isMailing;

  Object.entries(elements.formFields).forEach(([field, input]) => {
    const errorNode = elements.fieldErrors[field];
    const message = state.errors[field] || "";
    input.classList.toggle("is-invalid", Boolean(message));
    input.setAttribute("aria-invalid", message ? "true" : "false");
    input.disabled = state.isMailing;
    errorNode.textContent = message;
  });

  elements.fieldErrors.timeline.textContent = "";
}

function syncMobileMenu(elements, open) {
  elements.menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  elements.mobileMenuShell.hidden = !open;
  document.body.classList.toggle("menu-open", open);
}

function renderApp(elements, state) {
  renderCopy(elements, state.language);
  renderLanguageSelects(elements, state.language);
  renderHeroStack(elements, state.language);
  renderServices(elements, state.language);
  renderNextSteps(elements, state.language);
  renderProof(elements, state);
  renderWorkflow(elements, state.language);
  renderTeam(elements, state.language);
  renderFaq(elements, state.language);
  renderContactSection(elements, state);
  syncMobileMenu(elements, state.mobileMenuOpen);
}

function initApp() {
  const elements = {
    copyNodes: [...document.querySelectorAll("[data-copy-path]")],
    placeholderNodes: [...document.querySelectorAll("[data-placeholder-path]")],
    metaDescription: document.querySelector('meta[name="description"]'),
    metaOgTitle: document.querySelector('meta[property="og:title"]'),
    metaOgDescription: document.querySelector('meta[property="og:description"]'),
    heroStack: document.querySelector("[data-hero-stack]"),
    servicesGrid: document.querySelector("[data-services-grid]"),
    nextStepsGrid: document.querySelector("[data-next-steps-grid]"),
    proofSection: document.querySelector("#proof"),
    proofScrollShell: document.querySelector("[data-proof-scroll-shell]"),
    proofScrollSticky: document.querySelector("[data-proof-scroll-sticky]"),
    proofScrollViewport: document.querySelector("[data-proof-scroll-viewport]"),
    proofGrid: document.querySelector("[data-proof-grid]"),
    workflowList: document.querySelector("[data-workflow-list]"),
    teamGrid: document.querySelector("[data-team-grid]"),
    faqGrid: document.querySelector("[data-faq-grid]"),
    contactSection: document.querySelector("#contact"),
    contactIllustrationStage: document.querySelector("[data-contact-illustration-stage]"),
    contactTimeline: document.querySelector("[data-contact-timeline]"),
    contactPreviewSubject: document.querySelector("[data-contact-preview-subject]"),
    contactPreviewCompany: document.querySelector("[data-contact-preview-company]"),
    contactPreviewEmail: document.querySelector("[data-contact-preview-email]"),
    contactPreviewTimeline: document.querySelector("[data-contact-preview-timeline]"),
    contactPreviewBody: document.querySelector("[data-contact-preview-body]"),
    footerCopyright: document.querySelector("[data-footer-copyright]"),
    contactForm: document.querySelector("[data-contact-form]"),
    contactSubmit: document.querySelector("[data-contact-submit]"),
    languageSelects: [...document.querySelectorAll("[data-language-select]")],
    menuToggle: document.querySelector("[data-menu-toggle]"),
    mobileMenuShell: document.querySelector("[data-mobile-menu-shell]"),
    menuClosers: [...document.querySelectorAll("[data-menu-close]")],
    formFields: {
      name: document.querySelector("#contact-name"),
      email: document.querySelector("#contact-email"),
      company: document.querySelector("#contact-company"),
      challenge: document.querySelector("#contact-challenge"),
      timeline: document.querySelector("#contact-timeline")
    },
    fieldErrors: {
      name: document.querySelector('[data-field-error="name"]'),
      email: document.querySelector('[data-field-error="email"]'),
      company: document.querySelector('[data-field-error="company"]'),
      challenge: document.querySelector('[data-field-error="challenge"]'),
      timeline: document.querySelector('[data-field-error="timeline"]')
    }
  };

  let state = createState({
    language: readStoredLanguage()
  });
  let mailLaunchTimer = null;
  let mailResetTimer = null;
  let proofScrollFrame = null;
  let nextStepsFrame = null;
  const proofScrollState = {
    enabled: false,
    startY: 0,
    scrollSpan: 1,
    focusOffsets: []
  };
  const nextStepsState = {
    enabled: false,
    startY: 0,
    scrollSpan: 1
  };

  function prefersReducedMotion() {
    return typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function updateProofScrollPosition() {
    if (!proofScrollState.enabled) {
      return;
    }

    const cards = [...elements.proofGrid.children];

    if (cards.length === 0) {
      return;
    }

    const progress = clamp((window.scrollY - proofScrollState.startY) / proofScrollState.scrollSpan, 0, 1);
    const segmentCount = Math.max(cards.length - 1, 1);
    const scaledProgress = progress * segmentCount;
    const lowerIndex = Math.floor(scaledProgress);
    const upperIndex = Math.min(lowerIndex + 1, cards.length - 1);
    const localProgress = scaledProgress - lowerIndex;
    const startOffset = proofScrollState.focusOffsets[lowerIndex] || 0;
    const endOffset = proofScrollState.focusOffsets[upperIndex] || startOffset;
    const currentOffset = startOffset + (endOffset - startOffset) * localProgress;

    elements.proofGrid.style.setProperty("--proof-track-shift", `${currentOffset.toFixed(2)}px`);

    const activeIndex = clamp(Math.round(scaledProgress), 0, cards.length - 1);

    if (activeIndex !== state.selectedProofIndex) {
      state = {
        ...state,
        selectedProofIndex: activeIndex
      };
      renderProof(elements, state);
      syncProofScroller();
    }
  }

  function queueProofScrollUpdate() {
    if (proofScrollFrame) {
      return;
    }

    proofScrollFrame = window.requestAnimationFrame(() => {
      proofScrollFrame = null;
      updateProofScrollPosition();
    });
  }

  function syncProofScroller() {
    if (!elements.proofScrollShell || !elements.proofScrollSticky || !elements.proofScrollViewport || !elements.proofGrid) {
      return;
    }

    const cards = [...elements.proofGrid.children];
    const shouldEnhance = window.innerWidth > 920 && cards.length > 1;

    elements.proofScrollShell.classList.toggle("is-enhanced", shouldEnhance);

    if (!shouldEnhance) {
      proofScrollState.enabled = false;
      proofScrollState.focusOffsets = [];
      elements.proofScrollShell.style.removeProperty("height");
      elements.proofGrid.style.removeProperty("--proof-track-shift");
      return;
    }

    const stickyTop = parseFloat(window.getComputedStyle(elements.proofScrollSticky).top) || 0;
    const viewportWidth = elements.proofScrollViewport.clientWidth;
    const maxOffset = Math.max(elements.proofGrid.scrollWidth - viewportWidth, 0);
    const focusOffsets = cards.map((card) =>
      clamp(card.offsetLeft - (viewportWidth - card.offsetWidth) / 2, 0, maxOffset)
    );
    const stickyHeight = elements.proofScrollSticky.offsetHeight;
    const minimumScrollSpan = clamp(window.innerHeight * 0.34, 240, 360);
    const scrollSpan = Math.max(maxOffset, minimumScrollSpan, 1);
    const shellRect = elements.proofScrollShell.getBoundingClientRect();

    proofScrollState.enabled = true;
    proofScrollState.focusOffsets = focusOffsets;
    proofScrollState.scrollSpan = scrollSpan;
    proofScrollState.startY = window.scrollY + shellRect.top - stickyTop;

    elements.proofScrollShell.style.height = `${stickyHeight + scrollSpan}px`;
    queueProofScrollUpdate();
  }

  function clearNextStepsState() {
    const grid = elements.nextStepsGrid;

    if (!grid) {
      return;
    }

    grid.querySelectorAll(".step-card.is-active, .step-point.is-active").forEach((node) => {
      node.classList.remove("is-active");
    });
  }

  function updateNextStepsPosition() {
    if (!nextStepsState.enabled || !elements.nextStepsGrid) {
      return;
    }

    const grid = elements.nextStepsGrid;
    const rail = grid.querySelector(".step-rail");
    const firstIndex = grid.querySelector(".step-index");
    const cards = [...grid.querySelectorAll("[data-step-card]")];
    const points = [...grid.querySelectorAll("[data-step-point]")];

    if (!rail || !firstIndex || cards.length === 0 || points.length === 0) {
      clearNextStepsState();
      return;
    }

    const firstIndexRect = firstIndex.getBoundingClientRect();
    const lastPointRect = points[points.length - 1].getBoundingClientRect();
    const progress = clamp((window.scrollY - nextStepsState.startY) / nextStepsState.scrollSpan, 0, 1);
    const sectionStart = window.scrollY + firstIndexRect.top + firstIndexRect.height / 2;
    const sectionEnd = window.scrollY + lastPointRect.top + lastPointRect.height / 2;
    const travelerPageY = sectionStart + (sectionEnd - sectionStart) * progress;
    const inRange =
      window.scrollY + window.innerHeight * 0.16 >= nextStepsState.startY &&
      window.scrollY <= nextStepsState.startY + nextStepsState.scrollSpan + window.innerHeight * 0.28;

    let activePoint = null;
    let nearestPoint = points[0];
    let nearestDistance = Number.POSITIVE_INFINITY;

    points.forEach((point) => {
      const rect = point.getBoundingClientRect();
      const pointTop = window.scrollY + rect.top;
      const pointCenter = pointTop + rect.height / 2;
      const pointBottom = pointTop + rect.height;
      const overlaps = travelerPageY >= pointTop && travelerPageY <= pointBottom;
      const distance = Math.abs(travelerPageY - pointCenter);

      if (overlaps) {
        activePoint = point;
      }

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestPoint = point;
      }
    });

    if (!activePoint) {
      activePoint = nearestPoint;
    }

    points.forEach((point) => {
      point.classList.toggle("is-active", inRange && point === activePoint);
    });

    cards.forEach((card) => {
      card.classList.toggle("is-active", Boolean(inRange && activePoint && card.contains(activePoint)));
    });
  }

  function queueNextStepsUpdate() {
    if (nextStepsFrame) {
      return;
    }

    nextStepsFrame = window.requestAnimationFrame(() => {
      nextStepsFrame = null;
      updateNextStepsPosition();
    });
  }

  function syncNextStepsScroller() {
    const grid = elements.nextStepsGrid;
    const points = grid ? [...grid.querySelectorAll("[data-step-point]")] : [];
    const shouldEnhance = window.innerWidth > 680 && points.length > 0;

    nextStepsState.enabled = shouldEnhance;

    if (grid) {
      grid.classList.toggle("is-scroll-guided", shouldEnhance);
    }

    if (!shouldEnhance) {
      clearNextStepsState();
      return;
    }

    const gridRect = grid.getBoundingClientRect();
    const startY = window.scrollY + gridRect.top - window.innerHeight * 0.22;
    const endY = window.scrollY + gridRect.bottom - window.innerHeight * 0.68;

    nextStepsState.startY = startY;
    nextStepsState.scrollSpan = Math.max(endY - startY, 1);

    queueNextStepsUpdate();
  }

  function focusProofIndex(nextIndex, options = {}) {
    const proofCases = getProofCases(state.language);
    const maxIndex = Math.max(proofCases.length - 1, 0);
    const targetIndex = clamp(nextIndex, 0, maxIndex);
    const shouldScroll = Boolean(options.scrollIntoView) && proofScrollState.enabled && maxIndex > 0;

    if (state.selectedProofIndex !== targetIndex) {
      state = {
        ...state,
        selectedProofIndex: targetIndex
      };
      renderProof(elements, state);
      syncProofScroller();
    } else {
      queueProofScrollUpdate();
    }

    if (!shouldScroll) {
      return;
    }

    const targetY = proofScrollState.startY + (proofScrollState.scrollSpan * targetIndex) / maxIndex;

    window.scrollTo({
      top: targetY,
      behavior: prefersReducedMotion() ? "auto" : "smooth"
    });
  }

  function initContactIllustrationReveal() {
    const stage = elements.contactIllustrationStage;
    const trigger = elements.contactSection || stage;

    if (!stage || !trigger) {
      return;
    }

    if (prefersReducedMotion() || typeof IntersectionObserver !== "function") {
      stage.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          stage.classList.add("is-visible");
          observer.disconnect();
        });
      },
      {
        threshold: 0.02,
        rootMargin: "0px"
      }
    );

    observer.observe(trigger);
  }

  function commit(updater) {
    const nextState = typeof updater === "function" ? updater(state) : updater;

    if (nextState === state) {
      return;
    }

    state = nextState;
    renderApp(elements, state);
    syncProofScroller();
    syncNextStepsScroller();
  }

  function closeMenu() {
    commit((current) => ({
      ...current,
      mobileMenuOpen: false
    }));
  }

  function clearMailAnimationTimers() {
    if (mailLaunchTimer) {
      window.clearTimeout(mailLaunchTimer);
      mailLaunchTimer = null;
    }

    if (mailResetTimer) {
      window.clearTimeout(mailResetTimer);
      mailResetTimer = null;
    }
  }

  function finishMailAnimation() {
    clearMailAnimationTimers();

    if (!state.isMailing) {
      return;
    }

    state = {
      ...state,
      isMailing: false
    };
    renderContactSection(elements, state);
  }

  function startMailAnimation(mailtoHref) {
    const reducedMotion = prefersReducedMotion();
    const launchDelay = reducedMotion ? 0 : 1180;

    clearMailAnimationTimers();
    state = {
      ...state,
      isMailing: true
    };
    renderContactSection(elements, state);

    mailLaunchTimer = window.setTimeout(() => {
      window.location.href = mailtoHref;
      mailLaunchTimer = null;

      mailResetTimer = window.setTimeout(() => {
        finishMailAnimation();
      }, reducedMotion ? 0 : 900);
    }, launchDelay);
  }

  function setLanguage(nextLanguage) {
    if (!LANGUAGE_OPTIONS.some((option) => option.key === nextLanguage)) {
      return;
    }

    writeStoredLanguage(nextLanguage);

    commit((current) => {
      if (current.language === nextLanguage && !current.mobileMenuOpen) {
        return current;
      }

      return {
        ...current,
        language: nextLanguage,
        errors: current.showErrors ? validateForm(current.form, nextLanguage) : {},
        mobileMenuOpen: false
      };
    });
  }

  function setFormValue(field, value) {
    state = {
      ...state,
      form: {
        ...state.form,
        [field]: value
      }
    };

    if (state.showErrors) {
      state = {
        ...state,
        errors: validateForm(state.form, state.language)
      };
    } else if (state.errors[field]) {
      state = {
        ...state,
        errors: {
          ...state.errors,
          [field]: ""
        }
      };
    }

    renderContactSection(elements, state);
  }

  renderApp(elements, state);
  syncProofScroller();
  syncNextStepsScroller();
  initContactIllustrationReveal();

  elements.menuToggle.addEventListener("click", () => {
    commit((current) => ({
      ...current,
      mobileMenuOpen: !current.mobileMenuOpen
    }));
  });

  elements.menuClosers.forEach((node) => {
    node.addEventListener("click", () => {
      closeMenu();
    });
  });

  elements.languageSelects.forEach((select) => {
    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    };

    select.addEventListener("input", handleLanguageChange);
    select.addEventListener("change", handleLanguageChange);
  });

  elements.proofGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-proof-trigger]");

    if (!trigger) {
      return;
    }

    const nextIndex = Number(trigger.dataset.proofTrigger);

    if (Number.isNaN(nextIndex)) {
      return;
    }

    focusProofIndex(nextIndex, { scrollIntoView: true });
  });

  elements.contactForm.addEventListener("input", (event) => {
    const field = event.target.name;

    if (!field || !(field in state.form)) {
      return;
    }

    setFormValue(field, event.target.value);
  });

  elements.contactForm.addEventListener("change", (event) => {
    const field = event.target.name;

    if (!field || !(field in state.form)) {
      return;
    }

    setFormValue(field, event.target.value);
  });

  elements.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (state.isMailing) {
      return;
    }

    const errors = validateForm(state.form, state.language);

    state = {
      ...state,
      showErrors: true,
      errors
    };
    renderContactSection(elements, state);

    if (Object.keys(errors).length > 0) {
      const firstInvalidField = Object.keys(errors)[0];
      const input = elements.formFields[firstInvalidField];

      if (input) {
        input.focus();
      }

      return;
    }

    startMailAnimation(buildMailto(state.form, state.language));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.mobileMenuOpen) {
      closeMenu();
    }
  });

  window.addEventListener("scroll", queueProofScrollUpdate, { passive: true });
  window.addEventListener("scroll", queueNextStepsUpdate, { passive: true });
  window.addEventListener("resize", syncProofScroller);
  window.addEventListener("resize", syncNextStepsScroller);
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
    createState,
    getHeroContent,
    getServiceCards,
    getNextSteps,
    getProofCases,
    getWorkflowContent,
    getFaqItems,
    getContactContent,
    buildContactDraft,
    getTeamCards,
    getFooterCopyright,
    validateForm,
    buildMailto
  };
}

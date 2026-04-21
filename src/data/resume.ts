export type Locale = 'zh' | 'en';

type LocalizedText = {
  zh: string;
  en: string;
};

type LocalizedStringArray = {
  zh: string[];
  en: string[];
};

type Link = {
  label: LocalizedText;
  href: string;
};

type Highlight = {
  value: string;
  label: LocalizedText;
  detail: LocalizedText;
};

type Experience = {
  company: string;
  role: LocalizedText;
  period: string;
  location: LocalizedText;
  summary: LocalizedText;
  bullets: LocalizedStringArray;
};

type Project = {
  name: LocalizedText;
  role: LocalizedText;
  period: string;
  context: LocalizedText;
  actions: LocalizedStringArray;
  outcome: LocalizedText;
  tags: string[];
};

type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

type Education = {
  school: string;
  degree: LocalizedText;
  period: string;
  location: string;
  detail: LocalizedText;
};

type ResumeData = {
  seo: {
    title: LocalizedText;
    description: LocalizedText;
  };
  profile: {
    name: string;
    role: LocalizedText;
    tagline: LocalizedText;
    summary: LocalizedText;
    location: string;
    email: string;
    phone: string;
    availability: LocalizedText;
  };
  links: Link[];
  highlights: Highlight[];
  experiences: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
};

export const defaultLocale: Locale = 'zh';

export const labels = {
  zh: {
    switcher: '语言',
    about: '个人简介',
    highlights: '核心亮点',
    experience: '工作经历',
    projects: '精选项目',
    skills: '能力矩阵',
    education: '教育背景',
    contact: '联系我',
    download: '下载简历',
    email: '邮箱联系',
    phone: '电话',
    available: '当前状态',
    basedIn: '所在城市'
  },
  en: {
    switcher: 'Language',
    about: 'About',
    highlights: 'Highlights',
    experience: 'Experience',
    projects: 'Selected Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    download: 'Download Resume',
    email: 'Email Me',
    phone: 'Phone',
    available: 'Availability',
    basedIn: 'Based in'
  }
} as const;

export const resumeData: ResumeData = {
  seo: {
    title: {
      zh: '你的名字 ｜ 产品经理简历',
      en: 'Your Name | Product Manager Resume'
    },
    description: {
      zh: '面向 GitHub Pages 和 Vercel 部署的现代化产品经理在线简历。',
      en: 'A modern product manager resume website built for GitHub Pages and Vercel deployment.'
    }
  },
  profile: {
    name: '你的名字',
    role: {
      zh: '产品经理 / AI Product / Growth',
      en: 'Product Manager / AI Product / Growth'
    },
    tagline: {
      zh: '聚焦 AI 与增长场景，擅长把模糊需求拆成清晰路径，并推动跨团队把关键结果做出来。',
      en: 'Focused on AI and growth products, with a track record of turning ambiguous opportunities into clear product paths and cross-functional execution.'
    },
    summary: {
      zh: '我是一名产品经理，主要关注 AI、增长和用户体验相关方向。擅长通过用户研究、需求拆解、原型验证和数据分析，把复杂问题转化为可执行的产品方案，并与设计、研发、运营协作推动上线与迭代。相比单纯写需求，我更关注产品为什么值得做、如何更快验证，以及上线后是否真正带来业务和用户价值。',
      en: 'I am a product manager focused on AI, growth, and user experience. My strength is turning complex problems into executable product paths through user research, problem framing, prototyping, and data-informed iteration, then working cross-functionally with design, engineering, and operations to ship and improve the product. More than writing requirements, I care about why a product should exist, how to validate it quickly, and whether it ultimately creates meaningful business and user value.'
    },
    location: 'Shanghai, China',
    email: 'you@example.com',
    phone: '+86 138 0000 0000',
    availability: {
      zh: '开放新的产品机会 / 欢迎交流合作',
      en: 'Open to new PM opportunities and collaborations'
    }
  },
  links: [
    {
      label: { zh: 'GitHub', en: 'GitHub' },
      href: 'https://github.com/your-name'
    },
    {
      label: { zh: 'LinkedIn', en: 'LinkedIn' },
      href: 'https://linkedin.com/in/your-name'
    },
    {
      label: { zh: '作品集', en: 'Portfolio' },
      href: 'https://your-site.example.com'
    }
  ],
  highlights: [
    {
      value: '0 → 1',
      label: {
        zh: '新产品孵化',
        en: '0-to-1 launches'
      },
      detail: {
        zh: '从需求识别到 MVP 上线，推动关键产品能力快速验证。',
        en: 'Shipped MVPs from discovery to launch and validated critical product bets quickly.'
      }
    },
    {
      value: '+35%',
      label: {
        zh: '核心转化提升',
        en: 'Core conversion lift'
      },
      detail: {
        zh: '通过流程优化和实验设计，持续提升用户激活与转化效率。',
        en: 'Improved activation and conversion through funnel redesign and disciplined experimentation.'
      }
    },
    {
      value: 'AI',
      label: {
        zh: 'AI 产品实践',
        en: 'AI product work'
      },
      detail: {
        zh: '具备 LLM 场景设计、提示链路和用户反馈闭环经验。',
        en: 'Hands-on experience designing LLM workflows, prompts, and feedback loops.'
      }
    }
  ],
  experiences: [
    {
      company: 'Example Tech',
      role: {
        zh: '高级产品经理',
        en: 'Senior Product Manager'
      },
      period: '2023 — Present',
      location: {
        zh: '上海',
        en: 'Shanghai'
      },
      summary: {
        zh: '负责增长与智能化产品方向，推动从用户洞察到业务指标提升的完整闭环。',
        en: 'Owned growth and intelligent product initiatives, connecting user insight to measurable business impact.'
      },
      bullets: {
        zh: [
          '主导核心功能重构，围绕关键漏斗设计实验方案，使注册到激活转化率提升 35%。',
          '搭建跨设计、研发、运营的协同机制，将需求交付周期缩短约 25%。',
          '推动 AI 助手能力从概念验证到首版上线，建立用户反馈收集和迭代节奏。'
        ],
        en: [
          'Led a core funnel redesign and experiment roadmap, increasing signup-to-activation conversion by 35%.',
          'Built a working model across design, engineering, and operations that shortened delivery cycles by roughly 25%.',
          'Took an AI assistant capability from concept validation to first launch and set up a user-feedback-driven iteration loop.'
        ]
      }
    },
    {
      company: 'Startup Studio',
      role: {
        zh: '产品经理',
        en: 'Product Manager'
      },
      period: '2021 — 2023',
      location: {
        zh: '杭州',
        en: 'Hangzhou'
      },
      summary: {
        zh: '聚焦 0 到 1 产品探索与增长验证，参与多个产品方向的用户研究和 MVP 迭代。',
        en: 'Focused on 0-to-1 exploration and growth validation across multiple product bets and MVP cycles.'
      },
      bullets: {
        zh: [
          '主导用户访谈和需求归纳，帮助团队明确高潜力目标人群与使用场景。',
          '以低成本原型快速验证关键假设，减少无效开发投入。',
          '与运营共同设计内容和增长机制，提高新用户留存表现。'
        ],
        en: [
          'Ran user interviews and synthesis work to identify promising user segments and usage scenarios.',
          'Used lightweight prototypes to validate critical assumptions early and reduce wasted engineering effort.',
          'Partnered with operations on content and growth loops that improved early user retention.'
        ]
      }
    }
  ],
  projects: [
    {
      name: {
        zh: 'AI 助手工作台',
        en: 'AI Assistant Workspace'
      },
      role: {
        zh: '产品负责人',
        en: 'Product Lead'
      },
      period: '2024',
      context: {
        zh: '针对高频内部流程搭建 AI 辅助工作台，目标是缩短重复性任务处理时间并提升输出质量。',
        en: 'Built an AI workspace for high-frequency internal workflows to reduce repetitive effort and improve output quality.'
      },
      actions: {
        zh: [
          '定义核心场景与用户路径，拆解人机协作中最适合由 AI 承担的环节。',
          '联合研发设计提示模板、追问机制和结果反馈闭环。',
          '通过试点团队验证价值，再逐步扩大使用范围。'
        ],
        en: [
          'Defined key scenarios and user journeys, identifying the best points of leverage for AI support.',
          'Partnered with engineering on prompt templates, follow-up logic, and outcome feedback loops.',
          'Validated value with a pilot team before scaling the workflow to broader usage.'
        ]
      },
      outcome: {
        zh: '试点团队平均任务处理时间下降约 30%，并形成可复制的 AI 功能设计方法。',
        en: 'Pilot teams reduced average task time by about 30% and established a reusable pattern for AI feature design.'
      },
      tags: ['AI', 'Workflow', 'MVP']
    },
    {
      name: {
        zh: '增长漏斗重构',
        en: 'Growth Funnel Redesign'
      },
      role: {
        zh: '增长产品经理',
        en: 'Growth Product Manager'
      },
      period: '2023',
      context: {
        zh: '针对注册后激活率偏低的问题，重新设计 onboarding 与关键触达策略。',
        en: 'Redesigned onboarding and activation touchpoints to address low post-signup activation.'
      },
      actions: {
        zh: [
          '结合定量漏斗数据和定性访谈，定位阻塞节点。',
          '重构首日路径、触发机制与关键文案。',
          '通过多轮 A/B 实验持续优化关键转化步骤。'
        ],
        en: [
          'Combined funnel analytics with interviews to pinpoint the highest-friction moments.',
          'Redesigned day-one journeys, triggers, and critical product copy.',
          'Improved the funnel through multiple rounds of A/B testing.'
        ]
      },
      outcome: {
        zh: '核心激活指标提升 35%，并沉淀出面向新用户的增长分析框架。',
        en: 'Lifted the key activation metric by 35% and created a repeatable framework for new-user growth analysis.'
      },
      tags: ['Growth', 'Experimentation', 'Activation']
    }
  ],
  skills: [
    {
      title: {
        zh: '产品方法',
        en: 'Product'
      },
      items: ['User Research', 'PRD', 'Roadmapping', 'Prioritization', 'Experiment Design']
    },
    {
      title: {
        zh: '数据与分析',
        en: 'Data'
      },
      items: ['SQL', 'Funnel Analysis', 'A/B Testing', 'Looker Studio', 'Excel']
    },
    {
      title: {
        zh: '设计与协作',
        en: 'Design & Collaboration'
      },
      items: ['Figma', 'Wireframing', 'Workshop Facilitation', 'Stakeholder Alignment']
    },
    {
      title: {
        zh: 'AI 工具链',
        en: 'AI Toolkit'
      },
      items: ['Claude', 'OpenAI API', 'Prompt Design', 'Evaluation Loops']
    }
  ],
  education: [
    {
      school: 'Your University',
      degree: {
        zh: '学士 / 硕士 · 专业名称',
        en: 'B.A. / M.A. · Your Major'
      },
      period: '2017 — 2021',
      location: 'Shanghai, China',
      detail: {
        zh: '可在这里补充 GPA、奖项、交换经历或重点课程。',
        en: 'Add GPA, awards, exchange experience, or relevant coursework here.'
      }
    }
  ]
};

export function getText(text: LocalizedText, locale: Locale) {
  return text[locale];
}

export function getList(list: LocalizedStringArray, locale: Locale) {
  return list[locale];
}

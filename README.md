# Resume

A modern bilingual product manager resume website built with Astro and Tailwind CSS.

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## How to edit content

All resume content lives in `src/data/resume.ts`.

You will mainly edit these sections:

- `profile`
  - `name`: your name
  - `role`: your title
  - `tagline`: your one-line positioning
  - `summary`: your intro
  - `location`, `email`, `phone`, `availability`
- `links`
  - GitHub / LinkedIn / portfolio links
- `highlights`
  - the 3 headline metrics or strengths near the top
- `experiences`
  - your work history timeline
- `projects`
  - your best PM case studies
- `skills`
  - grouped capability tags
- `education`
  - school, degree, period, location

Each text field supports both Chinese and English with this structure:

```ts
{
  zh: '中文内容',
  en: 'English content'
}
```

Examples:

```ts
profile: {
  name: '张三',
  phone: '+86 138 0000 0000',
  role: {
    zh: '产品经理 / AI Product / Growth',
    en: 'Product Manager / AI Product / Growth'
  }
}
```

```ts
highlights: [
  {
    value: '+35%',
    label: {
      zh: '核心转化提升',
      en: 'Core conversion lift'
    },
    detail: {
      zh: '通过流程优化持续提升转化。',
      en: 'Improved conversion through funnel redesign.'
    }
  }
]
```

## View modes

Static routes are generated for all language and PDF variants:

- Chinese web: `/`
- English web: `/en/`
- Chinese PDF mode: `/pdf/`
- English PDF mode: `/en/pdf/`

On GitHub Pages, these routes are automatically served under your repository base path, for example:

- `/Resume/`
- `/Resume/en/`
- `/Resume/pdf/`
- `/Resume/en/pdf/`

## Deploy

- **Vercel**: import the repository and deploy as a static Astro site.
- **GitHub Pages**: push to `main` and enable GitHub Pages with GitHub Actions.

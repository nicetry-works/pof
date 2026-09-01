# Contributing

Thanks for taking a look. This is a small, static documentation site —
contributing to it is low-ceremony on purpose.

## Local setup

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3003`.

## How content is organized

- `content/*.mdx` — one file per page. Nested folders (`content/format/`,
  `content/surfaces/`, ...) become collapsible sidebar groups.
- `content/**/_meta.js` — controls the title and order of pages within a
  folder (and of the folders themselves, at the root).
- `app/` — the Next.js/Nextra shell (layout, favicon, the one MDX
  catch-all route). Content changes almost never need to touch this.

## The one rule that matters more than style

Every factual claim on this site — a field name, a tool name, an example
document — should trace back to something real, not be invented for
illustration. If you're correcting a page, please say what you checked it
against (a specific file, a specific behavior) in your PR description.
"This reads better" is a fine reason to reword something; "this is wrong"
needs a pointer to why.

## Before opening a PR

```bash
npm run lint
npm run build
```

Both need to pass — CI runs the same two commands.

## Reporting a content error

If you don't want to fix it yourself, opening an issue with the
"Content correction" template is just as useful — say which page, what it
currently says, and what's actually true.

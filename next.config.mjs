import nextra from "nextra";

// Nextra owns the MDX pipeline (content/*.mdx -> routes) and the docs
// theme's sidebar/search — see README for why this project doesn't hand-
// build its own docs shell (it's a fresh, standalone site, not a fork of
// the ops platform).
const withNextra = nextra({});

export default withNextra({
  reactStrictMode: true,
  // Next 16 defaults to Turbopack, which needs an explicit pointer to
  // mdx-components.tsx (it doesn't fall back to Webpack's directory-based
  // discovery) — see Nextra's file-conventions/mdx-components-file docs.
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
});

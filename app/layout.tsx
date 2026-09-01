import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { ReactNode } from "react";
import "nextra-theme-docs/style.css";

export const metadata = {
  // Now that a real domain exists, this fixes relative OG/canonical URL
  // resolution instead of Next.js falling back to localhost.
  metadataBase: new URL("https://pof.dev"),
  title: {
    default: "POF",
    template: "%s — POF",
  },
  description:
    "POF (Portable Organization Format) — a content format for Roles, Skills, Notebooks, and Wiki objects that a human and an agent can both read and write.",
};

// Same mark as app/icon.svg (the browser-tab favicon), fixed dark/light
// colors rather than currentColor — a small brand mark reading the same
// regardless of the page's own light/dark state, same as most docs sites'
// logos. A bold geometric "P" (thick stem, punched-hole bowl) with two
// translucent copies of the bowl staggered behind it, like the letter
// emerging from a stack of pages — the two ideas the user liked out of a
// round of alternatives (a plain lettermark vs. a fanned document stack)
// combined into one mark, rather than either alone.
// Inline styles, not nx-prefixed classNames: this project has no
// Tailwind pipeline of its own (only nextra-theme-docs' pre-compiled
// stylesheet), so a className like "nx-flex" is a no-op here — it only
// works inside the theme's own components, which is how this bug (the
// logo stacking vertically instead of sitting beside the wordmark) was
// found and fixed.
const logo = (
  <span style={{ alignItems: "center", display: "flex", gap: "10px" }}>
    <svg aria-hidden height="32" viewBox="0 0 32 32" width="32">
      <rect fill="#18181b" height="32" rx="8" width="32" />
      <rect fill="#fafafa" height="9" opacity="0.2" rx="3" width="13" x="14" y="4" />
      <rect fill="#fafafa" height="9" opacity="0.45" rx="3" width="13" x="11.5" y="6" />
      <rect fill="#fafafa" height="16" rx="1" width="4" x="9" y="8" />
      <rect fill="#fafafa" height="9" rx="3" width="13" x="9" y="8" />
      <rect fill="#18181b" height="4" rx="1.5" width="5" x="14" y="12" />
    </svg>
    <b style={{ fontSize: "1.125rem" }}>POF</b>
  </span>
);

// No projectLink/docsRepositoryBase yet — no public repo exists for this
// site until it's actually published (see plan: publishing is a separate,
// explicit ask).
const navbar = <Navbar logo={logo} />;

const footer = <Footer>POF — Portable Organization Format.</Footer>;

// Nextra's own Layout/Navbar/Footer are the entire docs shell here — this
// project deliberately doesn't hand-build a sidebar/search/theme (see
// README: it's a fresh, standalone site, not a fork of the ops platform
// that already has its own shadcn-based shell).
export default async function RootLayout({ children }: { readonly children: ReactNode }) {
  const pageMap = await getPageMap();
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout footer={footer} navbar={navbar} pageMap={pageMap}>
          {children}
        </Layout>
      </body>
    </html>
  );
}

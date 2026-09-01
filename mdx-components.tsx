import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import type { MDXComponents } from "mdx/types";

// nextra-theme-docs' own components (mostly layout/typography defaults —
// Callout/Cards/Steps/FileTree/Mermaid are imported per-file from
// "nextra/components" instead, per Nextra's own convention). No custom
// components to merge in here — this site has none.
const themeComponents = getThemeComponents();

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...themeComponents,
    ...components,
  };
}

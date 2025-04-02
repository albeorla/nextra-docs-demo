import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Input Processing System Documentation</span>,
  project: {
    link: 'https://github.com/yourusername/input-processing-docs',
  },
  docsRepositoryBase: 'https://github.com/yourusername/input-processing-docs/blob/main',
  footer: {
    text: `© ${new Date().getFullYear()} Input Processing System Documentation`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Input Processing System'
    }
  },
  head: () => {
    const { frontMatter } = useConfig()
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={frontMatter.description || 'Input Processing System Documentation'} />
        <meta name="og:title" content={frontMatter.title || 'Input Processing System'} />
      </>
    )
  },
  primaryHue: 210, // Blue color for primary elements
  banner: {
    key: 'docs-migration',
    text: <a href="/getting-started">Learn about the new documentation format →</a>,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
    title: 'On This Page',
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  search: {
    placeholder: 'Search documentation...',
  },
  darkMode: true,
}

export default config

import { MDXComponents } from 'mdx/types'

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '2.5rem' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: '2rem' }}>{children}</h2>,
    ...components,
  }
}

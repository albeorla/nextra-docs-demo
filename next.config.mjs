// next.config.mjs
import nextra from 'nextra'

const withNextra = nextra({
  // Only include valid options for Nextra 4
  contentDirBasePath: '/'
})

export default withNextra({
  reactStrictMode: true,
})

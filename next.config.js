/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Other server runtime config options...
    warningOnEffectHooksDuringServerRender: false,
  },
}

module.exports = nextConfig

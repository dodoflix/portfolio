const { composePlugins, withNx } = require('@nx/next');
const createNextIntlPlugin = require('next-intl/plugin');
const fs = require('fs');

// Handle both Nx (workspace root) and Next.js (apps/web) execution contexts
const i18nPath = fs.existsSync('./src/i18n/request.ts') 
  ? './src/i18n/request.ts' 
  : './apps/web/src/i18n/request.ts';

const withNextIntl = createNextIntlPlugin(i18nPath);

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
  // Allow dev server access from local network (all origins in dev)
  allowedDevOrigins: ['*'],
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withNextIntl,
];

module.exports = composePlugins(...plugins)(nextConfig);

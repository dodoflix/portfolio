import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../libs/shared/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};

export default config;

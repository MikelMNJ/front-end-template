import { defineConfig, loadEnv } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import { hmrPatch } from './src/utility';
import react from '@vitejs/plugin-react-swc';
import jsconfigPaths from 'vite-jsconfig-paths';
import eslint from 'vite-plugin-eslint';
import PackageJSON from './package.json';

const config = defineConfig(args => {
  const { mode } = args;
  const { name, version } = PackageJSON;
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const sentryConfig = {
    authToken: env.VITE_SENTRY_AUTH_TOKEN,
    org: env.VITE_SENTRY_ORG,
    project: env.VITE_SENTRY_PROJECT,
    release: `${name}@${version}`,
    include: './dist',
  };

  return {
    define: { 'process.env': env },
    build: { chunkSizeWarningLimit: 1600, sourcemap: true },
    plugins: [
      react(),
      jsconfigPaths(),
      eslint(),
      hmrPatch(),
      sentryVitePlugin(sentryConfig),
    ],
  };
});

export default config;
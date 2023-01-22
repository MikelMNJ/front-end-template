import { defineConfig, loadEnv } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import jsconfigPaths from 'vite-jsconfig-paths';
import eslint from 'vite-plugin-eslint';

const config = defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const sentryConfig = {
    authToken: env.VITE_SENTRY_DSN,
    org: env.VITE_SENTRY_ORG,
    project: env.VITE_SENTRY_PROJECT,
    include: './dist',
  };

  return {
    define: { 'process.env': env },
    build: { chunkSizeWarningLimit: 1600, sourcemap: true },
    plugins: [
      react(),
      jsconfigPaths(),
      eslint(),
      sentryVitePlugin(sentryConfig),
    ],
  };
});

export default config;
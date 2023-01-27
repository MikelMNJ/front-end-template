import { defineConfig, loadEnv } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import jsconfigPaths from 'vite-jsconfig-paths';
import eslint from 'vite-plugin-eslint';
import PackageJSON from './package.json';

const config = defineConfig(({ mode }) => {
  const { name, version } = PackageJSON;
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const sentryConfig = {
    authToken: env.VITE_SENTRY_AUTH_TOKEN,
    org: env.VITE_SENTRY_ORG,
    project: env.VITE_SENTRY_PROJECT,
    release: `${name}@${version}`,
    include: './dist',
  };

  const hmrPatch = () => ({
    name: 'singleHMR',
    handleHotUpdate({ modules }) {
      modules.map(module => {
        module.importedModules = new Set();
        module.importers = new Set();
      });

      return modules;
    },
  });

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
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import jsconfigPaths from 'vite-jsconfig-paths';
import eslint from 'vite-plugin-eslint';

const config = defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [ react(), jsconfigPaths(), eslint() ],
    define: { 'process.env': env },
    build: { chunkSizeWarningLimit: 1600 },
  };
});

export default config;
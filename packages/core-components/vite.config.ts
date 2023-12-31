// vite.config.js
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import banner2 from 'rollup-plugin-banner2';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import { UserConfigExport } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
const app = async (): Promise<UserConfigExport> =>
  defineConfig({
    plugins: [
      dts({
        include: 'src',
        insertTypesEntry: true,
      }),
      svgr({
        svgrOptions: {
          dimensions: false,
        },
      }),
      banner2(
        () => `
      'use client';
      `
      ),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss('tailwind.config.cjs'), autoprefixer],
        from: './src/tailwind.css',
        to: 'dist/index.css',
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      cssTarget: 'esnext',
      target: 'esnext',
      lib: {
        entry: resolve('src', 'index.ts'),
        name: '@namviet-fe/core-ui',
        formats: ['es', 'umd'],
        fileName: (format) => `core-ui.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'react',
            'react-dom': 'react-dom',
          },
          interop: 'auto',
        },
      },
    },
  });

export default app;

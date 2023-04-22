import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
// @ts-ignore
import render from "./dist/server/entry-server.js";
import { ViteDevServer } from "vite";


/* 
import pkg from '@reduxjs/toolkit';
const { createSlice, configureStore } = pkg;
import pkg1 from '@reduxjs/toolkit/dist/query/react/index.js';
const { createApi, fetchBaseQuery } = pkg1;
*/

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isTest = process.env.VITEST

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) {
  const resolve = (p: string) => path.resolve(__dirname, p)

  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
    : ''

  const app = express()

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite: ViteDevServer | undefined;
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        }
      },
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    app.use((await import('compression')).default())
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      }),
    )
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template;
      if (!isProd) {
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        if (vite) {
          template = await vite.transformIndexHtml(url, template);
        }
        
        const html = template.split(`<!--app-html-->`);

        const stream = render(url, {
          onShellReady() {
            res.write(html[0]);
            stream.pipe(res);
          },
          onAllReady() {
            res.write(html[0] + html[1]);
            res.end();
          },
        });
        //
      } else {
        template = indexProd;
        const html = template.split(`<!--app-html-->`);

        const { pipe } = render(url, {
          onShellReady() {
            res.write(html[0]);
            pipe(res);
          },
          onAllReady() {
            res.write(html[0] + html[1]);
            res.end();
          },
        });
      }
    } catch (e) {
      !isProd && vite && vite.ssrFixStacktrace(e as Error)
      console.log((e as Error).stack)
      res.status(500).end((e as Error).stack)
    }
  })

  return { app, vite }
}

if (!isTest) {
  createServer(process.cwd(), process.env.NODE_ENV === 'production').then(({ app }) =>
    app.listen(5173, () => {
      console.log('http://localhost:5173')
    }),
  )
}
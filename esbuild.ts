import fs from 'fs-extra'
import { parse } from 'node-html-parser'
import * as esbuild from 'esbuild'
import open from 'open'

process.env.NODE_ENV = process.argv[2] // eslint-disable-line

function consoleLog(message: string): void {
  console.log(message)
}

async function copyAndWrite(outdir: string, outfile: string): Promise<void> {
  await fs.copy('public', outdir)

  const html: string = await fs.readFile(`${outdir}/index.html`, 'utf8')
  const root: any = parse(html)


  const head: HTMLElement | null = root.querySelector('head') as HTMLElement | null
  if (head) {
    head.insertAdjacentHTML(
    'beforeend',
    `  <link rel="stylesheet" href="app${outfile}.css" //>
`
  )
  }

  const body: HTMLElement | null = root.querySelector('body') as HTMLElement | null
  if (body) {
    body.insertAdjacentHTML(
    'beforeend',
    `  <script src="app${outfile}.js"></script>
`
  )
  }

  const index: string = root.toString()
  await fs.writeFile(`${outdir}/index.html`, index)
}

if (process.env.NODE_ENV === 'development') { // eslint-disable-line
  copyAndWrite('www', '')

  const ctx = await esbuild.context({
    entryPoints: ['./src/app.ts'],
    bundle: true,
    target: ['esnext'],
    external: ['*.svg'],
    define: { 'window.IS_DEVELOPMENT': 'true' },
    outdir: 'www'
  })

  await ctx.watch()
  consoleLog('Build finished, watching for changes...')

  await ctx.serve({
    servedir: 'www'
  })
  consoleLog('Local: http://localhost:8000')

  await open('http://localhost:8000')
} else {
  copyAndWrite('static', '.min')

  await esbuild.build({
    entryPoints: ['./src/app.ts'],
    bundle: true,
    minify: true,
    target: ['esnext'],
    external: ['*.svg'],
    define: { 'window.IS_DEVELOPMENT': 'false' },
    outfile: 'static/app.min.js'
  })
  consoleLog('Build finished')
}

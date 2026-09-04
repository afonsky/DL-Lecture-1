import { chromium } from 'playwright-chromium'
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const root = '/tmp/claude-1000/-home-alexey-HSE-Teaching-MLP-DL-fall26-DL-Lecture-1/7b13aff5-700a-44a7-a5d1-3ab7971bd3e1/scratchpad/dist'
const types = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.svg':'image/svg+xml','.jpg':'image/jpeg','.json':'application/json'}
const srv = http.createServer((req,res)=>{
  let p = path.join(root, decodeURIComponent(req.url.split('?')[0]))
  if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) p = path.join(root,'index.html')
  res.setHeader('Content-Type', types[path.extname(p)] || 'application/octet-stream')
  res.end(fs.readFileSync(p))
}).listen(5599)

const b = await chromium.launch()
const pg = await b.newPage({viewport:{width:1280,height:800}})
const errs = []
pg.on('console', m => { if (m.type()==='error'||m.type()==='warning') errs.push(m.text()) })
pg.on('pageerror', e => errs.push('PAGEERROR: '+e.message))

for (let i = 1; i <= 40; i++) {
  await pg.goto(`http://localhost:5599/#${i}`, {waitUntil:'networkidle'})
  await pg.waitForTimeout(300)
  const h = await pg.evaluate(() => document.querySelector('.slidev-page h1')?.innerText || '')
  if (h.includes('activation functions')) {
    console.log('slide', i, '->', h)
    await pg.waitForTimeout(2000)
    const n = await pg.evaluate(() => document.querySelectorAll('.js-plotly-plot').length)
    const traces = await pg.evaluate(() => document.querySelectorAll('.js-plotly-plot .scatterlayer .trace').length)
    console.log('plotly containers:', n, ' traces:', traces)
    await pg.screenshot({path:'/tmp/claude-1000/-home-alexey-HSE-Teaching-MLP-DL-fall26-DL-Lecture-1/7b13aff5-700a-44a7-a5d1-3ab7971bd3e1/scratchpad/slide.png'})
    break
  }
}
console.log('CONSOLE:', errs.slice(0,15).join('\n'))
await b.close(); srv.close()

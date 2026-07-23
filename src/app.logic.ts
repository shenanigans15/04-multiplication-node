import fs from 'fs'
import { yarg } from './config/plugins/args.plugin'

const marco = '='.repeat(30)
const { b: base, l: limit, s: showTable } = yarg
const headerMessage = `
${marco}
${' '.repeat(8)}Tabla del ${base}
${marco}\n
`

let outputMessage = ''
for (let i = 1; i <= limit; i++) {
  outputMessage += `${' '.repeat(8) + base} x ${i} = ${base * i}\n`
}

outputMessage = headerMessage + outputMessage

if (showTable) {
  console.log(outputMessage)
}

const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage)
console.log('File created!')

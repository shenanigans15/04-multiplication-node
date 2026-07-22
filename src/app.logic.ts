import fs from 'fs'
// const message: string = 'Hola Mundo!'

// console.log(message)

const marco = '='.repeat(30)
const base = 5
const headerMessage = `
${marco}
${' '.repeat(8)}Tabla del ${base}
${marco}\n
`

let outputMessage = ''
const veces = 10
for (let i = 1; i <= veces; i++) {
  outputMessage += `${' '.repeat(8) + base} x ${i} = ${base * i}\n`
}

outputMessage = headerMessage + outputMessage
console.log(outputMessage)

const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage)
console.log('File created!')

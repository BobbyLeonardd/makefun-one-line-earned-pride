const { writeFileSync, mkdirSync } = require('node:fs')
const { join } = require('node:path')

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output'

const TEXT = "His hands still buzz from the buffer, and the last coat of wax goes down at two in the morning; he walks the whole corridor in his socks before the chairs go back on the desks."

mkdirSync(OUT_DIR, { recursive: true })
writeFileSync(join(OUT_DIR, 'entry.txt'), TEXT)
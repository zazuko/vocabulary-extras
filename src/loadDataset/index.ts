import fs from 'fs'
import { join, resolve } from 'path'
import * as url from 'url'
import pkgDir from 'pkg-dir'
import type prefixes from '../prefixes.js'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

async function buildPath(prefix: keyof typeof prefixes) {
  const rootDir = await pkgDir(__dirname)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return resolve(join(rootDir!, 'ontologies', `${prefix}.nq`))
}

export async function loadDatasetStream(prefix: keyof typeof prefixes) {
  return fs.createReadStream(await buildPath(prefix), { encoding: 'utf8' })
}

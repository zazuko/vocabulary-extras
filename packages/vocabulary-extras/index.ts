import './register.js'
import { create } from '@zazuko/vocabulary-loader'
import prefixes from './prefixes.js'

export { prefixes }
export const vocabularies = create(prefixes)

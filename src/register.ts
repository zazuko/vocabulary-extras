import prefixes from '@zazuko/rdf-vocabularies/prefixes'
import morePrefixes from './prefixes'

Object.entries(morePrefixes)
  .forEach(([prefix, namespace]) => {
    prefixes[prefix] = namespace
  })

type LocalPrefixes = typeof prefixes

declare module '@zazuko/rdf-vocabularies/prefixes' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Prefixes extends LocalPrefixes {
  }
}

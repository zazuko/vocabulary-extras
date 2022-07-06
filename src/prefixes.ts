const prefixes = {
  code: 'https://code.described.at/',
  cube: 'https://cube.link/',
  meta: 'https://cube.link/meta/',
  pipeline: 'https://pipeline.described.at/',
  relation: 'https://cube.link/relation/'
}

type LocalPrefixes = typeof prefixes

declare module '@zazuko/rdf-vocabularies/prefixes' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Prefixes extends LocalPrefixes {
  }
}

export default prefixes

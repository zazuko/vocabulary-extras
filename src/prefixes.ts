const prefixes = {
  code: 'https://code.described.at/',
  cube: 'https://cube.link/',
  pipeline: 'https://pipeline.described.at/'
}

type LocalPrefixes = typeof prefixes

declare module '@zazuko/rdf-vocabularies/prefixes' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Prefixes extends LocalPrefixes {
  }
}

export default prefixes

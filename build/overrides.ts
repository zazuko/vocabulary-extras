interface FileSpec {
  file?: string;
  mediaType?: string;
  xmlParserOptions?: {
    baseIRI: string;
  };
}

export interface Override extends FileSpec {
  skip?: boolean;
  files?: FileSpec[];
}

export const overrides: Record<string, Override> = {
  code: {
    file: 'https://raw.githubusercontent.com/zazuko/code.described.at/master/vocab.nt',
    mediaType: 'application/n-triples'
  },
  pipeline: {
    file: 'https://raw.githubusercontent.com/zazuko/pipeline.described.at/master/vocab.nt',
    mediaType: 'application/n-triples'
  }
}

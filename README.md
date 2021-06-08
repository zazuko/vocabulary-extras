# @zazuko/vocabulary-extras

Additional vocabularies, commonly used in Zazuko projects:

```json
{
  "code": "https://code.described.at/",
  "cube": "https://cube.link/",
  "pipeline": "https://pipeline.described.at/"
}
```

## Usage

After installing, simply import anywhere to have additional prefixes added to `@zazuko/rdf-vocabularies`

```javascript
import '@zazuko/vocabulary-extras'
import { prefixes, expand } from '@zazuko/rdf-vocabularies'

const cubeUri = prefixes.cube

// expand and shrink will also work for those vocabs
const Cube = expand('cube:Cube')

Cube === 'https://cube.link/Cube'
```

Additionally, modules exporting `@rdfjs/namespace` builders are generated.

```javascript
import { cube } from '@zazuko/vocabulary-extras/builders(/strict)'

const { Cube } = cube

Cube.value === 'https://cube.link/Cube'
```

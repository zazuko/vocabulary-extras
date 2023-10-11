import namespace, { NamespaceBuilder } from '@rdfjs/namespace'
import { NamedNode } from '@rdfjs/types'

export interface Pipeline {
  '': NamedNode<'https://pipeline.described.at/'>
  /** Definition of a Pipeline */
  'Pipeline': NamedNode<'https://pipeline.described.at/Pipeline'>
  /** Readable Stream */
  'Readable': NamedNode<'https://pipeline.described.at/Readable'>
  /** Readable Stream in Object Mode */
  'ReadableObjectMode': NamedNode<'https://pipeline.described.at/ReadableObjectMode'>
  /** Definition of a Pipeline Step */
  'Step': NamedNode<'https://pipeline.described.at/Step'>
  /** Writable Stream */
  'Writable': NamedNode<'https://pipeline.described.at/Writable'>
  /** Writable Stream in Object Mode */
  'WritableObjectMode': NamedNode<'https://pipeline.described.at/WritableObjectMode'>
  /** Ordered List of Pipeline Steps */
  'stepList': NamedNode<'https://pipeline.described.at/stepList'>
  /** Definition of Steps for a Pipeline */
  'steps': NamedNode<'https://pipeline.described.at/steps'>
}

const builder = namespace('https://pipeline.described.at/') as any
export const strict = builder as NamespaceBuilder<keyof Pipeline> & Pipeline
export const loose = builder as NamespaceBuilder & Pipeline

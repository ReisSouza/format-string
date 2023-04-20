import { Value } from './types'

export const formatRemove = (value: Value) => {
  return value.replace(/[^a-z0-9]/gi, '')
}

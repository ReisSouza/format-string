import { Value } from './types'

export const formatStringNumber = (value: Value) => {
  if (value === undefined) return undefined
  return String(value).replace(/\D/g, '')
}

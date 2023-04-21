import { Value } from './types'

export const formatStringPostalCode = (value: Value) => {
  if (value === undefined) return undefined
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

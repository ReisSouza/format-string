import { Value } from './types'

export const formatStringRG = (value: Value) => {
  if (value === undefined) return undefined
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1')
}

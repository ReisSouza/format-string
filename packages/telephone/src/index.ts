import { Value } from './types'

export const formatStringTelephone = (value: Value) => {
  if (!value) return undefined
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d{0})(\d)/, '$1($2')
    .replace(/(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

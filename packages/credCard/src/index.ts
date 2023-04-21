import { Value } from './types'

export const formatStringCredCard = (value: Value) => {
  if (value === undefined) return undefined
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

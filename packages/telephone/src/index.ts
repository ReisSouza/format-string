import { Value } from './types'

export const formatStringTelephone = (value: Value) => {
  if (!value) return undefined
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
}

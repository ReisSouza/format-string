import { Response, Value } from './types'

export const formatCNPJ = (value: Value): Response => {
  if (value === undefined) return undefined
  return String(value).replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    '$1.$2.$3/$4-$5',
  )
}

export const isFormatCNPJ = (
  value: string | undefined,
): boolean | undefined => {
  if (value === undefined) return undefined
  // eslint-disable-next-line no-useless-escape
  const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
  return regex.test(value)
}

console.log(formatCNPJ('28097638000101'))

import { Value } from './types'

export const formatCPF = (value: Value) => {
  if (value === undefined) return undefined
  return String(value).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
}

export const isFormatCPF = (value: string | undefined) => {
  if (value === undefined) return undefined

  const regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/

  return regex.test(value)
}

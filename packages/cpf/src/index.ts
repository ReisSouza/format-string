import { IFormatCPF, IIsFormatCPF } from './types'

export const formatCPF = (value: IFormatCPF): string | undefined => {
  if (value === undefined) return undefined
  if (value === null) return undefined

  const formatToString = String(value)

  const resultReplaces = formatToString
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')

  return resultReplaces
}

export const isFormatCPF = (value: IIsFormatCPF): boolean | undefined => {
  if (value === undefined) return undefined
  if (value === null) return undefined

  const regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/
  const resultRegex = regex.test(value)

  return resultRegex
}

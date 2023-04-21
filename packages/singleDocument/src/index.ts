import { Response, Value } from './types'

import { formatCPF, isFormatCPF } from '@format-string/cpf'
import { formatCNPJ, isFormatCNPJ } from '@format-string/cnpj'

export const formatSingleDocument = (value: Value): Response => {
  if (value === undefined) return undefined
  if (String(value).length <= 14) {
    return formatCPF(value)
  } else {
    return formatCNPJ(value)
  }
}

export const isFormatSingleDocument = (
  value: string | undefined,
): 'cpf' | 'cnpj' | undefined => {
  if (value === undefined) return undefined
  if (value.length <= 14 && isFormatCPF(value)) {
    return 'cpf'
  } else if (isFormatCNPJ(value)) {
    return 'cnpj'
  } else {
    return undefined
  }
}

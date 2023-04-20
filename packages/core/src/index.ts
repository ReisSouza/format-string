import { FormatStringArgs, FormatStringType, Response } from './types'
import { formatCNPJ, isFormatCNPJ } from '@format-string/cnpj'
import { formatCPF, isFormatCPF } from '@format-string/cpf'
import { formatRemove } from '@format-string/remove'

const formatString = ({ value, type }: FormatStringArgs): Response => {
  const asMaskSelect: Record<FormatStringType, Response> = {
    cnpj: formatCNPJ(value),
    cpf: formatCPF(value),
  }

  return asMaskSelect[type]
}

export { formatRemove, formatString, isFormatCPF, isFormatCNPJ }

import { FormatStringArgs, FormatStringType, Response } from './types'
import { formatCNPJ, isFormatCNPJ } from '@format-string/cnpj'
import { formatCPF, isFormatCPF } from '@format-string/cpf'
import { formatRemove } from '@format-string/remove'
import { formatStringCredCard } from '@format-string/cred-card'
import { formatStringCurrency } from '@format-string/currency'
import { formatStringNumber } from '@format-string/number'
import { formatStringPhone } from '@format-string/phone'
import { formatStringPostalCode } from '@format-string/postal-code'
import { formatStringRG } from '@format-string/rg'
import { formatStringCredCardExpirationDate } from '@format-string/cred-card-expiration-date'
import { formatStringTelephone } from '@format-string/telephone'

import { formatSinglePhone } from '@format-string/single-phone'

import {
  formatSingleDocument,
  isFormatSingleDocument,
} from '@format-string/single-document'

const formatString = ({ value, type }: FormatStringArgs): Response => {
  const asMaskSelect: Record<FormatStringType, Response> = {
    cnpj: formatCNPJ(value),
    cpf: formatCPF(value),
    credCard: formatStringCredCard(value),
    cardExpirationDate: formatStringCredCardExpirationDate(value),
    cpfOurCnpj: formatSingleDocument(value),
    currency: formatStringCurrency(value),
    number: formatStringNumber(value),
    obscureEmail: formatSingleDocument(value),
    phone: formatStringPhone(value),
    postalCode: formatStringPostalCode(value),
    rg: formatStringRG(value),
    telephone: formatStringTelephone(value),
    phoneOrTelephone: formatSinglePhone(value),
  }

  return asMaskSelect[type]
}

export {
  formatRemove,
  formatString,
  isFormatCPF,
  isFormatCNPJ,
  isFormatSingleDocument,
}

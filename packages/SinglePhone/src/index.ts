import { Response, Value } from './types'

import { formatStringPhone } from '@format-string/phone'
import { formatStringTelephone } from '@format-string/telephone'

export const formatSinglePhone = (value: Value): Response => {
  if (value === undefined) return undefined
  if (String(value).length <= 14) {
    return formatStringTelephone(value)
  } else {
    return formatStringPhone(value)
  }
}

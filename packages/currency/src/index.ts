import { Value } from './types'

export const formatStringCurrency = (value: Value) => {
  if (value === undefined) return undefined
  const initialValue = +String(value).replace(/\D/g, '') / 100

  return initialValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

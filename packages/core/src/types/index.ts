export type Value = string | number | undefined
export type Response = string | undefined

export type FormatStringType = 'cnpj' | 'cpf'

export type FormatStringArgs = {
  type: FormatStringType
  value: Value
}

export type Record<K extends string, T> = {
  // eslint-disable-next-line no-unused-vars
  [key in K]: T
}

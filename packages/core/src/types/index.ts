/* eslint-disable no-unused-vars */
export type Value = string | undefined
export type Response = string | undefined

export type TypeFormatStingProps =
  | 'cnpj'
  | 'cpf'
  | 'phone'
  | 'postalCode'
  | 'cpfCnpj'
  | 'currency'
  | 'rg'
  | 'credCard'
  | 'obscureEmail'
  | 'number'
  | 'cardExpirationDate'

export type FormatStringProps = {
  type: TypeFormatStingProps
  value: Value
  prefix?: string
}

export type Record<K extends string, T> = {
  [P in K]: T
}

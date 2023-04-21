import { Value } from './src/types'

export declare const formatSingleDocument: (value: Value) => string
export declare const isFormatSingleDocument: (
  value: string | undefined,
) => 'cpf' | 'cnpj' | undefined

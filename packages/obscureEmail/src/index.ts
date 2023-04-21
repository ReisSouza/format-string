export const formatStringObscureEmail = (value: string | undefined) => {
  if (value === undefined) return undefined
  const [name, domain] = value.split('@')
  return `${name[0]}${new Array(name.length).join('*')}@${domain}`
}

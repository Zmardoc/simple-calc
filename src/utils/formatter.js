import { MULTIPLIER } from '@/enums/multipliers'

export const prepareExpression = value => {
  let cleanValue = value.replace(/\s/g, '')

  Object.keys(MULTIPLIER).forEach(
    multiplierKey => (cleanValue = cleanValue.replaceAll(multiplierKey, `*${MULTIPLIER[multiplierKey]}`)),
  )

  return cleanValue
}

export const formatNumber = number => {
  return Intl.NumberFormat('cs-CZ').format(number).replace(/,/g, '.')
}

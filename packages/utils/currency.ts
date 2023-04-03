export const formatCurrencyPHP = (value?: number) => {
  if (!value) {
    return undefined
  }

  const result = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value)

  return result
}

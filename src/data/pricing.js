export const fees = {
  buying: { VIC: [990, 1290], SA: [870, 1090], QLD: [990, 1290] },
  selling: { VIC: [870, 1090], SA: [790, 990], QLD: [870, 1090] },
  transferring: { VIC: [650, 850], SA: [590, 790], QLD: [650, 850] },
  contractReview: { VIC: [350, 450], SA: [350, 450], QLD: [350, 450] },
}

export const transactionLabels = {
  buying: 'Buying',
  selling: 'Selling',
  transferring: 'Transferring',
  contractReview: 'Contract Review',
}

export function formatMoney(value) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function getFeeRange(type, state) {
  return fees[type]?.[state] || fees.buying.VIC
}

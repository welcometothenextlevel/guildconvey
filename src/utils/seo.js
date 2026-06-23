export const siteUrl = 'https://guildconveyancing.com.au'

export function canonical(path = '/') {
  return `${siteUrl}${path}`
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Guild Conveyancing',
  url: siteUrl,
  slogan: 'Mastery in Property Transfers',
  areaServed: ['Victoria', 'South Australia', 'Queensland'],
  serviceType: ['Buying conveyancing', 'Selling conveyancing', 'Property transfers', 'Contract review'],
}

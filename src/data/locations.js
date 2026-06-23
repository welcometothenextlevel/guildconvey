const makeSlug = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export const states = {
  VIC: {
    name: 'Victoria',
    path: '/victoria',
    mapLabel: 'Victorian property transfers',
    topAreas: ['Melbourne CBD', 'Geelong', 'Ballarat', 'Bendigo', 'Frankston'],
    suburbs: [
      'Melbourne CBD',
      'Geelong',
      'Ballarat',
      'Bendigo',
      'Frankston',
      'Dandenong',
      'Ringwood',
      'Box Hill',
      'Craigieburn',
      'Werribee',
      'Pakenham',
      'Cranbourne',
      'Berwick',
      'Narre Warren',
      'Point Cook',
      'Sunbury',
      'Melton',
      'Lilydale',
      'Essendon',
      'Northcote',
      'Coburg',
      'Glen Waverley',
      'Moonee Ponds',
      'Caroline Springs',
      'Shepparton',
      'Cheltenham',
      'Brunswick',
      'Doncaster',
      'Reservoir',
      'Footscray',
      'St Kilda',
    ],
  },
  SA: {
    name: 'South Australia',
    path: '/south-australia',
    mapLabel: 'South Australian settlements',
    topAreas: ['Adelaide CBD', 'Norwood', 'Glenelg', 'Salisbury', 'Mount Barker'],
    suburbs: [
      'Adelaide CBD',
      'Norwood',
      'Glenelg',
      'Para Hills',
      'Salisbury',
      'Port Adelaide',
      'Marion',
      'Unley',
      'Campbelltown',
      'Elizabeth',
      'Murray Bridge',
      'Mount Barker',
      'Noarlunga',
      'Modbury',
      'Golden Grove',
      'Mawson Lakes',
      'Tea Tree Gully',
      'Prospect',
      'Burnside',
      'Mitcham',
    ],
  },
  QLD: {
    name: 'Queensland',
    path: '/queensland',
    mapLabel: 'Queensland conveyancing support',
    topAreas: ['Brisbane CBD', 'Gold Coast', 'Sunshine Coast', 'Ipswich', 'Toowoomba'],
    suburbs: [
      'Brisbane CBD',
      'Gold Coast',
      'Sunshine Coast',
      'Ipswich',
      'Toowoomba',
      'Logan',
      'Cairns',
      'Townsville',
      'Mackay',
      'Rockhampton',
      'Hervey Bay',
      'Maroochydore',
      'Redcliffe',
      'Springfield',
      'Caboolture',
      'Robina',
      'Southport',
      'Bundaberg',
      'Gladstone',
      'Mount Gravatt',
    ],
  },
}

export const stateEntries = Object.entries(states)

export function suburbPath(stateCode, suburb) {
  return `${states[stateCode].path}/conveyancing-${makeSlug(suburb)}`
}

export function titleFromSlug(slug = '') {
  return slug
    .split('-')
    .map((part) => (part === 'cbd' ? 'CBD' : part.charAt(0).toUpperCase() + part.slice(1)))
    .join(' ')
}

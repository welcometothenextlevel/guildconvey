import { FileCheck, Home, KeyRound, RefreshCw } from 'lucide-react'

export const services = [
  {
    title: 'Buying',
    path: '/buying',
    icon: Home,
    summary: 'Navigate every step of your purchase with precision',
    bullets: ['Contract review before you sign', 'Cooling-off and finance date guidance', 'PEXA settlement coordination'],
  },
  {
    title: 'Selling',
    path: '/selling',
    icon: KeyRound,
    summary: 'Maximise your outcome with expert contract management',
    bullets: ['Vendor disclosure support', 'Agent and purchaser liaison', 'Settlement statement checks'],
  },
  {
    title: 'Transferring',
    path: '/transfer',
    icon: RefreshCw,
    summary: 'Seamless title transfers between related parties',
    bullets: ['Family and relationship transfers', 'Title and authority preparation', 'Clear fixed-fee guidance'],
  },
  {
    title: 'Contract Review',
    path: '/contract-review',
    icon: FileCheck,
    summary: 'Fast, practical advice before you commit',
    bullets: ['Plain-English risk summary', 'Special conditions review', '48-hour turnaround available'],
  },
]

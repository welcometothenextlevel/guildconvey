import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const dynamicRoutes = [
  '/locations',
  '/victoria',
  '/south-australia',
  '/queensland',
  '/buying',
  '/selling',
  '/transfer',
  '/contract-review',
  '/quote',
  '/about',
  '/contact',
  '/faq',
  '/blog',
  '/victoria/conveyancing-geelong',
  '/victoria/conveyancing-ballarat',
  '/victoria/conveyancing-bendigo',
  '/victoria/conveyancing-frankston',
  '/victoria/conveyancing-dandenong',
  '/south-australia/conveyancing-norwood',
  '/south-australia/conveyancing-glenelg',
  '/south-australia/conveyancing-salisbury',
  '/south-australia/conveyancing-mount-barker',
  '/south-australia/conveyancing-modbury',
  '/queensland/conveyancing-gold-coast',
  '/queensland/conveyancing-sunshine-coast',
  '/queensland/conveyancing-ipswich',
  '/queensland/conveyancing-toowoomba',
  '/queensland/conveyancing-logan',
]

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://guildconveyancing.com.au',
      dynamicRoutes,
    }),
  ],
})

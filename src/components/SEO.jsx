import { Helmet } from 'react-helmet-async'
import { canonical } from '../utils/seo.js'

export default function SEO({ title, description, path = '/', schema }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical(path)} />
      {schema ? <script type="application/ld+json">{JSON.stringify(schema)}</script> : null}
    </Helmet>
  )
}

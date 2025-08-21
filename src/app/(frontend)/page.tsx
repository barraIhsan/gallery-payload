import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import Galleries from './Galleries'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const galleries = await payload.find({
    collection: 'gallery',
    limit: 100,
  })

  return (
    <main className="p-5 sm:p-12">
      <Galleries data={galleries.docs} />
    </main>
  )
}

import type { CollectionConfig } from 'payload'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'desc',
      type: 'textarea',
      required: true,
    },
    {
      name: 'source',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
    afterDelete: [revalidateDelete],
  },
}

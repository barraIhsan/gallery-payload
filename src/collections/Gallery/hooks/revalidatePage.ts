import { Gallery } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

export const revalidatePage: CollectionAfterChangeHook<Gallery> = async ({ doc }) => {
  revalidatePath('/')
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Gallery> = async ({ doc }) => {
  revalidatePath('/')
  return doc
}

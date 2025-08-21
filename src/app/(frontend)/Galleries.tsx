'use client'
import { Gallery, Media } from '@/payload-types'
import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function Galleries({ data }: { data: Gallery[] }) {
  const [popup, setPopup] = useState<Gallery['id']>()
  const currentGallery = data.filter((a) => a.id == popup)[0]

  return (
    <>
      <div className="columns-[300px]">
        {data.map((item) => (
          <Image
            key={item.id}
            src={(item.image as Media).url!}
            alt={(item.image as Media).alt || ''}
            width={(item.image as Media).width || 0}
            height={(item.image as Media).height || 0}
            className="mb-4 cursor-zoom-in"
            onClick={() => setPopup(item.id)}
          />
        ))}
      </div>

      {popup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="w-2xl p-8 pt-4 rounded-xl bg-white drop-shadow-lg relative">
            <div className="flex justify-between mb-4">
              <p className="font-bold text-xl">Gallery Info</p>
              <X className="cursor-pointer text-black" onClick={() => setPopup(undefined)} />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex-1">
                <Image
                  key={currentGallery.id}
                  src={(currentGallery.image as Media).url!}
                  alt={(currentGallery.image as Media).alt || ''}
                  width={(currentGallery.image as Media).width || 0}
                  height={(currentGallery.image as Media).height || 0}
                  className="max-h-96 object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-4xl font-bold">{currentGallery.title}</p>
                <div className="flex gap-2 text-sm text-gray-400 mb-6 mt-2">
                  <p>{new Date(currentGallery.createdAt).toLocaleString()}</p>
                  &bull;
                  <a
                    href={currentGallery.source}
                    target="_blank"
                    className="underline text-blue-600"
                  >
                    Source
                  </a>
                </div>
                <p>{currentGallery.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

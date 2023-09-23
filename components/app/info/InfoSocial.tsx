import { Skeleton } from '@/components/ui/skeleton'
import { IInfo } from '@/utils'
import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandX,
} from '@tabler/icons-react'
import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react'
import { Fragment } from 'react'

type IProps = {
  loading: boolean
  info: IInfo | undefined
}

export default function InfoSocial({ loading, info }: IProps) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1 gap-4'>
          <h2 className='font-semibold text-sm uppercase text-primary'>
            Encuentranos
          </h2>

          <div className='flex items-center'>
            {!loading ? (
              <div className='flex items-center space-x-4'>
                {info?.social.whatsapp && (
                  <a
                    href={`${info?.social.whatsapp}`}
                    className='bg-white text-primary h-10 w-10 flex items-center justify-center rounded-full'
                    target='_blank'>
                    <IconBrandWhatsapp size={22} />
                  </a>
                )}
                {info?.social.instagram && (
                  <a
                    href={`${info?.social.instagram}`}
                    className='bg-white text-primary h-10 w-10 flex items-center justify-center rounded-full'
                    target='_blank'>
                    <IconBrandInstagram size={22} />
                  </a>
                )}
                {info?.social.facebook && (
                  <a
                    href={`${info?.social.facebook}`}
                    className='bg-white text-primary h-10 w-10 flex items-center justify-center rounded-full'
                    target='_blank'>
                    <IconBrandFacebook size={22} />
                  </a>
                )}
                {info?.social.tiktok && (
                  <a
                    href={`${info?.social.tiktok}`}
                    className='bg-white text-primary h-10 w-10 flex items-center justify-center rounded-full'
                    target='_blank'>
                    <IconBrandTiktok size={22} />
                  </a>
                )}
                {info?.social.twitter && (
                  <a
                    href={`${info?.social.twitter}`}
                    className='bg-white text-primary h-10 w-10 flex items-center justify-center rounded-full'
                    target='_blank'>
                    <IconBrandX size={22} />
                  </a>
                )}
              </div>
            ) : (
              <div className='flex items-center space-x-4'>
                {Array.from(new Array(4)).map((_, key) => (
                  <Skeleton key={key} className='h-10 w-10 rounded-full' />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

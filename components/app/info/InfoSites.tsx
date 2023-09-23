import { Skeleton } from '@/components/ui/skeleton'
import { IInfo } from '@/utils'
import { IconExternalLink } from '@tabler/icons-react'

type IProps = {
  loading: boolean
  info: IInfo | undefined
}

export default function InfoSites({ loading, info }: IProps) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1 gap-2'>
          <h2 className='font-semibold text-sm uppercase text-primary'>
            Nuestras sedes
          </h2>
          <div className='flex flex-col divide-y divide-stone-300 bg-white rounded-lg'>
            {!loading
              ? info?.sites.map((site, key) => (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${site.location.latitude},${site.location.longitude}`}
                    key={key}
                    className='text-sm py-3 text-center flex items-center justify-between text-copy px-4'
                    target='_blank'>
                    <span>{site.name}</span>
                    <IconExternalLink size={16} />
                  </a>
                ))
              : Array.from(new Array(3)).map((_, key) => (
                  <Skeleton
                    key={key}
                    className='w-full h-[44px] rounded-none'
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}

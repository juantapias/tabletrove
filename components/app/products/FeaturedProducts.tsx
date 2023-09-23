import { IProduct } from '@/utils'
import Link from 'next/link'
import ArticleFeaturedProduct from './ArticleFeaturedProduct'
import { Skeleton } from '@/components/ui/skeleton'

type IProps = {
  loading: boolean
  restaurant: string
  products: IProduct[] | undefined
}

export default function FeaturedProducts({
  loading,
  restaurant,
  products,
}: IProps) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1 gap-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-semibold text-sm uppercase text-primary'>
              Lo más vendido
            </h2>
            <Link
              href={`/${restaurant}/menu`}
              className='text-xs font-normal text-copy'>
              Ver más
            </Link>
          </div>

          <div className='inline-flex overflow-x-scroll not-scroll'>
            <div className='flex space-x-4'>
              {!loading
                ? products?.map((product, key) => (
                    <ArticleFeaturedProduct key={key} product={product} />
                  ))
                : Array.from(new Array(8)).map((_, key) => (
                    <Skeleton
                      key={key}
                      className='rounded-lg h-[208px] w-[192px]'
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Skeleton } from '@/components/ui/skeleton'
import { ICategory } from '@/utils'
import Link from 'next/link'

type IProps = {
  loading: boolean
  restaurant: string
  categories: ICategory[] | undefined
}

export default function FeaturedCategories({
  loading,
  restaurant,
  categories,
}: IProps) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1 gap-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-semibold text-sm uppercase text-primary'>
              Categorías
            </h2>
            <Link
              href={`${restaurant}/menu/categories`}
              className='text-xs font-normal text-copy'>
              Ver más
            </Link>
          </div>

          <div className='inline-flex overflow-x-scroll not-scroll'>
            <div className='space-x-4 flex'>
              {!loading
                ? categories?.map((category, key) => (
                    <button key={key} className="bg-white text-copy rounded-lg text-sm h-[40px] w-fit whitespace-nowrap px-1 flex items-center justify-center">{category.name}</button>
                  ))
                : Array.from(new Array(5)).map((_, key) => (
                    <Skeleton key={key} className='h-[40px] w-[70px]' />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

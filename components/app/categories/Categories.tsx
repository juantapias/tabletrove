'use client'

import Link from 'next/link'
import ArticleCategory from './ArticleCategory'
import { ICategory } from '@/utils'
import { Dispatch, SetStateAction } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

type IProps = {
  loading: boolean
  restaurant: string
  categories: ICategory[] | undefined
  filterCategory: string | undefined
  setFilterCategory: Dispatch<SetStateAction<string | undefined>>
}

export default function Categories({
  loading,
  restaurant,
  categories,
  filterCategory,
  setFilterCategory,
}: IProps) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1 gap-4'>
          <div className='flex items-center justify-between '>
            <h2 className='font-semibold text-sm uppercase text-primary'>
              Categorías
            </h2>
            <Link
              href={`/${restaurant}/menu/categories`}
              className='text-xs font-normal text-copy'>
              Ver más
            </Link>
          </div>

          <div className='inline-flex overflow-x-scroll not-scroll'>
            <div className='space-x-4 flex'>
              {!loading
                ? categories?.map((category, key) => (
                    <ArticleCategory
                      key={key}
                      category={category}
                      filterCategory={filterCategory}
                      setFilterCategory={setFilterCategory}
                    />
                  ))
                : Array.from(new Array(5)).map((_, index) => (
                    <div key={index} className='space-x-4'>
                      <Skeleton className='h-[90px] w-[90px] rounded-full' />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

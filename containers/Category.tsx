'use client'

import { Fragment } from 'react'
import Header from '@/components/app/base/Header'
import ProductsByCategory from '@/components/app/categories/ProductsByCategory'

import { useProductsByCategory } from '@/hooks/useProductsByCategory'

type IProps = {
  restaurantSlug: string
  category: string
}

export default function Category({ restaurantSlug, category }: IProps) {
  const { data: categories, isFetching } = useProductsByCategory(
    restaurantSlug,
    category
  )
  return (
    <Fragment>
      <Header title={category} goBack />
      <div className='main'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <ProductsByCategory loading={isFetching} category={categories} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

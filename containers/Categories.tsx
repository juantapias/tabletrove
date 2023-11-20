'use client'

import { Fragment } from 'react'
import Header from '@/components/app/base/Header'
import CategoryGroup from '@/components/app/categories/CategoryGroup'
import { useProductsCategories } from '@/hooks/useProductsCategories'

type IProps = {
  restaurantSlug: string
}

export default function Categories({ restaurantSlug }: IProps) {
  const { data: categories, isFetching } = useProductsCategories(restaurantSlug)
  return (
    <Fragment>
      <Header title='Categoría' goBack />
      <div className='main'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <CategoryGroup
              loading={isFetching}
              categories={categories}
              restaurant={restaurantSlug}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

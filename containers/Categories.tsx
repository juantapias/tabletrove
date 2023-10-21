'use client'

import Header from '@/components/app/base/Header'
import CategoryGroup from '@/components/app/categories/CategoryGroup'
import { useProductsCategories } from '@/hooks/useProductsCategories'

type IProps = {
  restaurantSlug: string
}

export default function Categories({ restaurantSlug }: IProps) {
  const { data: categories, isFetching } = useProductsCategories(restaurantSlug)
  return (
    <div className='grid grid-rows-1'>
      <div className='grid grid-cols-1 gap-4'>
        <Header title='Categoría' goBack />
        <CategoryGroup loading={isFetching} categories={categories} />
      </div>
    </div>
  )
}

'use client'

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
    <div className='grid grid-rows-1'>
      <div className='grid grid-cols-1 gap-4'>
        <Header title={category} goBack />
        <ProductsByCategory loading={isFetching} category={categories} />
      </div>
    </div>
  )
}

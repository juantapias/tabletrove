'use client'

import { useState } from 'react'
import Header from '@/components/app/base/Header'
import Categories from '@/components/app/categories/Categories'
import ProductsByCategory from '@/components/app/categories/ProductsByCategory'

import { useProductsCategories } from '@/hooks/useProductsCategories'
import CategoryGroup from '@/components/app/categories/CategoryGroup'

type IProps = {
  restaurantSlug: string
}

export default function Menu({ restaurantSlug }: IProps) {
  const { data: categories, isFetching } = useProductsCategories(restaurantSlug)
  const [filterCategory, setFilterCategory] = useState<string | undefined>('')

  const filterProductByCategory = () => {
    if (filterCategory?.length) {
      return categories?.filter(c => c.name === filterCategory)
    } else {
      return categories?.filter(c => c)
    }
  }

  return (
    <div className='grid grid-rows-1'>
      <div className='grid grid-cols-1 gap-4'>
        <Header title='Menú' />
        <Categories loading={isFetching} categories={categories} filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
        <CategoryGroup loading={isFetching} categories={filterProductByCategory()}  />
      </div>
    </div>
  )
}

'use client'

import { Fragment, useState } from 'react'
import Header from '@/components/app/base/Header'
import SearchForm from '@/components/app/search/SearchForm'
import ResultFilter from '@/components/app/search/ResultFilter'

import { useProducts } from '@/hooks/useProducts'

type IProps = {
  restaurantSlug: string
}

export default function Search({ restaurantSlug }: IProps) {
  const { data: products, isFetching } = useProducts(restaurantSlug)
  const [queryFilter, setQueryFilter] = useState<string>('')

  const searchFilterProducts =
    queryFilter === ''
      ? products
      : products?.filter(product =>
          product?.name
            ?.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .includes(queryFilter.toLowerCase().replace(/[\u0300-\u036f]/g, ''))
        )

  return (
    <div className='grid grid-rows-1'>
      <div className='grid grid-cols-1 gap-4'>
        <Header title='Buscar' />

        <SearchForm setQueryFilter={setQueryFilter} />
        <ResultFilter loading={isFetching} products={searchFilterProducts} />
      </div>
    </div>
  )
}

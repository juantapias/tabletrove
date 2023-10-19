'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import ArticleFeaturedProduct from './ArticleFeaturedProduct'
import SingleArticle from '../shared/SingleArticle'
import { Skeleton } from '@/components/ui/skeleton'

import { IProduct } from '@/utils'

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
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()
  return (
    <div>
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
                      <ArticleFeaturedProduct
                        key={key}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                      />
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

      <SingleArticle
        render={selectedProduct ? true : false}
        product={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  )
}

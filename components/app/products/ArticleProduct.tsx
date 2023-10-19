'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/legacy/image'

import { IconFlame, IconLeaf } from '@tabler/icons-react'
import { IProduct } from '@/utils'

type IProps = {
  product: IProduct | undefined
  setSelectedProduct: Dispatch<SetStateAction<IProduct | undefined>>
}

export default function ArticleProduct({ product, setSelectedProduct }: IProps) {
  const IconRender = () => {
    switch (product?.tag) {
      case 'Picante':
        return <IconFlame size={15} />
      case 'Veggie':
        return <IconLeaf size={15} />
    }
  }

  return (
    <article className='bg-white p-4 rounded-xl flex items-center space-x-4' onClick={() => {setSelectedProduct(product)}}>
      <figure className='w-1/2'>
        <Image
          src={product?.thumbnail?.url || ''}
          alt={product?.name}
          layout='responsive'
          className='rounded-lg min-h-[150px] h-full max-w-full'
          height={80}
          width={100}
        />
      </figure>
      <div className='w-1/2 space-y-2'>
        <div className='flex items-center space-x-2'>
          <h1 className='font-semibold uppercase leading-none -mb-1'>
            {product?.name && product?.name.length > 25
              ? `${product?.name?.substring(0, 25)}...`
              : product?.name}
          </h1>
        </div>
        <div className='max-h-12 transition-all duration-300 ease-in-out text-ellipsis overflow-hidden'>
          <p className='text-xs'>{`${product?.description?.substring(
            0,
            40
          )}...`}</p>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-xl font-semibold leading-none'>
            ${product?.price}
          </p>
          {product?.tag && product?.tag?.length > 0 && (
            <div className='flex items-center space-x-2'>{IconRender()}</div>
          )}
        </div>
      </div>
    </article>
  )
}

import Image from 'next/image'
import { cn, formatPrice } from '@/lib/utils'
import { IProduct } from '@/utils'
import { Dispatch, SetStateAction } from 'react'

type IProp = {
  product: IProduct | undefined
  setSelectedProduct: Dispatch<SetStateAction<IProduct | undefined>>
}

export default function ArticleFeaturedProduct({
  product,
  setSelectedProduct,
}: IProp) {
  return (
    <article
      className={cn(
        true ? 'h-52' : 'h-60',
        ' w-48 bg-white p-4 rounded-xl flex flex-col items-start justify-between'
      )}
      onClick={() => {
        setSelectedProduct(product)
      }}>
      <figure className='w-full flex justify-center'>
        <Image
          src={product?.thumbnail?.url || ''}
          alt={product?.name || ''}
          className='rounded-lg max-w-full'
          height={65}
          width={100}
        />
      </figure>
      <div className='flex flex-col'>
        <h3 className='font-semibold text-sm'>
          {product?.name && product.name.length > 18
            ? `${product.name?.substring(0, 16)}...`
            : product?.name}
        </h3>
        <span className='text-primary text-lg leading-none'>
          ${formatPrice(product?.price)}
        </span>
      </div>
      <button className='w-full text-sm text-white rounded-lg justify-around bg-primary py-1'>
        Agregar
      </button>
    </article>
  )
}

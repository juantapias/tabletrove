'use client'

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

import { useAppStateContext } from '@/context/AppStateContext'
import { IProduct } from '@/utils'
import { IconX } from '@tabler/icons-react'

type IProps = {
  render: boolean
  product: IProduct | undefined
  setSelectedProduct: Dispatch<SetStateAction<IProduct | undefined>>
}

export default function SingleArticle({
  render,
  product,
  setSelectedProduct,
}: IProps) {
  const { addItemCart } = useAppStateContext()
  const ref = useRef<HTMLDivElement>(null)

  const [quantity, setQuantity] = useState<number>(1)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isSticky, setIsSticky] = useState<boolean>(false)

  const styleBannerProduct = {
    backgroundImage: `url('${product?.thumbnail?.url}')`,
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '200px',
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll, { passive: true })
    }
  }, [])

  const handleScroll = () => {
    const scrolled = ref.current && ref.current.scrollTop

    if (scrolled && scrolled >= 150) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  const handleAddToCart = async () => {
    if (product) {
      addItemCart({ ...product, quantity: quantity })
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }
  }
  return (
    <div className={cn(render && 'active z-30', 'render-single overflow-hidden')}>
      <div className='mx-auto'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1'>
            {/* Header */}
            <div
              className={cn(
                isSticky ? 'bg-white top-0' : 'bg-transparent top-3',
                'sticky left-0 w-full px-4'
              )}>
              <div className='flex items-center justify-center'>
                {isSticky && (
                  <h1 className='font-semibold text-xl'>{product?.name}</h1>
                )}
                <button
                  className={cn(
                    !isSticky && 'shadow-md',
                    'flex items-center justify-center ml-auto bg-white rounded-full h-10 w-10'
                  )}
                  onClick={() => {
                    setSelectedProduct(undefined)
                  }}>
                  <IconX size={20} />
                </button>
              </div>
            </div>

            {/* Banner */}
            <div className='-mt-10'>
              <div
                style={styleBannerProduct}
                className='py-2 px-4 rounded-t-3xl'></div>
            </div>

            {/* Content */}
            <div className='mb-20 not-scroll'>
              <div className='grid grid-cols-1 gap-6 p-4'>
                <h1 className='text-xl font-semibold'>{product?.name}</h1>

                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.description || '',
                  }}
                />

                <p className='font-semibold text-2xl text-center'>
                  ${product?.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

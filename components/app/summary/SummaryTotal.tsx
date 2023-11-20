'use client'

import { useState } from 'react'

import { useAppStateContext } from '@/context/AppStateContext'
import { IProduct } from '@/utils'
import { totalPay, whatsAppOrder } from '@/lib/utils'
import { IconLoader2 } from '@tabler/icons-react'
import { useRestaurant } from '@/hooks/useRestaurant'

type IProps = {
  restaurant: string
  products: IProduct[]
}

export default function SummaryTotal({ restaurant, products }: IProps) {
  const { clearCart } = useAppStateContext()

  const { data } = useRestaurant(restaurant)

  const whatsappNumber: string = data?.info.social.whatsapp || ''

  const [order] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleMakeOrder = () => {
    setIsSubmitting(true)
    products.forEach(product => {
      order?.push(`${product.name} x${product.quantity} -> $${product.price}`)
    })

    whatsAppOrder(order, products, whatsappNumber)
    setIsSubmitting(false)
    clearCart()
  }
  return (
    <div className='border-t border-gray-100'>
      <div className='flex items-center justify-between mt-4'>
        <h5>${totalPay(products)}</h5>
        <button
          className='bg-primary text-white px-4 py-2 rounded-lg'
          onClick={handleMakeOrder}>
          {!isSubmitting ? (
            'Ordenar'
          ) : (
            <IconLoader2 className='animate-spin' size={20} />
          )}
        </button>
      </div>
    </div>
  )
}

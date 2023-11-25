import Link from 'next/link'
import { IRestaurant } from '@/utils'

type IProp = {
  restaurantSlug: string
  restaurant: IRestaurant | undefined
}

export default function Confirm({ restaurantSlug, restaurant }: IProp) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-row-1'>
        <div className='grid grid-cols-1 gap-4'>
          <h3 className='text-gray-400 font-semibold text-center'>
            ¡Tu compra ha sido exitosa!
          </h3>
          <p className='text-gray-400 text-center text-sm'>
            ¡Felicidades! Acabas de desbloquear el sabor de la alegría. Tu
            compra con {restaurant?.name} está confirmada
          </p>

          <div className='flex justify-center'>
            <Link
              href={`/${restaurantSlug}`}
              className='bg-primary text-white rounded-lg px-4 py-2 text-base font-semibold'>
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

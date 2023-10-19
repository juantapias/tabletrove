import EmptySearch from '../search/EmptySearch'
import SummaryProducts from './SummaryProducts'
import SummaryTotal from './SummaryTotal'

import { useAppStateContext } from '@/context/AppStateContext'
import { IProduct } from '@/utils'

import { IconTrash } from '@tabler/icons-react'

type IProps = {
  products: IProduct[]
}

export default function SummaryCart({ products }: IProps) {
  const { cart, clearCart } = useAppStateContext()

  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1 gap-4'>
          {cart.length > 0 ? (
            <div className='bg-white rounded-3xl p-4 space-y-5'>
              <div className='flex justify-end'>
                <button onClick={clearCart}>
                  <IconTrash size={20} />
                </button>
              </div>

              <SummaryProducts products={products} />
              <SummaryTotal products={products} />
            </div>
          ) : (
            <EmptySearch
              title='El carrito está vacío'
              description='Agrega a tu carrito los artículos que deseas pedir'
              goHome
            />
          )}
        </div>
      </div>
    </div>
  )
}

'use client'

import { Fragment } from 'react'
import Header from '@/components/app/base/Header'
import SummaryCart from '@/components/app/summary/SummaryCart'

import { useAppStateContext } from '@/context/AppStateContext'

type IProps = {
  restaurantSlug: string
}

export default function Cart({ restaurantSlug }: IProps) {
  const { cart } = useAppStateContext()

  return (
    <Fragment>
      <Header title='Carrito' goBack />
      <div className='main'>
        <SummaryCart restaurant={restaurantSlug} products={cart} />
      </div>
    </Fragment>
  )
}

'use client'

import { Fragment } from 'react'
import Header from '@/components/app/base/Header'
import SummaryCart from '@/components/app/summary/SummaryCart'

import { useAppStateContext } from '@/context/AppStateContext'

export default function Cart() {
  const { cart } = useAppStateContext()
  
  return (
    <Fragment>
      <Header title='Carrito' goBack />
      <SummaryCart products={cart} />
    </Fragment>
  )
}

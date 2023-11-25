'use client'

import { Fragment } from 'react'
import Confirm from '@/components/app/shared/Confirm'
import Header from '@/components/app/base/Header'
import { useRestaurant } from '@/hooks/useRestaurant'

type IProps = {
  restaurantSlug: string
}

export default function Confirmation({ restaurantSlug }: IProps) {
  const { data } = useRestaurant(restaurantSlug)

  return (
    <Fragment>
      <Header title='Confirmación' />
      <div className='main'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <Confirm restaurantSlug={restaurantSlug} restaurant={data} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

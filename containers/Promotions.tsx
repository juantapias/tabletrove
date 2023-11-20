import { Fragment } from 'react'
import Header from '@/components/app/base/Header'

export default function Promotions() {
  return (
    <Fragment>
      <Header title='Promociones' />
      <div className='main'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'></div>
        </div>
      </div>
    </Fragment>
  )
}

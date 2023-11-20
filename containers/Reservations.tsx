import { Fragment } from 'react'
import Header from '@/components/app/base/Header'
import ReservationForm from '@/components/app/reservations/ReservationForm'

export default function Reservations() {
  return (
    <Fragment>
      <Header title='Reservación' />
      <div className='main'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <ReservationForm />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

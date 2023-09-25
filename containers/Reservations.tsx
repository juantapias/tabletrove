import Header from '@/components/app/base/Header'
import ReservationForm from '@/components/app/reservations/ReservationForm'

export default function Reservations() {
  return (
    <div className='grid grid-rows-1'>
      <div className='grid grid-cols-1 gap-4'>
        <Header title='Reservación' />
        <ReservationForm />
      </div>
    </div>
  )
}

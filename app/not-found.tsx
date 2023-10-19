import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='container mx-auto px-4'>
      <div className='h-screen flex flex-col items-center justify-center '>
        <div className='space-y-4 text-center'>
          <h2 className='font-semibold text-lg text-primary'>
            <span className='text-2xl'>¡Oops!</span> <br /> Parece que este plato no está en nuestro menú
          </h2>
          <p>No te preocupes, puedes explorar otros resturantes</p>
          <div className='flex justify-center'>
            <Link
              href='/'
              className='bg-primary text-white rounded-lg px-4 py-2 text-base font-semibold'>
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

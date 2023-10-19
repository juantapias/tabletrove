import Link from 'next/link'

type IProps = {
  title: string
  description?: string
  goHome?: boolean
}
export default function EmptySearch({ title, description, goHome }: IProps) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1 gap-4'>
          <h3 className='text-gray-400 font-semibold text-center'>{title}</h3>
          {description && (
            <p className='text-gray-400 text-center text-sm'>{description}</p>
          )}
          {goHome && (
            <div className='flex justify-center'>
              <Link
                href='/'
                className='bg-primary text-white rounded-lg px-4 py-2 text-base font-semibold'>
                Volver al inicio
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

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
            <Link href='/' className='btn-md mx-auto bg-red-300'>
              Volver al inicio
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

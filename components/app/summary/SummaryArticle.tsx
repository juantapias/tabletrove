import { IProduct } from '@/utils'

type IProps = {
  product: IProduct
}

export default function SummaryArticle({ product }: IProps) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <h1>{product.name}</h1>
        <span className='text-sm text-gray-400'>x{product.quantity}</span>
      </div>
      <span>${product.price}</span>
    </div>
  )
}

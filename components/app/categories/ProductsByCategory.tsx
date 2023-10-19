import { ICategory, IProduct } from '@/utils'
import ArticleProduct from '../products/ArticleProduct'

type IProps = {
  loading: boolean
  category: ICategory | undefined
}

export default function ProductsByCategory({ loading, category }: IProps) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1'>
        {category?.products?.map((product, key) => (
          <ArticleProduct key={key} product={product} />
        ))}
      </div>
    </div>
  )
}

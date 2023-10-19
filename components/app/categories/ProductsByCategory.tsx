import { useState } from 'react'
import ArticleProduct from '../products/ArticleProduct'

import { ICategory, IProduct } from '@/utils'
import SingleArticle from '../shared/SingleArticle'

type IProps = {
  loading: boolean
  category: ICategory | undefined
}

export default function ProductsByCategory({ loading, category }: IProps) {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1'>
        {category?.products?.map((product, key) => (
          <ArticleProduct
            key={key}
            product={product}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>

      <SingleArticle
        render={selectedProduct ? true : false}
        product={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  )
}

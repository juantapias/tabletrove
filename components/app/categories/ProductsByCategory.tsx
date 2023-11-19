import { useState } from 'react'
import ArticleProduct from '../products/ArticleProduct'

import { ICategory, IProduct } from '@/utils'
import SingleArticle from '../shared/SingleArticle'
import SkeletonArticleProduct from '../products/SkeletonArticleProduct'

type IProps = {
  loading: boolean
  category: ICategory | undefined
}

export default function ProductsByCategory({ loading, category }: IProps) {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 gap-4'>
        {!loading
          ? category?.products?.map((product, key) => (
              <ArticleProduct
                key={key}
                product={product}
                setSelectedProduct={setSelectedProduct}
              />
            ))
          : Array.from(new Array(5)).map((_, key) => (
              <SkeletonArticleProduct key={key} />
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

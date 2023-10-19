import { useState } from 'react'
import ArticleProduct from '../products/ArticleProduct'
import SingleArticle from '../shared/SingleArticle'
import SkeletonArticleProduct from '../products/SkeletonArticleProduct'
import EmptySearch from './EmptySearch'

import { IProduct } from '@/utils'

type IProps = {
  loading: boolean
  products: IProduct[] | undefined
}

export default function ResultFilter({ loading, products }: IProps) {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1 gap-4'>
          {!loading ? (
            products?.length ? (
              products.map((product, key) => (
                <ArticleProduct
                  key={key}
                  product={product}
                  setSelectedProduct={setSelectedProduct}
                />
              ))
            ) : (
              <EmptySearch title='No se encuentran resultados relacionados a tu búsqueda' />
            )
          ) : (
            Array.from(new Array(5)).map((_, index) => (
              <SkeletonArticleProduct key={index} />
            ))
          )}
        </div>
      </div>

      <SingleArticle
        render={selectedProduct ? true : false}
        product={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  )
}

'use client'

import { useState } from 'react'
import ArticleProduct from './ArticleProduct'
import SingleArticle from '../shared/SingleArticle'

import { IProduct } from '@/utils'

type IProps = {
  loading: boolean
  products: IProduct[]
}

export default function Products({ loading, products }: IProps) {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()
  
  return (
    <div>
      {products.map((product, key) => (
        <ArticleProduct key={key} product={product} setSelectedProduct={setSelectedProduct} />
      ))}

      <SingleArticle
        render={selectedProduct ? true : false}
        product={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  )
}

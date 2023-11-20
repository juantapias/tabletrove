import SummaryArticle from './SummaryArticle'

import { IProduct } from '@/utils'

type IProps = {
  products: IProduct[]
}

export default function SummaryProducts({ products }: IProps) {
  return (
    <div>
      {products.map((product, key) => (
        <SummaryArticle key={key} product={product} />
      ))}
    </div>
  )
}

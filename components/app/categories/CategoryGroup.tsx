import { ICategory } from '@/utils'
import Products from '../products/Products'

type IProps = {
  loading: boolean
  categories: ICategory[] | undefined
}

export default function CategoryGroup({ loading, categories }: IProps) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 gap-4'>
        {categories?.map(
          (category, key) =>
            category.products.length > 0 && (
              <div key={key}>
                <h3>{category.name}</h3>
                <Products products={category.products} loading={loading} />
              </div>
            )
        )}
      </div>
    </div>
  )
}

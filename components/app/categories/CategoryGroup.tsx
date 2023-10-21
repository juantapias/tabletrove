import { Skeleton } from '@/components/ui/skeleton'
import ArticleCategoryCard from './ArticleCategoryCard'

import { ICategory } from '@/utils'

type IProps = {
  loading: boolean
  categories: ICategory[] | undefined
}

export default function CategoryGroup({ loading, categories }: IProps) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-2 gap-4'>
          {!loading ? (
            categories?.map((category, index) => (
              <ArticleCategoryCard key={index} category={category} />
            ))
          ) : (
            <Skeleton className='rounded-lg h-32 w-full' />
          )}
        </div>
      </div>
    </div>
  )
}

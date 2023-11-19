import Link from 'next/link'

import { ICategory } from '@/utils'

type IProps = {
  restaurant: string
  category: ICategory
}

export default function ArticleCategoryCard({ restaurant, category }: IProps) {
  const styleBackground = {
    backgroundImage: `url("${category?.thumbnail?.url}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }

  return (
    <Link href={`/${restaurant}/menu/category/${category.slug}`}>
      <div
        style={styleBackground}
        className='flex items-center justify-start bg-white rounded-lg h-32 p-4'>
        {category.name}
      </div>
    </Link>
  )
}

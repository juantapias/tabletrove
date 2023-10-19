import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

import { ICategory } from '@/utils'

type IProps = {
  category: ICategory
  filterCategory: string | undefined
  setFilterCategory: Dispatch<SetStateAction<string | undefined>>
}

export default function ArticleCategory({
  category,
  filterCategory,
  setFilterCategory,
}: IProps) {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <button
        className={cn(
          filterCategory === category.name && 'border-2 border-red-400',
          'bg-white flex items-center justify-center rounded-full py-1 px-2 h-[90px] w-[90px]'
        )}
        onClick={() => {
          setFilterCategory(
            filterCategory !== category.name ? category.name : ''
          )
        }}>
        {category.icon ? (
          <Image
            src={category.icon.url}
            alt={category.icon.fileName}
            className='max-w-full object-contain h-10 w-10'
            height={20}
            width={20}
          />
        ) : (
          'icon'
        )}
      </button>
      <span className='text-xs'>{category.name}</span>
    </div>
  )
}

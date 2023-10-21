import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function SkeletonArticleProduct() {
  return (
    <article className='bg-white p-4 rounded-xl flex items-center space-x-4'>
      <figure className='w-1/2'>
        <Skeleton className='min-h-[100px] h-full w-full rounded-lg block' />
      </figure>
      <div className='w-1/2 space-y-2'>
        <Skeleton className='h-[32px] rounded-full' />
        <Skeleton className='h-[18px] rounded-full' />
        <Skeleton className='h-[18px] rounded-full' />
        <Skeleton className='h-[26px] rounded-full w-1/2' />
      </div>
    </article>
  )
}

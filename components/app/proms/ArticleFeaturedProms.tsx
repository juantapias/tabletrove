'use client'

import { Fragment, useState } from 'react'
import SingleArticle from '../shared/SingleArticle'

export default function ArticleFeaturedProms() {
  const [renderSingle, setRenderSingle] = useState<boolean>(false)

  return (
    <Fragment>
      <div className='h-[400px] bg-red-300'>
        <div className='h-full flex items-center justify-center'>
          <h1>Promoción</h1>
        </div>
      </div>
    </Fragment>
  )
}

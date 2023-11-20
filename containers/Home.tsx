'use client'

import { Fragment } from 'react'
import FeaturedProms from '@/components/app/proms/FeaturedProms'
import InfoSites from '@/components/app/info/InfoSites'
import InfoSocial from '@/components/app/info/InfoSocial'

import { useRestaurant } from '@/hooks/useRestaurant'
import FeaturedCategories from '@/components/app/categories/FeaturedCategories'
import FeaturedProducts from '@/components/app/products/FeaturedProducts'
import Header from '@/components/app/base/Header'

type IProps = {
  restaurantSlug: string
}

export default function Home({ restaurantSlug }: IProps) {
  const { data: restaurant, isFetching } = useRestaurant(restaurantSlug)

  return (
    <Fragment>
      <Header title={restaurant?.name} isHome />
      <div className='main'>
        <FeaturedProms loading={isFetching} />
        <div className='content-home space-y-4'>
          <FeaturedCategories
            loading={isFetching}
            restaurant={restaurantSlug}
            categories={restaurant?.categories}
          />
          <FeaturedProducts
            loading={isFetching}
            restaurant={restaurantSlug}
            products={restaurant?.products}
          />
          <InfoSites loading={isFetching} info={restaurant?.info} />
          <InfoSocial loading={isFetching} info={restaurant?.info} />
        </div>
      </div>
    </Fragment>
  )
}

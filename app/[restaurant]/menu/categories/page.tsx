import Categories from '@/containers/Categories'

type IParams = {
  params: {
    restaurant: string
  }
}

export default function page({ params }: IParams) {
  return <Categories restaurantSlug={params.restaurant} />
}

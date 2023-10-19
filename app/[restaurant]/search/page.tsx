import Search from '@/containers/Search'

type IParams = {
  params: {
    restaurant: string
  }
}

export default function page({ params }: IParams) {
  return <Search restaurantSlug={params.restaurant} />
}

import Home from '@/containers/Home'

type IParams = {
  params: {
    restaurant: string
  }
}

export default function page({ params }: IParams) {
  return <Home restaurantSlug={params.restaurant} />
}

import Cart from '@/containers/Cart'

type IParams = {
  params: {
    restaurant: string
  }
}

export default function page({ params }: IParams) {
  return <Cart restaurantSlug={params.restaurant} />
}

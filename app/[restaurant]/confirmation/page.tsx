import Confirmation from '@/containers/Confirmation'

type IParams = {
  params: {
    restaurant: string
  }
}

export default function page({ params }: IParams) {
  return <Confirmation restaurantSlug={params.restaurant} />
}

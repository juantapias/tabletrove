import Menu from '@/containers/Menu';

type IParams = {
  params: {
    restaurant: string
  }
}

export default function page({params}: IParams) {
  return (
    <Menu restaurantSlug={params.restaurant} />
  )
}

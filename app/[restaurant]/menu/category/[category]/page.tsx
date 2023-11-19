import Category from '@/containers/Category'

type IParams = {
  params: {
    category: string
    restaurant: string
  }
}

export default function page({ params }: IParams) {
  return (
    <Category restaurantSlug={params.restaurant} category={params.category} />
  )
}

import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { hygraph } from '@/services/Api'
import { Restaurant } from '@/utils'

const getProductsByRestaurant = gql`
  query restaurant($slug: String!) {
    restaurant(where: { slug: $slug }) {
      name
      slug
      products {
        id
        name
        description
        price
        thumbnail {
          fileName
          url
        }
        tag
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`

export function useProducts(rest: string) {
  const variables = {
    slug: rest,
  }

  const products = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = (await hygraph.request(
        getProductsByRestaurant,
        variables
      )) as Restaurant
      return res.restaurant.products
    },
    cacheTime: 60 * 60 * 1000,
  })

  return products
}

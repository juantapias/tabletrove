import { hygraph } from '@/services/Api'
import { Restaurant } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'

const listProductsCategories = gql`
  query restaurant($slug: String!) {
    restaurant(where: { slug: $slug }) {
      categories {
        id
        name
        slug
        icon {
          fileName
          url
        }
        thumbnail {
          fileName
          url
        }
        products {
          id
          name
          description
          price
          tag
          thumbnail {
            fileName
            url
          }
        }
      }
    }
  }
`

export function useProductsCategories(rest: string) {
  const variables = {
    slug: rest,
  }

  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = (await hygraph.request(
        listProductsCategories,
        variables
      )) as Restaurant
      return res.restaurant.categories
    },
    cacheTime: 60 * 60 * 1000,
  })

  return categories
}

import { hygraph } from '@/services/Api'
import { ICategory, Restaurant } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'

const listProductsCategory = gql`
  query restaurant($slug: String!, $category: String!) {
    restaurant(where: { slug: $slug }) {
      categories(where: { slug: $category }) {
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
      }
    }
  }
`

export function useProductsByCategory(rest: string, category: string) {
  const variables = {
    slug: rest,
    category: category,
  }

  const categoryQuery = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const res = (await hygraph.request(
        listProductsCategory,
        variables
      )) as Restaurant
      return res.restaurant.categories[0]
    },
    cacheTime: 60 * 60 * 1000,
  })

  return categoryQuery
}

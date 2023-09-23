import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { hygraph } from '@/services/Api'
import { Restaurant } from '@/utils'

const getRestaurant = gql`
  query restaurant($slug: String!) {
    restaurant(where: { slug: $slug }) {
      name
      slug
      info {
        social {
          whatsapp
          instagram
          twitter
          tiktok
        }
        sites {
          id
          name
          address
          location {
            latitude
            longitude
          }
        }
      }
      categories {
        id
        name
        slug
        description
        icon {
          fileName
          url
        }
        thumbnail {
          fileName
          url
        }
      }
      products(where: { featured: true }) {
        id
        name
        description
        price
        thumbnail {
          fileName
          url
        }
        tag
      }
      createdAt
      updatedAt
    }
  }
`

export function useRestaurant(rest: string) {
  const variables = {
    slug: rest,
  }

  const restaurant = useQuery({
    queryKey: ['restaurant'],
    queryFn: async () => {
      const res = (await hygraph.request(
        getRestaurant,
        variables
      )) as Restaurant
      return res.restaurant
    },
    cacheTime: 60 * 60 * 1000,
  })

  return restaurant
}

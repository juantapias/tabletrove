import { GraphQLClient } from 'graphql-request'

const API_ENDPOINT = process.env.NEXT_PUBLIC_CONTENT_ENDPOINT as string

export const hygraph = new GraphQLClient(API_ENDPOINT)

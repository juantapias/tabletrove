export interface ISocial {
  facebook: string
  instagram: string
  tiktok: string
  twitter: string
  whatsapp: string
}

export interface ILocation {
  latitude: number
  longitude: number
}

export interface ISite {
  name: string
  address: string
  location: ILocation
}

export interface IInfo {
  social: ISocial
  sites: ISite[]
}

export interface IImage {
  fileName: string
  url: string
}

export interface IProduct {
  id: string
  name: string
  description: string
  price: number
  quantity?: number | undefined
  thumbnail: IImage
  tag?: string
}

export interface ICategory {
  name: string
  slug: string
  description: string
  icon: IImage
  thumbnail: IImage
  products: IProduct[]
}

export interface IProm {
  name: string
  description: string
  thumbnail: IImage
  price: string
  tag?: string
}

export interface Restaurant {
  restaurant: IRestaurant
}

export interface IRestaurant {
  info: IInfo
  categories: ICategory[]
  products: IProduct[]
  promos: IProms[]
}

export interface IBooking {
  name: string
  surname: string
  dni: string
  phone: string
  mail: string
  event: string
  timeEvent: string
  dateEvent: any
  people: string
  request: string
}
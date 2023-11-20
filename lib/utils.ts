import { IProduct } from '@/utils'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number | undefined) => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export const totalPay = (products: IProduct[]) => {
  let total: number = 0

  total =
    total +
    products
      .map(product => Number(product.price || 0) * (product.quantity || 0))
      .reduce((prev, next) => prev + next, 0)

  return total
}

export const whatsAppOrder = (
  order: string[],
  products: IProduct[],
  whatsapp: string
) => {
  const orderStructure = order.toString().replace(',', '\n')

  let head: string = ''
  head += '¡Hola!, Quisiera hacer un pedido %0A'
  head += 'Pedido: %0A'

  const encode = encodeURIComponent(orderStructure)

  let food: string = ''
  food += `%0A%0ATotal a pagar: $${totalPay(products)}`

  let action: string = ''
  const cacheDelivery = localStorage.getItem('deliveryAddress')
  const cachePickup = localStorage.getItem('pickupStore')

  if (cacheDelivery) {
    const parsedData = JSON.parse(cacheDelivery)
    const address = parsedData.delivery.address

    action += '%0A%0ADomicilio: '
    action += encodeURIComponent(address)
  }

  if (cachePickup) {
    const parsedData = JSON.parse(cachePickup)

    const store = parsedData.store.store
    const time = parsedData.store.time

    action += '%0A%0ARecogida: '
    action += `${encodeURIComponent(store)} a las ${encodeURIComponent(time)}`
  }

  window.open(
    `https://wa.me/${whatsapp}?text=${head + encode + food + action}`,
    '_blank'
  )
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number | undefined) => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
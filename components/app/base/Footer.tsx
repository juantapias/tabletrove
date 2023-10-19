'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

import {
  IconHome2,
  IconToolsKitchen2,
  IconTags,
  IconCalendarPlus,
  IconSearch,
} from '@tabler/icons-react'

const menuItem = [
  {
    label: 'Inicio',
    icon: <IconHome2 size={30} />,
    link: '',
  },
  {
    label: 'Menu',
    icon: <IconToolsKitchen2 size={30} />,
    link: 'menu',
  },
  {
    label: 'Buscar',
    icon: <IconSearch size={30} />,
    link: 'search',
  },
  {
    label: 'Promociones',
    icon: <IconTags size={30} />,
    link: 'promotions',
  },
  {
    label: 'Reservas',
    icon: <IconCalendarPlus size={30} />,
    link: 'reservations',
  },
]

export default function Footer() {
  const pathname = usePathname()
  const restaurantPath = pathname.split('/')[1]
  const pagePath = pathname.split('/')[2] ?? ''

  return (
    <div>
      <div className='fixed bottom-0 bg-white rounded-t-3xl px-4 w-full z-50'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-5'>
            {menuItem.map((menu, key) => (
              <Link
                key={key}
                href={`/${restaurantPath}/${menu.link}`}
                className={cn(
                  pagePath === menu.link
                    ? 'text-primary -translate-y-5'
                    : 'text-copy',
                  'flex flex-col items-center justify-center bg-white rounded-full text-xs py-2 transition ease-in-out duration-200 hover:text-primary'
                )}>
                {menu.icon}
                {pagePath === menu.link && menu.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

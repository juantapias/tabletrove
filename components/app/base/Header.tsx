'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { useAppStateContext } from '@/context/AppStateContext'

import { IconBasket, IconChevronLeft } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

type IHeader = {
  goBack?: boolean
  title: string | undefined
  isHome?: boolean
}

export default function Header({ goBack, title, isHome }: IHeader) {
  const router = useRouter()
  const pathname = usePathname()
  const restaurantPath = pathname.split('/')[1]

  const { /*inRestaurant,*/ cart } = useAppStateContext()

  const [stickyMenu, setStickyMenu] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader)
  }, [])

  const stickyHeader = () => {
    if (window.scrollY > 80) {
      setStickyMenu(true)
    } else {
      setStickyMenu(false)
    }
  }

  return (
    <div
      className={cn(
        'w-full z-10 py-2 transition-all duration-150 ease-in-out bg-site fixed'
      )}>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-3'>
            {isHome && !stickyMenu && (
              <div className='col-span-3'>
                <h1 className='text-center'>TableTrove</h1>
              </div>
            )}

            {goBack && (
              <button
                className='flex items-center justify-center bg-white rounded-full h-10 w-10 shadow-md float-right'
                onClick={() => router.back()}>
                <IconChevronLeft size={25} />
              </button>
            )}

            {isHome && (
              <div className='flex items-center col-span-2'>
                <h1>{title}</h1>
              </div>
            )}

            {!isHome && (
              <div className={'flex items-center justify-center col-start-2'}>
                <h1
                  className={cn(
                    // isHome && stickyMenu ? 'visible' : 'invisible',
                    // !isHome && 'visible',
                    'text-center capitalize'
                  )}>
                  {title}
                </h1>
              </div>
            )}

            {/* {!inRestaurant && ( /*}
              <Fragment>
                {cart && (*/}
            <Link
              href={`/${restaurantPath}/cart`}
              className='flex items-center justify-center ml-auto bg-white rounded-full h-10 w-10 shadow-md relative'>
              <span className='absolute right-0 top-0 rounded-full bg-primary text-white text-xs h-4 w-4 flex items-center justify-center'>
                {cart?.length || 0}
              </span>
              <IconBasket size={20} />
            </Link>
            {/* )}
              </Fragment>
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { routesNav } from '@/constants'
import { cn } from '@/lib/utils'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { ChevronDown, MapPin, Menu, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MaxWidth from './MaxWidth'
import ModalLocation from './modal-loc'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <MaxWidth className="pt-4 max-lg:border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-10">
          <div className='flex items-center gap-x-4'>
            <div className="max-lg:block hidden">
              <Menu />
            </div>
            <Image src={'/logo.webp'} alt="Logo" width={45} height={45} />
          </div>

          <ul className="flex items-center max-lg:hidden gap-x-7">
            {routesNav.map((route, i) => {
              const isActive = route.path === pathname
              return (
                <li
                  className="text-black font-normal hover:font-medium transition"
                  key={i}
                >
                  <Link
                    className={cn(isActive && 'font-medium')}
                    href={route.path}
                  >
                    {route.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <div className="max-lg:hidden">
            <ModalLocation
              triggerContent={
                <div className="flex items-center cursor-pointer gap-x-2">
                  <span className="p-2 text-[#51267d] rounded-full bg-[#F1EFF4]">
                    <MapPin width={25} height={25} />
                  </span>
                  <p className="max-w-52 text-xs">
                    Delivery or Takeaway{' '}
                    <span className="text-[#51267d]">
                      Select the type of reception
                    </span>
                  </p>
                </div>
              }
            />
          </div>

          <div className="py-1 max-lg:hidden px-2 cursor-pointer space-x-2 rounded-full flex items-center bg-[#F1EFF4]">
            <Image
              src={'https://maxway.uz/images/uz.svg'}
              alt="lang"
              width={20}
              height={20}
            />
            <ChevronDown width={20} height={20} />
          </div>

          <div className="flex cursor-pointer items-center gap-x-3">
            <span className="py-1 px-2 rounded-full bg-[#F1EFF4] text-[#51267d] ">
              <ShoppingCart width={20} height={20} />
            </span>
            <span>0</span>
          </div>

          <div className="max-lg:hidden">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        </div>
      </div>

      <div className="lg:hidden block mt-5 bg-[#FAFAFA] py-3">
        <ModalLocation
          triggerContent={
            <div className="flex items-center cursor-pointer gap-x-2">
              <MapPin width={20} height={20} />
              <p className="text-sm">
                Delivery or Takeaway{' '}
                <span className="text-[#51267d]">
                  Select the type of reception
                </span>
              </p>
            </div>
          }
        />
      </div>
    </MaxWidth>
  )
}

export default Navbar

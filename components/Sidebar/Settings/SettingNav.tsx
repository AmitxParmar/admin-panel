import React, { type ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

import { Inter } from 'next/font/google'
type Props = {
  children: ReactNode | ReactNode[] | undefined | null
}

const inter = Inter({ subsets: ['latin'] })

const SettingNav = ({ children }: {
  children: React.ReactNode
}) => {

  const router = useRouter();

  return (
    <nav className={`${inter.className} scrollbar-none w-56 px-2 left-0 top-0 bottom-0 text-emphasis bg-muted overflow-x-hidden overflow-y-auto h-screen fixed`}>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault()
            router.back()
          }}
          className="hover:bg-subtle max-w-full [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default text-emphasis group my-6 flex h-6 max-h-6 w-64 flex-row items-center rounded-md py-2 px-3 text-sm font-medium leading-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 stroke-[2px] mr-[10px] rtl:ml-[10px] md:mt-0"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <p title='back' className="max-w-36 min-h-4 truncate">
            Back
          </p>
        </button>
        <div>
          <div className="h-[36px] w-full flex">

            <Avatar className='w-[17px] h-[17px] ml-4 my-auto'>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="my-auto mx-[10px] font-medium leading-5 text-default text-[0.875rem]"
            >
              AMit Parmar
            </span>
          </div>

          <Link
            href={"/settings/my-account/profile"}
            className={`text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default group flex flex-row items-center rounded-md px-3 py-[10px] ml-9 w-auto ltr:mr-5 rtl:ml-5 my-0.5 h-7 false font-inter ${(router.pathname === "/settings/my-account/profile") ? "bg-gray/25" : ""}`}>
            Profile
          </Link>
        </div>
        {children}
      </div>
    </nav>
  )
}

export default SettingNav;
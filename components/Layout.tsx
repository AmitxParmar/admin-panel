import React, { type ReactNode } from 'react'
import Sidebar from './Sidebar/Sidebar'
import SidebarItem from './Sidebar/SidebarItem'
import { home } from '@/utils/contants'
import { Inter } from 'next/font/google'

type Props = {
    children: ReactNode
}
const inter = Inter({ subsets: ['latin'] })

const Layout = (props: Props) => {
    return (
        <>
            <Sidebar>
                {home.map(({ name, href, icon }, index) => (
                    <SidebarItem key={index} icon={icon} name={name} href={href} />
                ))
                }
            </Sidebar>
            <div className={`ml-[225px] ${inter.className} py-4 px-4 md:py-8 lg:px-12`}>
                {props.children ?? null}
            </div>
        </>

    )
}

export default Layout;
import React, { type ReactNode } from 'react'
import Sidebar from './Sidebar/Sidebar'

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
    return (
        <div className='ml-[225px] max-w-full md:py-8 lg:px-12  '>
            {props.children ?? null}
        </div>
    )
}

export default Layout;
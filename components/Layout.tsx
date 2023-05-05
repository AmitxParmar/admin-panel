import React, { type ReactNode } from 'react'
import Sidebar from './Sidebar/Sidebar'

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
    return (
        <>
            <div className='absolute ml-[225px] p-6'>{props.children ?? null}</div>
        </>
    )
}

export default Layout;
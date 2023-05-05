import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    href: string;
    name: string;
    icon: string;
}

const SidebarItem = (props: Props) => {
    return (
        <Link href={props.href}>
            <button
                className="w-full py-2 px-3  mt-0.5 hover:bg-emphasis group text-[14px] justify-start flex h-fit rounded-md text-emphasis"
            >
                <Image height={25} width={25} alt={props.name} src={props.icon}
                    className="w-[25px] mr-2 my-auto  h-[25px] p-1"
                />
                <span className="font-semibold justify-between lg:flex leading-5 text-emphasis text-[0.875rem] my-auto">{props.name}
                </span>
            </button>
        </Link>

    )
}

export default SidebarItem;
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
        <Link
            href={props.href}
        >
            <button
                className="w-[177px] my-1 mx-auto hover:bg-[#2b2b2b] text-[14px] focus:bg flex h-[36px] rounded-md text-gray"
            >
                <Image height={25} width={25} alt={props.name} src={props.icon}
                    className="w-[25px] mx-2 my-auto invert h-[25px] p-1"
                />
                <span className="font-semibold text-gray text-[0.875rem] my-auto">{props.name}
                </span>
            </button>
        </Link>
    )
}

export default SidebarItem;
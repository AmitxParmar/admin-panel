import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

interface NavItem {
    icon: string
    name: string
    subItem: {
        href: string
        name: string
    }[]
}
const SettingsSidebarItem: React.FC<NavItem> = ({ icon, name, subItem }) => {

    const router = useRouter();
    return (
        <div className=''>
            <div className="h-[36px] w-full flex">
                <Image
                    alt={name}
                    height={25}
                    width={25}
                    src={icon}
                    className="svg_icon rounded-full w-[17px]  h-[17px] ml-[14px] my-auto"
                />
                <span
                    className="my-auto mx-[10px] leading-5 text-emphasis text-sm font-medium"
                >
                    {name}
                </span>
            </div>

            {
                subItem?.map((item, index) =>
                (
                    <Link
                        key={index}
                        href={item.href}
                        className={`text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default group flex flex-row items-center rounded-md px-3 py-[10px] ml-9 w-auto ltr:mr-5 rtl:ml-5 my-0.5 h-7 false font-inter ${(router.pathname === item.href) ? "bg-gray/25" : ""}`}>
                        {item.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default SettingsSidebarItem
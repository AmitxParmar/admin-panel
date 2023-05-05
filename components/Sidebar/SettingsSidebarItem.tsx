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
        <div
            className="w-[225px] font-[500] pt-[28px] bg-[#1c1c1c] overflow-x-hidden overflow-y-auto no-scrollbar h-screen fixed">
            <div className="h-[36px] w-full flex">
                <Image
                    alt={name}
                    height={25}
                    width={25}
                    src={icon}
                    className="rounded-full w-[17px] h-[17px] ml-[14px] my-auto"
                />
                <span
                    className="my-auto mx-[10px] leading-5 text-gray text-[0.875rem]"
                >
                    {name}
                </span>
            </div>

            {subItem?.map((item, index) =>
            (<Link key={index} href="/profile/:id"
                className={`font-[500] leading-5 flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto hover:bg-black/25 rounded-md my-1 ${(router.pathname === "/settings/my-profile/profile") ? "bg-black/25" : ""}`}>
                {item.name}
            </Link>))}

        </div>
    )
}

export default SettingsSidebarItem
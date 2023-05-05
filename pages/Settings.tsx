import React from 'react'
import { useRouter } from 'next/router'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BiLeftArrowAlt } from 'react-icons/bi'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar/Sidebar'
import { settings } from '@/utils/contants'
import SettingsSidebarItem from '@/components/Sidebar/SettingsSidebarItem'
import Link from 'next/link'
type Props = {}

const Settings = (props: Props) => {

    const router = useRouter();

    return (
        <>

            <div className='text-gray text-4xl bg-red-300'>
                <Sidebar>
                    <>
                        <div>
                            <div className="h-[36px] w-full flex">
                                {/* <Image
                                    alt="avatar"
                                    src="https://app.cal.com/teenfounders/avatar.png"
                                    className="rounded-full w-[17px] h-[17px] ml-[14px] my-auto"
                                /> */}
                                <Avatar className='w-[17px] h-[17px] ml-4 my-auto'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="my-auto mx-[10px] leading-5 text-gray font-medium text-[0.875rem]"
                                >Amit Parmar</span>
                            </div>

                            <Link
                                href={"/profile/:id"}
                                className={`font-medium leading-5 flex px-[11px] text-[0.875rem] ml-9 pt-[4px] justify-start h-[32px] w-[158px] mx-auto hover:bg-black/25 rounded-md my-1${(router.pathname === "/settings/my-profile/profile") ? "bg-[#E5E7EB]" : ""}`}>
                                Profile
                            </Link>

                        </div>
                        {settings.map(({ name, icon, subItem }, index) => (
                            <SettingsSidebarItem key={index} name={name} icon={icon} subItem={subItem} />
                        ))}
                    </>
                </Sidebar >

            </div >
        </>


    )
}

export default Settings

{/* <div
className="left-0 w-[225px] font-[500] pt-[28px] bg-[#1c1c1c] overflow-x-hidden text-white overflow-y-auto no-scrollbar h-screen fixed">
<div>
    <button
        onClick={() => {
            router.back()
        }}
        className="w-full mb-[26px] h-[24px] flex px-[24px] my-auto text-[0.875rem] hover:bg-black/25">
        <BiLeftArrowAlt
            className="my-auto"
            fontSize={20}
        />
        <span className="mx-1 my-auto">Back</span>
    </button>

    <div className="h-[36px] w-full flex">
         <img
            src="https://app.cal.com/teenfounders/avatar.png"
            className="rounded-full w-[17px] h-[17px] ml-[14px] my-auto"
        /> 
        <Avatar className='w-[17px] h-[17px] ml-4 my-auto'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="my-auto mx-[10px] leading-5 text-gray text-[0.875rem]"
        >Amit Parmar</span>
    </div>

    <button
        onClick={() => {
            router.push("/settings/my-profile/profile")
        }}
        className={`font-[500] leading-5 flex px-[11px] text-[0.875rem] items-center justify-start h-[32px] w-[158px] mx-auto hover:bg-black/25 rounded-md my-1 ${(router.pathname === "/settings/my-profile/profile") ? "bg-[#E5E7EB]" : ""}`}>
        Profile
    </button>
   </div >
</div> */}
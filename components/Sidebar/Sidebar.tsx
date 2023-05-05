import React, { type ReactNode } from 'react'
import { useRouter } from 'next/router'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { Skeleton } from '../ui/skeleton';
import Image from 'next/image';
import Logo from './Logo';

type Props = {
    children: ReactNode;
    isLoading?: boolean;
}

const Sidebar = (props: Props) => {
    const router = useRouter();

    return (
        <aside
            className={`w-[225px] left-0 top-0 bottom-0 pt-[28px] text-gray bg-[#1c1c1c] overflow-x-hidden overflow-y-auto px-4 h-screen fixed`}>
            {props.isLoading ? (
                <Skeleton className='rounded-full w-full h-10' />
            ) : (
                router.pathname === "/" ? (
                    <Logo />
                ) : (
                    <button
                        onClick={() => {
                            router.back()
                        }}
                        className="w-full mb-[26px] h-[24px] flex px-[24px] my-auto items-center justify-start text-[0.875rem] text-gray hover:bg-black/25">
                        <BiLeftArrowAlt
                            className="my-auto"
                            fontSize={20}
                        />
                        <span className="mx-6 font-semibold">
                            Back
                        </span>
                    </button>)
            )}
            <div className='p-4'>
                {props.children ?? null}
            </div>
        </aside >
    )
}

export default Sidebar;
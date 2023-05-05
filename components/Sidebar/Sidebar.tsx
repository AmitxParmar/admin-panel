import React, { type ReactNode } from 'react'
import { useRouter } from 'next/router'
import { BiLeftArrowAlt } from 'react-icons/bi'

import { Skeleton } from '../ui/skeleton';
import Logo from './Logo';

type Props = {
    children: ReactNode;
    isLoading?: boolean;
}

const Sidebar = (props: Props) => {
    const router = useRouter();

    return (
        <aside
            className={`w-56 px-4 left-0 top-0 bottom-0 text-emphasis bg-subtle overflow-x-hidden overflow-y-auto h-screen fixed`}>
            <div className='h-full flex-col justify-between py-3 lg:pt-6'>
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
                            className="w-full mb-[26px] h-[24px] flex px-[24px] my-auto items-center rounded-md justify-start text-[0.875rem] text-emphasis hover:bg-subtle">
                            <BiLeftArrowAlt
                                className="my-auto"
                                fontSize={20}
                            />
                            <span className="mx-6 font-semibold">
                                Back
                            </span>
                        </button>)
                )}
                <div className=''>
                    {props.children ?? null}
                </div>
            </div>
        </aside >
    )
}

export default Sidebar;
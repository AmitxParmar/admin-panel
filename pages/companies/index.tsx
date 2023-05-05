import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import Sidebar from '@/components/Sidebar/Sidebar'
import { Button } from '@/components/ui/button';

const Table = dynamic(() => import('@/components/Table'), {
    ssr: false
});

const Companies: React.FC = () => {

    const headings = ["company", "Designation", "Experience"];
    const content = [
        {
            company: "CARS24",
            designation: "UI/UX Designer",
            experience: "1-3 yrs",
        },
        {
            company: "CARS24",
            designation: "UI/UX Designer",
            experience: "1-3 yrs",
        },
        {
            company: "CARS24",
            designation: "UI/UX Designer",
            experience: "1-3 yrs",
        },
        {
            company: "CARS24",
            designation: "UI/UX Designer",
            experience: "1-3 yrs",
        },
    ];


    return (
        <>
            <Sidebar>
                <>{""}</>
            </Sidebar>
            <Link href="/companies/create" >
                <Button className='mb-12'>Create</Button>
            </Link>
            <Table data={content} headings={headings} />
        </>
    )
}

export default Companies; 
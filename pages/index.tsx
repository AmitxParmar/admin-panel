import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

import Sidebar from '@/components/Sidebar/Sidebar'
import { home } from '@/utils/contants'
import SidebarItem from '@/components/Sidebar/SidebarItem'

const inter = Inter({ subsets: ['latin'] })
const Table = dynamic(() => import('@/components/Table'), {
  ssr: false
});

export default function Home() {
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
    <main
      className={`${inter.className} `}>

      <Sidebar>
        {
          home.map(({ href, name, icon }, index) => (
            <SidebarItem
              key={index}
              href={href}
              name={name}
              icon={icon}
            />
          ))
        }
      </Sidebar>
      <div className='bg-white h-screen text-black'>
        <h1 className='text-black mx-auto text-center border-b border-black/25  font-bold'>Top Companies</h1>
        <Table data={content} headings={headings} />
      </div>
    </main>
  )
}

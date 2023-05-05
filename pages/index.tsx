import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

import Sidebar from '@/components/Sidebar/Sidebar'
import { home } from '@/utils/contants'
import SidebarItem from '@/components/Sidebar/SidebarItem'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'

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
      className={`text-default max-w-full bg-defaultBgBg h-full w-screen ${inter.className} `}>

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
      <div className='bg-defaultBg h-full text-default'>
        <div className='flex items-center md:mb-6 md:mt-0 lg:mb-8 mb-0'>
          <header className='flex w-full max-w-full items-center truncate'>
            <div className='w-full truncate ltr:mr-4 rtl:ml-4 md:block'>
              <h3 className='font-cal max-w-28 sm:max-w-72 md:max-w-80 text-emphasis truncate font-semibold tracking-wide sm:text-xl md:block xl:max-w-full text-xl hidden'>Event Types</h3>
              <p className='text-default hidden text-sm md:block'>
                Create events to share for people to book on your calendar.
              </p>
            </div>

            <Button className='inline-flex items-center text-sm font-medium relative rounded-full justify-center md:rounded-md transition-transform  radix-state-open:ring-0 !shadow-none px-4 py-2.5 bg-brand-default hover:bg-brand-emphasis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-default text-brand h-14 md:h-9 md:w-auto md:px-4 md:py-2.5'>
              <div className='max-h-fit items-center flex flex-row justify-center '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="hidden h-4 w-4 stroke-[1.5px] ltr:mr-2 ltr:-ml-1 rtl:-mr-1 rtl:ml-2 md:inline-flex"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

                <span className='ml-1 font-medium items-center justify-center  relative hidden md:inline'>
                  New
                </span>
              </div>
            </Button>
          </header>
        </div>
        <div className=''>
          <div className='bg-defaultBg border-subtle mb-16 flex overflow-hidden rounded-md border'>
            <ul className='divide-subtle !static w-full divide-y'>
              <Card className="bg-defaultBg group flex w-full max-w-full items-center justify-center overflow-hidden border p-4 sm:px-6  text-emphasis border-gray">
                <Link href={"/event"} className='flex-1 overflow-hidden pr-4 text-sm'>
                  <div className=''>
                    <span className='text-emphasis mr-4 font-semibold ltr:mr-1 rtl:ml-1'>15 Min Meeting</span>
                    <small className='text-emphasis hidden font-normal leading-4 sm:inline'>/amitxparmar/15min</small>
                  </div>
                  <div className='text-emphasis'>
                    <ul className='mt-2 flex flex-wrap gap-x-2 gap-y-2'>
                      <li>
                        <div className="font-medium inline-flex items-center justify-center rounded gap-x-1 bg-subtle text-emphasis py-1 px-1.5 text-xs leading-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="h-3 w-3 stroke-[3px]"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                          15m
                        </div>
                      </li>
                    </ul>
                  </div>
                </Link>
                <div className="mt-4 hidden sm:mt-0 sm:flex">
                  <div className="flex justify-between space-x-2 rtl:space-x-reverse">
                    <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                      <div className="font-medium inline-flex items-center justify-center rounded gap-x-1 bg-subtle text-emphasis py-1 px-1.5 text-xs leading-3">
                        Hidden
                      </div>
                      <div className="self-center rounded-md p-2" data-state="closed">
                        <div className="flex h-auto w-auto flex-row items-center">
                          <Switch />
                        </div></div>
                      <div className="flex [&amp;_a]:rounded-none ltr:[&amp;>*:first-child]:ml-0 ltr:[&amp;>*:first-child]:rounded-l-md ltr:[&amp;>*:first-child]:border-l rtl:[&amp;>*:first-child]:rounded-r-md rtl:[&amp;>*:first-child]:border-r ltr:[&amp;>*:last-child]:rounded-r-md rtl:[&amp;>*:last-child]:rounded-l-md [&amp;_button]:rounded-none [&amp;>a]:-ml-[1px] hover:[&amp;>a]:z-[1] [&amp;>button]:-ml-[1px] hover:[&amp;>button]:z-[1]">
                        <Link data-testid="preview-link-button" target="_blank" href="https://cal.com/amitxparmar/15min" data-state="closed" className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-defaultBg hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis min-h-[36px] min-w-[36px] !p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="h-4 w-4">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></Link>

                        <button data-state="closed" type="button" className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-defaultbg hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis min-h-[36px] min-w-[36px] !p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="h-4 w-4 ">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                        </button>
                        <button className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-defaultbg hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis min-h-[36px] min-w-[36px] !p-2 ltr:radix-state-open:rounded-r-md rtl:radix-state-open:rounded-l-md" id="radix-:rg:" aria-haspopup="menu" data-state="closed" data-testid="event-type-options-272238" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button></div></div></div></div>
              </Card>
            </ul>

          </div>
        </div>
      </div>
    </main>
  )
}

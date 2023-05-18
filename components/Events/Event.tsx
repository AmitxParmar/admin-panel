import React from 'react'
import Link from 'next/link'
import { Switch } from '../ui/switch'
type Props = {}

const Event = (props: Props) => {
  return (
    <li><div className="hover:bg-muted flex w-full items-center justify-between">
      <div className="group flex w-full max-w-full items-center justify-between overflow-hidden px-4 py-4 sm:px-6">
        <button className="bg-default text-muted border-default hover:text-emphasis hover:border-emphasis invisible absolute left-[5px] mt-8 -ml-4 hidden h-6 w-6  scale-0 items-center justify-center rounded-md border p-1 transition-all  group-hover:visible group-hover:scale-100 sm:ml-0 sm:flex lg:left-[36px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
            <line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
        </button>
        <Link className="flex-1 overflow-hidden pr-4 text-sm" title="15 Min Meeting" href="/event-types/272238?tabName=setup">
          <div>
            <span className="text-default font-semibold ltr:mr-1 rtl:ml-1" data-testid="event-type-title-272238">15 Min Meeting</span>
            <small className="text-subtle hidden font-normal leading-4 sm:inline" data-testid="event-type-slug-272238">/amitxparmar/15min</small></div>
          <div className="text-subtle">
            <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <div className="font-medium inline-flex items-center justify-center rounded gap-x-1 bg-subtle text-emphasis py-1 px-1.5 text-xs leading-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-3 w-3 stroke-[3px]"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  15m</div>
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
              <Switch />
              <div className="flex [&amp;_a]:rounded-none ltr:[&amp;>*:first-child]:ml-0 ltr:[&amp;>*:first-child]:rounded-l-md ltr:[&amp;>*:first-child]:border-l rtl:[&amp;>*:first-child]:rounded-r-md rtl:[&amp;>*:first-child]:border-r ltr:[&amp;>*:last-child]:rounded-r-md rtl:[&amp;>*:last-child]:rounded-l-md [&amp;_button]:rounded-none [&amp;>a]:-ml-[1px] hover:[&amp;>a]:z-[1] [&amp;>button]:-ml-[1px] hover:[&amp;>button]:z-[1]">
                <Link data-testid="preview-link-button" target="_blank" href="https://cal.com/amitxparmar/15min" data-state="closed" className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-default hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emphasis min-h-[36px] min-w-[36px] !p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </Link>
                <button data-state="closed" type="button" className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-default hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emphasis min-h-[36px] min-w-[36px] !p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                </button>
                <button className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-default hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emphasis min-h-[36px] min-w-[36px] !p-2 ltr:radix-state-open:rounded-r-md rtl:radix-state-open:rounded-l-md" id="radix-:rh:" aria-haspopup="menu" data-state="closed" data-testid="event-type-options-272238" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-9 mx-5 flex sm:hidden">
        <button id="radix-:rj:" aria-haspopup="menu" data-state="closed" data-testid="event-type-options-272238" className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-default hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis min-h-[36px] min-w-[36px] !p-2" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
        </button>
      </div>
    </div>
    </li>
  )
}

export default Event
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AppHeader () {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      // body.style.position = "fix"
    }
  }, [open])

  const navigation = [
    { name: 'Rick & Morty API Integration', href: '/rick-and-morty', current: true },
    { name: 'Contact', href: '/contact', current: false },
  ]

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-8 py-4 border-b">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a>
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>

                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <a className={ 'font-medium text-gray-500 hover:text-gray-900' }>
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"> Log in </a>
            </span>
          </div>
        </nav>
      </div>

      <div className={[
        open ? 'opacity-100' : 'opacity-0 pointer-events-none',
        'absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
      ].join(' ')}>
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <a className={'block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'}>
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"> Log in </a>
        </div>
      </div>
    </>
  )
}

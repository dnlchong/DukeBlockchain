/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Team', href: '/team' },
  { name: 'Initiatives', href: '/initiatives' },
  { name: 'Fund', href: '/fund' },
  { name: 'Course', href: '/course' },
]

export default function Example() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      

      <div className="relative pt-6 pb-16 sm:pb-24">
        

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome to</span>{" "}
              <span className="block xl:inline">Duke Blockchain Lab</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              DBL is the best way to get involved in blockchain and crypto at Duke. Join our fund, take our classes, and find jobs/internships through the DBL network.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="https://forms.gle/dKTeFd7QiFiZ56Uu6"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

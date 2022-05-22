import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  RiAtLine,
  RiBarChartLine,
  RiBubbleChartLine,
  RiMoreFill,
  RiCloseLine,
} from 'react-icons/ri'

export interface IAppProps {
  className?: string
}

const NavigationBar = ({ className }: IAppProps) => {
  const Links = [
    {
      title: 'Link 1',
      path: '/',
      icon: RiAtLine,
      description: 'Lorem ipsum dolor sit',
    },
    {
      title: 'Link 2',
      path: '/',
      icon: RiBarChartLine,
      description: 'Nullam consectetur risus vel',
    },
    {
      title: 'Link 3',
      path: '/',
      icon: RiBubbleChartLine,
      description: 'Nunc tellus neque mattis',
    },
  ]

  return (
    <nav className={` ${className}`}>
      <div className="layout sticky top-0 z-10">
        <div className="mx-auto">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="text-2xl font-black">
              Simple Nav
            </a>
            <ul className="hidden space-x-4 md:flex">
              {Links.map((nav) => (
                <li key={nav.title}>
                  <a href={nav.path}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <Popover className="md:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                  group inline-flex items-center rounded-full bg-white p-2 hover:text-opacity-100 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 md:hidden`}
                  >
                    {open ? (
                      <RiCloseLine className="animate-fade-in text-2xl" />
                    ) : (
                      <RiMoreFill className="animate-fade-in text-2xl" />
                    )}
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0 translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-2"
                  >
                    <Popover.Panel className="absolute right-0 z-10 max-w-xs pt-2">
                      <div className="overflow-hidden rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7">
                          {Links.map((nav) => (
                            <a
                              key={nav.title}
                              href={nav.path}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className="justify-cente flex h-10 w-10 shrink-0 items-center sm:h-12 sm:w-12">
                                <nav.icon
                                  aria-hidden="true"
                                  className="text-4xl text-black"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium">
                                  {nav.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {nav.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-4">
                          <a
                            href="##"
                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span className="flex items-center">
                              <span className="text-sm font-medium text-gray-900">
                                Documentation
                              </span>
                            </span>
                            <span className="block text-sm text-gray-500">
                              Aliquam faucibus ultrices sem, et elementum sem
                              vestibulum eu.
                            </span>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar

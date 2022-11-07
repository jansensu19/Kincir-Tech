import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/img/logo.png";

const navigation = [
  { name: "About", href: "#" },
  { name: "Service", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Career", href: "#" },
];

export default function nav() {
  return (

        <div className="sticky top-0 z-50 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-8xl lg:pb-28 xl:pb-20">
          <Popover>
          <div className="relative px-4 pt-6 pb-4 sm:px-6 lg:px-8 border-b-4 border-black">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-center"
                aria-label="Global"
              >

                {/* mobile menu option */}
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    
                    {/* logo */}
                    <a href="#">
                      <span className="sr-only">Kincir Tech</span>
                      <img
                        alt="Your Company"
                        className="h-10 w-auto sm:h-26"
                        src={logo}
                      />
                    </a>
                    {/* logo */}

                    {/* mobile menu option placement and hidden */}
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                
                {/* nav text and nav mobile text */}
                <div className="hidden md:ml-40 md:block md:space-x-20 md:pr-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-xl text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-12 py-4  border rounded-full"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-12 py-4  border rounded-full"
                  >
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
                {/* mobile menu panel combine and background */}
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-10 w-auto"
                        src={logo}
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>

                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                  >
                    Contact us
                  </a>
                  <a
                    href="#"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>

  );
}

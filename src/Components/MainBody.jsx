/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SingUp from "../Pages/SingUp";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Browse", href: "/browse" },
  { name: "Updates", href: "/updates" },
  { name: "Pricing", href: "/pricing" },
];

function MainBody({ children }) {
  return (
    <>
      <div className="bg-cyan-900 relative ">
        <div className="absolute bg-cyan-900 clip-path h-[140px] w-20 -left-[98px]">
          hello
        </div>
        <div>
          <Disclosure as="nav" className="shadow-md">
            {({ open }) => (
              <>
                <div className="">
                  <div className="  max-md:h-16 py-10 px-4 items-center justify-between">
                    <div className="absolute inset-y-0 left-5 mt-3  sm:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>

                    <div className="absolute mr-5 inset-y-0 right-0 flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      {/* Profile dropdown */}
                      <div className="hidden sm:ml-6 sm:block ">
                        <div className=" space-x-4 max-w-4xl">
                          {navigation.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.href}
                              className={({ isActive }) => {
                                return (
                                  " px-3 text-lg font-medium" +
                                  (!isActive
                                    ? " after:content-[' '] after:bg-black after:m-auto  after:w-0 after:h-[2px] after:ease-in after:duration-300 after:hover:w-full cursor-pointer"
                                    : "cursor-pointer border-b-2 border-black")
                                );
                              }}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                      <div className=" ">
                        <SingUp />
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) => {
                          return (
                            "block rounded-md px-3 py-2 text-base font-medium" +
                            (!isActive
                              ? " no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                              : " no-underline bg-gray-800 text-white")
                          );
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="bg-gray-800 max-w-3xl text-white">{children}</div>
      </div>
    </>
  );
}

export default MainBody;

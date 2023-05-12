import React from "react";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Browse", href: "/browse" },
  { name: "Updates", href: "/updates" },
  { name: "Pricing", href: "/pricing" },
  { name: "Sing Up", href: "/singup" },
];

function MainBody(props) {
  return (
    <div className="">
      <div>
        <Disclosure as="nav" className="shadow-md">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                <div className=" flex max-md:h-16 h-24 items-center justify-between">
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

                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center gap-2">
                      <h1 className="hidden md:block ">MD.MIRAJUL ISLAM</h1>
                    </div>
                  </div>

                  <div className="absolute mr-5 inset-y-0 right-0 flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) => {
                              return (
                                "rounded-sm px-4 py-1 text-lg font-medium" +
                                (!isActive
                                  ? "  text-gray-300 hover:bg-gray-700 hover:text-white"
                                  : " bg-gray-500 text-white")
                              );
                            }}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
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

      <div className="bg-gray-800 text-white">{props.children}</div>
    </div>
  );
}

export default MainBody;

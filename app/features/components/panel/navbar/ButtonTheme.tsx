import { Menu, Transition } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

const userNavigation = [
  { name: "Light", href: "#" },
  { name: "Dark", href: "#" },
];

export default function ButtonTheme() {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex max-w-xs items-center rounded-md border bg-white p-1 text-sm focus:outline-none">
          <span className="sr-only">Open user menu</span>
          <SunIcon className="h-5 w-5 text-blue-300" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="p-2 text-sm absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item as="div" className="rounded p-1 hover:bg-gray-100 transition ease-out duration-200" key={item.name}>
              {({ active }) => (
                <button className="flex flex-row justify-center items-center space-x-3">
                  <div className="rounded-md border bg-white p-1 ">
                    <SunIcon className="h-5 w-5"  />
                  </div>
                  <span>{item.name}</span>
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

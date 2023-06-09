import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

export default function () {
  return (
    <div className="h-full flex justify-center items-center">
      <Menu as="div" className="relative inline-block text-left ">
        <Menu.Button className="inline-flex w-full justify-between items-center text-gray-500 hover:text-gray-700 transition ease-out duration-100">
          Sistema
          <ChevronDownIcon className="ml-3 h-3 w-3 " />
        </Menu.Button>

        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {links.map((link) => (
            <Menu.Item key={link.href} as={Fragment}>
              {({ active }) => (
                <a
                  href={link.href}
                  className={`${
                    active ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`}
                >
                  {link.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}

import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { User, Settings, BookMarked, LogOut } from "lucide-react";

const ProfileDropdown = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg">
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User avatar"
        />
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-900">John Doe</p>
          <p className="text-xs text-gray-500">john@example.com</p>
        </div>
      </Menu.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? "bg-gray-50" : ""
                    } group flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-900`}
                >
                  <User className="mr-3 h-5 w-5 text-gray-400" />
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? "bg-gray-50" : ""
                    } group flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-900`}
                >
                  <BookMarked className="mr-3 h-5 w-5 text-gray-400" />
                  Saved Articles
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? "bg-gray-50" : ""
                    } group flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-900`}
                >
                  <Settings className="mr-3 h-5 w-5 text-gray-400" />
                  Settings
                </button>
              )}
            </Menu.Item>
            <div className="my-2 border-t border-gray-100"></div>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? "bg-gray-50" : ""
                    } group flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600`}
                >
                  <LogOut className="mr-3 h-5 w-5 text-red-400" />
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropdown;

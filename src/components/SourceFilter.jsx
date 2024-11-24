import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const SourceFilter = ({
  source, sources,
  onSourceChange,
}) => {

  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg border border-gray-300 text-gray-700 text-nowrap">
        {source.name}
        <ChevronDown className="mt-1 ms-1 w-5" />
      </MenuButton>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className="relative z-10"
      >
        <MenuItems style={{
          position: 'absolute'
        }} className="absolute -left-10 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2">
            {sources.map(({ id, name }) => (
              <MenuItem key={id}>
                {({ active }) => (
                  <button
                    onClick={() => onSourceChange({
                      name: name,
                      id: id
                    })}
                    className={`${active ? "bg-gray-50" : ""
                      } hover:bg-blue-600 hover:text-white flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-900`}
                  >
                    {name}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default SourceFilter;

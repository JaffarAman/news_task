import React, { useState } from "react";
import { Home, TrendingUp, Users, Bookmark, Settings } from "lucide-react";

const Sidebar = ({ isOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", active: true },
    { icon: TrendingUp, label: "Trending" },
    { icon: Users, label: "Following" },
    { icon: Bookmark, label: "Saved" },
    { icon: Settings, label: "Settings" },
  ];

  const sidebarWidth = isHovered ? "w-64" : "lg:w-16 w-64";
  const displayState = isOpen
    ? "translate-x-0"
    : "-translate-x-full lg:translate-x-0";

  return (
    <aside
      className={`fixed left-0 top-16 h-full bg-white border-r border-gray-200 overflow-y-auto 
        transition-all duration-300 ease-in-out ${sidebarWidth} ${displayState} z-40`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="mt-5 px-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`group flex items-center px-2 py-3 text-base font-medium rounded-lg mb-1
              transition-colors duration-200 ${item.active
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
          >
            <div className="flex items-center justify-center min-w-[2rem]">
              <item.icon
                className={`h-6 w-6 transition-colors duration-200 ${item.active
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-500"
                  }`}
              />
            </div>
            <span
              className={`ml-3 transition-opacity duration-300 ${isHovered
                  ? "opacity-100"
                  : "lg:opacity-0 opacity-100 lg:inline-block"
                }`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Bottom section with user info - visible only when expanded */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white
          transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
            className="h-8 w-8 rounded-full"
          />
          <div
            className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

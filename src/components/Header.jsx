import { useState, useCallback } from "react";
import { Search, Menu as MenuIcon, X } from "lucide-react";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import { debounce } from "../utils/debounce.js";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/reducers/filterSlice.js";
import { fetchNewsThunk } from "../redux/reducers/actions/fetchNews.js";
import toast from "react-hot-toast";

const Header = ({
  toggleSidebar,
  isSidebarOpen,
}) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("");

  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(setSearchQuery(query))
      dispatch(fetchNewsThunk()).unwrap().catch(() => toast.error("Failed to fetch news"))
    }, 2000),
    []
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    debouncedSearch(query);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
            <h1 className="text-2xl font-bold text-gray-900 ml-2 md:ml-4">
              InnoScripta
            </h1>
          </div>

          <div className="flex-1 max-w-2xl mx-4 md:mx-8 hidden md:block">
            <div className="relative z-10">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search news..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <NotificationDropdown />
            <ProfileDropdown />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="py-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search news..."
              className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

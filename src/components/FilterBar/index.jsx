import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { Calendar, ChevronDown } from "lucide-react";
import DatePicker from "react-datepicker";
import { setAPISource, setCategory, setDateRange } from "../../redux/reducers/filterSlice";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { categories, SourcesDropdown } from "../../constants/dropdown";
import { MdOutlineArticle } from "react-icons/md";
import { fetchNewsThunk } from "../../redux/reducers/actions/fetchNews";


const FilterBar = () => {

    const dispatch = useDispatch()
    const { apiSource, selectedCategory, dateRange } = useSelector(state => state.filters)
    const [startDate, endDate] = dateRange;

    const categoryHandler = (catID) => {
        dispatch(setCategory(catID))
        // fetchNews()
        dispatch(fetchNewsThunk()).unwrap().catch(() => toast.error("Failed to fetch news"))
    }

    const dateHandler = (date) => {
        dispatch(setDateRange(date))
        dispatch(fetchNewsThunk()).unwrap().catch(() => toast.error("Failed to fetch news"))

    }

    const sourceHandler = (source) => {
        dispatch(setAPISource(source))
        dispatch(fetchNewsThunk()).unwrap().catch(() => toast.error("Failed to fetch news"))

    }

    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex space-x-2 overflow-x-scroll pb-4 hide-scrollbar">

                <button
                    onClick={() => categoryHandler("all")}
                    className={`px-4 py-2 rounded-md whitespace-nowrap ${selectedCategory === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                >
                    <MdOutlineArticle className="text-3xl" />
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => {
                            // setSelectedCategory(category.id)
                            categoryHandler(category.id)
                            // setCurrentPage(1)
                        }}
                        className={`flex flex-col items-center px-4 py-2 rounded-sm whitespace-nowrap ${selectedCategory === category.id
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        <category.icon className="text-3xl" />
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="flex md:flex-nowrap flex-wrap gap-4 items-center justify-center">
                <Menu as="div" className="relative">
                    <MenuButton className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg border border-gray-300 text-gray-700 text-nowrap">
                        {apiSource}
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
                                {SourcesDropdown?.map((name, id) => (
                                    <MenuItem key={id}>
                                        {({ active }) => (
                                            <button
                                                onClick={() => sourceHandler(name)}
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

                <div className="relative inline-block">
                    <DatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(dates) => dateHandler(dates)}
                        dateFormat="MMM dd, yyyy"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                        placeholderText="Filter by date range"
                    />
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>
        </div>
    )
}
export default FilterBar
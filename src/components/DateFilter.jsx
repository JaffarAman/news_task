import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

const DateFilter = ({
  startDate,
  endDate,
  onDateChange,
}) => {
  return (
    <div className="relative inline-block">
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(dates) => onDateChange(dates)}
        dateFormat="MMM dd, yyyy"
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
        placeholderText="Filter by date range"
      />
      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default DateFilter;

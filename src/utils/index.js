import { formatDistanceToNow, format, parseISO } from "date-fns";

export const formatDate = (
  dateString
) => {
  const date = parseISO(dateString);

  const formattedDate = format(date, "MMM dd, yyyy");

  const timeDifference = formatDistanceToNow(date, { addSuffix: true });

  const timeString =
    timeDifference.includes("ago") && !timeDifference.includes("day")
      ? timeDifference
      : format(date, "hh:mm a");

  return {
    date: formattedDate,
    time: timeString,
  };
};

export const truncateTo30Chars = (input) => {
  return input?.length <= 30 ? input : `${input?.slice(0, 30)}...`;
};

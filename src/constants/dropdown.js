import { GrTechnology } from "react-icons/gr";
import { FaBusinessTime } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineSportsBasketball } from "react-icons/md";
import { IoMdMusicalNotes } from "react-icons/io";
import { GiMaterialsScience } from "react-icons/gi";

export const categories = [
    { id: "technology", icon: GrTechnology, name: "Technology" },
    { id: "business", icon: FaBusinessTime, name: "Business" },
    { id: "sports", icon: MdOutlineSportsBasketball, name: "Sports" },
    { id: "entertainment", icon: IoMdMusicalNotes, name: "Entertainment" },
    { id: "science", icon: GiMaterialsScience, name: "Science" },
    { id: "health", icon: MdHealthAndSafety, name: "Health" },
];


export const SourcesDropdown = ["NewsAPI", "The Guardian", "New York Times"]
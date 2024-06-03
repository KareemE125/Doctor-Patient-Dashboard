import { NavLink } from "react-router-dom";

type LinkTabProps = {
    path: string;
    label: string;
}

export default function DropMenuLinkTab({path, label}:LinkTabProps) {

  return (
    <NavLink 
        to={path} 
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    >
        {label}
    </NavLink>
  )
}

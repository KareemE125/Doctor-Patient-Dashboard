import { NavLink } from "react-router-dom";
import  "@styles/navbar.css";

type LinkTabProps = {
    path: string;
    label: string;
    icon?: string;
}

const baseStyle = "block font-semibold text-[14px] bg-transparent duration-75 rounded-lg xl:rounded-full hover:bg-accent"


export default function NavLinkTab({path, label, icon}:LinkTabProps) {


  return (
    <NavLink 
        to={path} 
        className={ ({isActive})=> isActive
          ? baseStyle + " " +"!bg-accent !text-accent-dark dark:invert-child" 
          : baseStyle
        }
    >
      <div className={`flex items-center gap-6 xl:gap-2 py-2 ${icon ? 'pl-4 pr-9' :'px-4'}`}>
        { icon && <img className="w-5" src={icon} alt="icon" /> }
        <span>{label}</span>
      </div>
    </NavLink>
  )
}

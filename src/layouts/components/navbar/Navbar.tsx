import { useState } from "react";
import { NavLink } from "react-router-dom";

import NavLinkTab from "@layouts/components/navbar/NavLinkTab";
import NavSettings from "@layouts/components/navbar/NavSettings";

import { TestLogo, calendar_today, chat_bubble, credit_card, group, home} from "@assets/icons";


export default function Navbar() {
    
  const [showLinks, setShowLinks] = useState<boolean>(false)

  return (
    <nav className="p-4">
      <div className="rounded-full bg-white shadow-md dark:bg-gray-900 dark:border-gray-700 flex flex-wrap items-center justify-between mx-auto pt-4 pb-3 px-8">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 flex-1"
        >
          <img
            src={TestLogo}
            className="h-10 dark:invert"
            alt="Flowbite Logo"
          />
        </NavLink>

        {/* Buttons */}
        <NavSettings showLinks={showLinks} setShowLinks={setShowLinks} />

        {/* Links */}
        <div
          className={`${showLinks? "block" : "hidden"} flex-1 absolute xl:static top-[68px] left-[7.5%]  items-center justify-center w-[85%] xl:flex xl:w-auto xl:order-1`}
        >
          <div className="flex flex-col  gap-4 font-medium p-4 xl:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-100 xl:flex-row xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-900 xl:dark:bg-gray-900 dark:border-gray-700 rounded-t-none border-t-0">
            <NavLinkTab path="/" label="Overview" icon={home}/>
            <NavLinkTab path="/patients" label="Patients" icon={group}/>
            <NavLinkTab path="/schedule" label="Schedule" icon={calendar_today}/>
            <NavLinkTab path="/message" label="Message" icon={chat_bubble}/>
            <NavLinkTab path="/transactions" label="Transactions" icon={credit_card}/>
          </div>
        </div>

      </div>
    </nav>
  );
}

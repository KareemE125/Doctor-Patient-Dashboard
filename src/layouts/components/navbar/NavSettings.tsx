import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";

import useUserStore from "@store/userStore";
import DropMenuLinkTab from '@layouts/components/navbar/DropMenuLinkTab'

import { APP_LOCALSTORAGE_THEME_DARK_VALUE, APP_LOCALSTORAGE_THEME_KEY, APP_LOCALSTORAGE_THEME_LIGHT_VALUE } from "@global/constants";
import { more_vert, settings } from "@assets/icons";


interface NavSettingsProps {
    showLinks: boolean;
    setShowLinks: (showLinks:boolean) => void;
}

export default function NavSettings({showLinks, setShowLinks}:NavSettingsProps) {

    const user = useUserStore(state => state.user)
    const [darkTheme, setDarkTheme] = useState<boolean>(true)
  
    useEffect(() => {
      const dark = localStorage.getItem(APP_LOCALSTORAGE_THEME_KEY)
      if (dark === APP_LOCALSTORAGE_THEME_DARK_VALUE) {
        setDarkTheme(true)
      } else {
        setDarkTheme(false)
      }
    }, [])
  
    const toggleTheme = () => {
      if (darkTheme) {
        document.documentElement.classList.remove(APP_LOCALSTORAGE_THEME_DARK_VALUE)
        localStorage.setItem(APP_LOCALSTORAGE_THEME_KEY, APP_LOCALSTORAGE_THEME_LIGHT_VALUE)
      } else {
        document.documentElement.classList.add(APP_LOCALSTORAGE_THEME_DARK_VALUE)
        localStorage.setItem(APP_LOCALSTORAGE_THEME_KEY, APP_LOCALSTORAGE_THEME_DARK_VALUE)
      }
      setDarkTheme(!darkTheme)
    }

  return (
    <section className="flex justify-end items-center gap-6 xl:order-2 flex-1">
  
          <div className="flex items-center gap-4 border-r-2 pr-4 xl:p-0 xl:border-none">
            {/* Profile Button */}
            <div className="border-r-2 pr-2">
              <button
                type="button"
                className="group focus:ring-2 relative flex text-sm rounded-full pr-3"
              >
                <div className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={user.avatar}
                    alt="user photo"
                  />
                  <div className="text-start text-sm">
                    <p className="font-semibold -mb-1">{user.name}</p>
                    <p className="text-gray-500 dark:text-gray-400">{user.profession}</p>
                  </div>
                </div>

                
                {/* Profile Drop Menu */}
                <div
                  className={`hidden group-focus:block w-full absolute top-[90%] -right-2 z-50 my-4 text-base list-none bg-gray-100 divide-y divide-gray-200 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user.name}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      {user.email}
                    </span>
                  </div>
                  <div className="py-2">
                    <DropMenuLinkTab path="#profile" label="Dashboard" />
                    <DropMenuLinkTab path="#settings" label="Settings" />
                    <DropMenuLinkTab path="#earnings" label="Earnings" />
                    <DropMenuLinkTab path="#signout" label="Sign out" />
                  </div>
                </div>

             

              </button>

            </div>
            
            {/* Settings Button */}
            <div className="h-full flex items-center gap-4">
              <button className="group relative">
                <img className="w-[18px] dark:invert cursor-pointer" src={settings} alt="settings" />
                {/* Settings Drop Menu */}
                <div
                  className={`hidden group-focus:block w-32 absolute top-5 -right-8 z-50 my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                >
                    {/* Theme Button */}
                  <div className="w-full py-2 flex justify-center text-lg items-center gap-2" onClick={toggleTheme}>
                      <span className="text-sm"> {darkTheme ? "Dark" : "Light" } Theme</span>
                      {darkTheme ? <FaMoon /> : <FaSun className="text-yellow-500"/>}
                  </div>
                </div>
              </button>
              <img className="dark:invert cursor-pointer" src={more_vert} alt="drawer menu" />
            </div>
          </div>

          {/* Nav Menu Button */}
          <button
            className="focus:ring-2 inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-200 bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:bg-gray-700"
            onClick={() => setShowLinks(!showLinks)}
          >
            <HiMenu className={`${showLinks && 'rotate-90'} duration-200  text-2xl`} />
          </button>

        </section>
  )
}

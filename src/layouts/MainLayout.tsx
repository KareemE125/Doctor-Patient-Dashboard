import Navbar from "@layouts/components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function MainLayout() {

  useEffect(() => {
    // mimic Session storage for the user's (username, password) for basic auth
    sessionStorage.setItem('username', 'coalition');
    sessionStorage.setItem('password', 'skills-test');
  }, []);

  return (
    <main className='min-h-screen h-full flex flex-col text-accent-dark dark:text-white
            dark:bg-gradient-to-br dark:from-gray-900 dark:via-teal-700 dark:to-teal-700 
            bg-grey pt-24
          '
    >
      <nav className="z-[99999] fixed top-0 left-0 right-0">
        <Navbar />
      </nav>

      <main className="w-full h-full p-4 mx-auto bg-grey dark:bg-transparent">
        <Outlet />
      </main>

    </main>
  );
}

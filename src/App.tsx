import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import baseRouter from "@routes/AppRouter";

function App() { 
  useEffect(() => {
    const dark = localStorage.getItem("theme");
    if (dark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <RouterProvider router={baseRouter} />
  );
}

export default App;

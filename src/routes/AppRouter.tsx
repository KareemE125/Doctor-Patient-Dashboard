import { createBrowserRouter } from "react-router-dom"

import MainLayout from "@layouts/MainLayout"
import HomePage from "@pages/HomePage"
import ErrorPage from "@pages/ErrorPage"
import DummyPage from "@pages/DummyPage"



const baseRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'patients',
                element: <DummyPage />
            },
            {
                path: 'schedule',
                element: <DummyPage />
            },
            {
                path: 'message',
                element: <DummyPage />
            },
            {
                path: 'transactions',
                element: <DummyPage />
            },
        ]
    }
])


export default baseRouter
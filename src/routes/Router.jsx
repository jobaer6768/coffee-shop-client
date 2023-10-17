import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import AddCoffee from "../pages/Coffee/AddCoffee";
import UpdateCoffee from "../pages/Coffee/UpdateCoffee";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updateCoffee',
                element: <UpdateCoffee></UpdateCoffee>
            }
        ]
    }
])

export default router;
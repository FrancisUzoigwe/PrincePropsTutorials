import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import HomePage from "../pages/HomePage"


export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true, 
                element: <HomePage/>
            }
        ]
    }
])
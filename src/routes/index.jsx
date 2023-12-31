import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            }, {
                path: "/home",
                element: <Home/>
            }, {
                path: "/contact",
                element: <Contact/>
            }, {
                path: "/about",
                element: <About/>
            }, {
                path: "/service",
                element: <Services/>
            }
        ]
    }
]);

export default router;

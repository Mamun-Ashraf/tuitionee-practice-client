import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import Blogs from "../Pages/Blogs/Blogs";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router;
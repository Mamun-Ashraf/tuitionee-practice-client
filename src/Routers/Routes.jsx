import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import Blogs from "../Pages/Blogs/Blogs";
import About from "../Pages/About/About";
import Login from "../Pages/Shared/Login";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import SignUp from "../Pages/Shared/SignUp";
import HouseTeacherLeaflet from "../Pages/Leaflet/HouseTeacherLeaflet";
import AdmissionLeaflet from "../Pages/Leaflet/AdmissionLeaflet";
import HiringTeacherLeaflet from "../Pages/Leaflet/HiringTeacherLeaflet";
import HouseTuition from "../Pages/Leaflet/HouseTuitionLeaflet";
import Leaflet from "../Pages/Leaflet/Leaflet";

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
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/leaflet',
                element: <Leaflet></Leaflet>
            },
            {
                path: '/tuition',
                element: <HouseTuition></HouseTuition>
            },
            {
                path: '/tutor',
                element: <HouseTeacherLeaflet></HouseTeacherLeaflet>
            },
            {
                path: '/admission',
                element: <AdmissionLeaflet></AdmissionLeaflet>
            },
            {
                path: '/hiring',
                element: <HiringTeacherLeaflet></HiringTeacherLeaflet>
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router;
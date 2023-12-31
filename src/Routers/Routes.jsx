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
import CircularLeaflet from "../Pages/Leaflet/CircularLeaflet";
// import HiringTeacherLeaflet from "../Pages/Leaflet/HiringTeacherLeaflet";
import HouseTuition from "../Pages/Leaflet/HouseTuitionLeaflet";
import PrivateRoute from "./PrivateRoute";
import MyLeaflet from "../Pages/MyLeaflet/MyLeaflet";
// import ProfileModal from "../Components/Modals/ProfileModal";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://jsonplaceholder.typicode.com/users')
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
                path: '/tuition',
                element: <PrivateRoute><HouseTuition></HouseTuition></PrivateRoute>
            },
            {
                path: '/tutor',
                element: <PrivateRoute><HouseTeacherLeaflet></HouseTeacherLeaflet></PrivateRoute>
            },
            {
                path: '/circular',
                element: <PrivateRoute><CircularLeaflet></CircularLeaflet></PrivateRoute>
            },
            // {
            //     path: '/hiring',
            //     element: <PrivateRoute><HiringTeacherLeaflet></HiringTeacherLeaflet></PrivateRoute>
            // },
            {
                path:'/myLeaflet',
                element:<PrivateRoute><MyLeaflet></MyLeaflet></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router;
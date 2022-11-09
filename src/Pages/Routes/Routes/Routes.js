import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Main from "../../../Layout/Main";
import SignUp from "../../GetStarted/SignUp/SignUp";
import SignIn from "../../GetStarted/SignIn/SignIn";
import Profile from "../../Profile/Profile";
import Blogs from "../../Blogs/Blogs";
import Error from "../../Error/Error";
import Services from "../../Services/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServiceDetails from "../../Services/ServiceDetails/ServiceDetails";
import Checkout from "../../Services/Checkout/Checkout";
import HealthTips from "../../HealthTips/HealthTips";
import UserAddServices from "../../Home/AddServices/UserAddServices";
import Report from "../../Report/Report";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://doctor-g-server.vercel.app/options')
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path:'/signin',
            element: <SignIn></SignIn>
        },
        {
            path:'/profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        },
        {
            path:'/tips',
            element: <HealthTips></HealthTips>
        },
        {
            path:'/addServices',
            element: <PrivateRoute><UserAddServices></UserAddServices></PrivateRoute>
        },
        {
            path:'/report',
            element: <PrivateRoute><Report></Report></PrivateRoute>
        },
        {
            path: '/services',
            element: <PrivateRoute><Services></Services></PrivateRoute>,
            loader: () => fetch('https://doctor-g-server.vercel.app/services')
        },
        {
            path: '/services/:id',
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://doctor-g-server.vercel.app/services/${params.id}`)
        },
        {
            path: '/services/checkout/:id',
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: ({params}) => fetch(`https://doctor-g-server.vercel.app/services/${params.id}`)
        }
        ]
    }
  ]);

  export default router;
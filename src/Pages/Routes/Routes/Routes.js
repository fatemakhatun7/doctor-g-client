import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Main from "../../../Layout/Main";
import SignUp from "../../GetStarted/SignUp/SignUp";
import SignIn from "../../GetStarted/SignIn/SignIn";
import Profile from "../../Profile/Profile";
import Blogs from "../../Blogs/Blogs";
import Error from "../../Error/Error";

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
            element: <Profile></Profile>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        }
        ]
    }
  ]);

  export default router;
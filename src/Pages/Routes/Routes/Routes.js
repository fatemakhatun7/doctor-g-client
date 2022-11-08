import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Main from "../../../Layout/Main";
import SignUp from "../../GetStarted/SignUp/SignUp";
import SignIn from "../../GetStarted/SignIn/SignIn";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path:'/signin',
            element: <SignIn></SignIn>
        }
        ]
    }
  ]);

  export default router;
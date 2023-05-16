import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Checkout from "../pages/checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/', 
            element: <Home></Home>
        },
        {
            path: '/login', 
            element: <Login></Login>
        },
        {
            path: '/signup', 
            element: <Signup></Signup>
        },
        {
            path: '/checkout/:id', 
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: ({params}) => fetch(`https://car-doctor-server-indol.vercel.app/services/${params.id}`)
        },
        {
            path: '/orders', 
            element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
      ]
    },
  ]);

  export default router;
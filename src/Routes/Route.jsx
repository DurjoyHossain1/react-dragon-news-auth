import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      children:[
        {
            path: "/",
            element: <Home/>,
            loader: () => fetch('/news.json')
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
        {
            path: "/news/:id",
            element: <PrivateRoute><News></News></PrivateRoute>,
        },
        {
            path: "/about",
            element: <About></About>,
        },
        {
            path: "/career",
            element: <Career/>,
        },
      ]
    },
    
  ]);

  export default router
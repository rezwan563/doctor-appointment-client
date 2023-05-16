import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import BookNow from "../pages/BookNow/BookNow";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/services')
        },
        {
            path: '/about_us',
            element: <About></About>,
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
        },
        {
          path: '/book/:id',
          element: <BookNow></BookNow>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;
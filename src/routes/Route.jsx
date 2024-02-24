import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Watchlist from "../pages/Watchlist";
import Search from "../pages/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/watchlist",
        element: <Watchlist/>
      },
      {
        path: "/search-result",
        element: <Search/>
      },
      {
        path: '/details/:movieId',
        element: <Details/>
      }
    ]
  },
]);

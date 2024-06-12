import {
  Link,
  RouterProvider,
  createBrowserRouter,
  redirect,
  useNavigate,
} from "react-router-dom";
import App from "../App";
import Home from "../Home";
import Dashboard from "../Dashboard";
import Login from "../Login";
import { useContext, useEffect, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import { IAppProviderValues } from "../interfaces";

const publicRoutes = [
  { path: "/home", element: <Home></Home> },
  {
    path: "/app",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: <>Not found</>,
  },
];

const protectedRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
];

const AppRouterProvider = () => {
  const appcontext: IAppProviderValues = useContext(AppContext);
  useEffect(() => {
    if (appcontext.userDetails.phone === "9940") {
      appcontext.setUserDetails((prev) => ({ ...prev, isLoggedIn: true }));
    } else {
      appcontext.setUserDetails((prev) => ({ ...prev, isLoggedIn: false }));
    }
  }, [appcontext.userDetails.phone]);
  const routes = useMemo(() => {
    return createBrowserRouter(
      appcontext.userDetails.isLoggedIn
        ? [...publicRoutes, ...protectedRoutes]
        : publicRoutes
    );
  }, [appcontext]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
};

export default AppRouterProvider;

import AuthLayout from "@/components/layouts/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import { authRoute } from "@/pages/Auth/routes";
import HomeLayout from "@/components/layouts/HomeLayout";
import { homeRoute } from "@/pages/Home/routes";
import { watchRoute } from "@/pages/Watch/routes";
import { notFoundRoute } from "@/pages/NotFound/routes";

export const router = createBrowserRouter([
  {
    path: "",
    Component: AuthLayout,
    children: [
      authRoute,
      {
        path: "",
        Component: HomeLayout,
        children: [homeRoute, watchRoute, notFoundRoute],
      },
    ],
  },
]);

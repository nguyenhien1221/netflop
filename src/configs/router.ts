import AuthLayout from "@/components/layouts/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import { authRoute } from "@/pages/Auth/routes";
import HomeLayout from "@/components/layouts/HomeLayout";
import { homeRoute } from "@/pages/Home/routes";
import NotfoundPage from "@/pages/NotfoundPage.tsx/NotfoundPage";

export const router = createBrowserRouter([
  {
    path: "",
    Component: AuthLayout,
    children: [
      authRoute,
      {
        path: "",
        Component: HomeLayout,
        children: [homeRoute],
      },
    ],
  },
  { path: "*", Component: NotfoundPage },
]);

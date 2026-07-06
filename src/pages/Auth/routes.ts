import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { NAV_PATH } from "@/constants/nav.constants";

const Login = lazy(() => import("./Login"));

export const authRoute: RouteObject = {
  path: NAV_PATH.LOGIN,
  Component: Login,
};

import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));

export const homeRoute: RouteObject = {
  path: "",
  children: [
    {
      path: "",
      Component: HomePage,
    },
  ],
};

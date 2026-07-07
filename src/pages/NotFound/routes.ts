import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const NotFoundPage = lazy(() => import("./NotFoundPage"));

export const notFoundRoute: RouteObject = {
  path: "*",
  Component: NotFoundPage,
};

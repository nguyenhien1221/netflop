import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const WatchPage = lazy(() => import("./WatchPage"));

export const watchRoute: RouteObject = {
  path: "watch/:movieId",
  Component: WatchPage,
};

import { Application, Router } from "express";
import { MediaRouter } from "./media.route";

const _routes: Array<[string, Router]> = [["/media", MediaRouter]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

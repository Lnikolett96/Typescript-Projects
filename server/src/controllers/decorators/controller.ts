import "reflect-metadata";
import { NextFunction, RequestHandler, Response, Request } from "express";
import { AppRouter } from "../../AppRouter";
import { Methods } from "../Methods";
import { MetadataKeys } from "./MetadataKeys";

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("Invalid request");
      return;
    }
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }
    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function): void {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.PATH,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.METHOD,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) ||
        [];
      const requiredBodyProps =
        Reflect.getMetadata(
          MetadataKeys.BODY_VALIDATOR,
          target.prototype,
          key
        ) || [];
      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        if (requiredBodyProps.length > 0) {
          router[method](
            routePrefix + path,
            ...middlewares,
            validator,
            routeHandler
          );
        } else {
          router[method](routePrefix + path, ...middlewares, routeHandler);
        }
      }
    }
  };
}

import { IRoute, IUserPath } from "../types";

export const routesGenarat = (items: IUserPath[]) => {
  const routes = items.reduce((acc: IRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        if (child.path && child.element) {
          acc.push({
            path: child.path!,
            element: child.element,
          });
        }
      });
    }
    return acc;
  }, []);

  return routes;
};

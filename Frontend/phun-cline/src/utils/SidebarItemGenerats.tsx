import { NavLink } from "react-router-dom";
import { ISidebar, IUserPath } from "../types";

export const sidebarItemGenerat = (items: IUserPath[], role: string) => {
  const slidebarItem = items.reduce((acc: ISidebar[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if(child.name && child.path){
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }
    return acc;
  }, []);

  return slidebarItem;
};


import { ReactNode } from "react";

export interface IRoute {
    path: string;
    element: ReactNode;
  }

export interface IUserPath {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: IUserPath[];
}

export interface ISidebar {
    key: string;
    label: ReactNode;
    children?: ISidebar[];
  }
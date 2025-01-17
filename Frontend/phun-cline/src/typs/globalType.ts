import { BaseQueryApi } from "@reduxjs/toolkit/query";
import React from "react";

export type TError = {
  data: { message: string; stack: string; success: boolean };
  status: number;
};

export type TMata = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  mata?: TMata;
  success?: boolean;
  message?: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryPrams = {
  name: string;
  value: boolean | React.Key;
};

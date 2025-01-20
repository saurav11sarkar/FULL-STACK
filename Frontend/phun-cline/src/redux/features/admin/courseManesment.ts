import { TQueryPrams, TResponseRedux, TSemester } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseMenasmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisterSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        // chatGpt
        args?.forEach((arg: TQueryPrams) => {
          if (arg.name && arg.value !== undefined) {
            params.append(arg.name, arg.value.toString());
          }
        });

        return {
          url: "/semesters/",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return { data: response.data, mata: response.mata };
      },
    }),

    addRegisterSemester: builder.mutation({
      query: (data) => ({
        url: "/semesters/create-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddRegisterSemesterMutation,
  useGetAllRegisterSemesterQuery,
} = courseMenasmentApi;

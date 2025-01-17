import { TQueryPrams, TResponseRedux } from "../../../typs";
import { TAcademicSemester } from "../../../typs/academicMenesment.type";
import { baseApi } from "../../api/baseApi";

const academicManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    
    getAllSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length > 0) {
          args.forEach((arg: TQueryPrams) =>
            params.append(arg.name, arg.value as string)
          );
        }
        return {
          url: "/academic-semesters/create-academic-semester",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        // console.log("inside transform", response);
        return { data: response.data, mata: response.mata };
      },
    }),

    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),



  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
  academicManagement;

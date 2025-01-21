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
      providesTags: ["semester"],
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
      invalidatesTags: ["semester"],
    }),

    updateRegisterSemester: builder.mutation({
      query: (args) => ({
        url: `/semesters/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["semester"],
    }),

    getAllCourse: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        // chatGpt
        args?.forEach((arg: TQueryPrams) => {
          if (arg.name && arg.value !== undefined) {
            params.append(arg.name, arg.value.toString());
          }
        });

        return {
          url: "/courses/",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["courses"],
      transformResponse: (response: TResponseRedux<any>) => {
        return { data: response.data, mata: response.mata };
      },
    }),

    addCourses: builder.mutation({
      query: (data) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),

    addFacultyes: builder.mutation({
      query: (args) => ({
        url: `/courses/${args.courseId}/assign-faculties`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["faculty"],
    }),


    


  }),
});

export const {
  useAddRegisterSemesterMutation,
  useGetAllRegisterSemesterQuery,
  useUpdateRegisterSemesterMutation,
  useGetAllCourseQuery,
  useAddCoursesMutation,
  useAddFacultyesMutation
} = courseMenasmentApi;

import { TQueryPrams, TResponseRedux } from "../../../typs";
import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "../../../typs/academicMenesment.type";
import { baseApi } from "../../api/baseApi";

const academicManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        // video module
        // if (args.length > 0) {
        //   args.forEach((arg: TQueryPrams) =>
        //     params.append(arg.name, arg.value.toString())
        //   );
        // }

        // chatGpt
        args?.forEach((arg: TQueryPrams) => {
          if (arg.name && arg.value !== undefined) {
            params.append(arg.name, arg.value.toString());
          }
        });

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
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

    // copy------


    getAllAcademicFaculties: builder.query({
      query: () => {
        return { url: '/academic-faculties', method: 'GET' };
      },
      transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
        // console.log(response.data);
        return {
          data: response.data,
          mata: response.mata,
        };
      },
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: '/academic-faculties/create-academic-faculty',
        method: 'POST',
        body: data,
      }),
    }),


    getAllAcademicDepartments: builder.query({
      query: () => {
        return { url: '/academic-deperments', method: 'GET' };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        // console.log(response.data);
        return {
          data: response.data,
          meta: response.mata,
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: '/academic-deperments/create-academic-deperment',
        method: 'POST',
        body: data,
      }),
    }),



  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation, useGetAllAcademicFacultiesQuery, useAddAcademicFacultyMutation, useGetAllAcademicDepartmentsQuery, useAddAcademicDepartmentMutation } =
  academicManagement;

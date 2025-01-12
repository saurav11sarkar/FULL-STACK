import { baseApi } from "../../api/baseApi";

const academicSemester = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemester: builder.query({
          query: () => ({
            url: "/academic-semesters/create-academic-semester",
            method: "GET",
          }),
        })
      }),
})

export const {useGetAllSemesterQuery} = academicSemester;
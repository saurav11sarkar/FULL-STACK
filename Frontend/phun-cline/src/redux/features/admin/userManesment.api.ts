import { baseApi } from "../../api/baseApi";

const usermanagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSemester: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     if (args.length > 0) {
    //       args.forEach((arg: TQueryPrams) =>
    //         params.append(arg.name, arg.value as string)
    //       );
    //     }
    //     return {
    //       url: "/academic-semesters/create-academic-semester",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
    //     // console.log("inside transform", response);
    //     return { data: response.data, mata: response.mata };
    //   },
    // }),

    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddStudentMutation } = usermanagementApi;

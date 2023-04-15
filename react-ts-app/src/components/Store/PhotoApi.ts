import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photoApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({baseUrl: "https://www.flickr.com/services/rest"}),
  endpoints: (build) => ({
    getRecentPics: build.query({
      query: () => "TEST"
    })
  })
})
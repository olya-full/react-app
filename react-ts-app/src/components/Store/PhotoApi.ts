import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhotosResponse, IPhotosResponseJson, ISearchResult } from "../../types/types";

const commonParams = {
  api_key: "4b621c2314e1aacd9186e7425c899a6b",
  per_page: "100",
  page: "1",
  format: "json",
  nojsoncallback: "1",
  safe_search: "1",
  method: "flickr.photos.getRecent"
}

export const photoApi = createApi({
  reducerPath: "api",
  tagTypes: ["searchResults"],
  baseQuery: fetchBaseQuery({baseUrl: "https://www.flickr.com/services/rest"}),
  endpoints: (build) => ({
    getRecentPics: build.query<ISearchResult[], void>({
      query: () => {
        return {
          url: `/?`,
          params: commonParams,
        }
      },
      transformResponse: (res: IPhotosResponseJson) => {
        const adaptedResult: ISearchResult[] = [];

        res.photos.photo.forEach((item) => {
            adaptedResult.push({
              id: item.id,
              title: item.title,
              imageUrl: `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`,
            });
          });
          console.log(adaptedResult)

        return adaptedResult;
      },
      providesTags: ["searchResults"]
    }),
    /*
    getSearchResults: build.query({
      query: () => `/?method=flickr.photos.search&${JSON.parse(JSON.stringify(commonParams))}`
    })*/
  })
})

export const { useGetRecentPicsQuery } = photoApi;
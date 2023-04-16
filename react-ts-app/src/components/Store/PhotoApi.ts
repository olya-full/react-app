import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhotoResponseJson, IPhotosResponseJson, ISearchResult } from "../../types/types";

const commonParams = {
  api_key: "4b621c2314e1aacd9186e7425c899a6b",
  per_page: "100",
  page: "1",
  format: "json",
  nojsoncallback: "1",
  safe_search: "1"
}

const singleCardParams = {
  api_key: "4b621c2314e1aacd9186e7425c899a6b",
  format: "json",
  nojsoncallback: "1",
  method: "flickr.photos.getInfo",
}

export const photoApi = createApi({
  reducerPath: "api",
  tagTypes: ["searchResults"],
  baseQuery: fetchBaseQuery({baseUrl: "https://www.flickr.com/services/rest"}),
  endpoints: (build) => ({
    getSearchResults: build.query<ISearchResult[], string>({
      query: (value: string = "a") => {
        return {
          url: `/?method=flickr.photos.search&text=${value}`,
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

        return adaptedResult;
      },
      providesTags: ["searchResults"]
    }),

    getOnePic: build.query<ISearchResult, string>({
      query: (id: string) => {
        return {
          url: `/?photo_id=${id}`,
          params: singleCardParams,
        }
      },
      transformResponse: (resData: IPhotoResponseJson) => {
        return {
          id: resData.photo.id,
          title: resData.photo.title._content,
          imageUrl: `https://live.staticflickr.com/${resData.photo.server}/${resData.photo.id}_${resData.photo.secret}.jpg`,
          date: resData.photo.dates.posted,
          author: resData.photo.owner.realname,
          location: resData.photo.owner.location,
        };
      }
    })
  })
})

export const { useGetSearchResultsQuery, useGetOnePicQuery } = photoApi;
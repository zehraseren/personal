import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => {
            return { type: "Photo", id: photo.id };
          });
          tags.push({ type: "Photo", id: album.id });
          return tags;
        },
        query: (album) => {
          return {
            url: "photos",
            method: "GET",
            params: {
              albumId: album.id,
            },
          };
        },
      }),
      addPhotos: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "AlbumsPhoto", id: album.id }];
        },
        query: (album) => {
          return {
            url: "photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.abstract(125, 125, true),
            },
          };
        },
      }),
      removePhotos: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "Photo", id: photo.id }];
        },
        query: (photo) => {
          return {
            url: `photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export { photosApi };
export const {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotosMutation,
} = photosApi;

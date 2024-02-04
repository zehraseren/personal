import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./apis/usersApi";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);
export {
  useFetchUsersQuery,
  useAddUsersMutation,
  useRemoveUsersMutation,
} from "./apis/usersApi";

export {
  useFetchAlbumsQuery,
  useAddAlbumsMutation,
  useRemoveAlbumsMutation,
} from "./apis/albumsApi";

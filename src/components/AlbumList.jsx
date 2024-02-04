import { useFetchAlbumsQuery } from "../store/apis/albumsApi";

function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);

  return <div>{user.name} Albümü</div>;
}

export default AlbumList;

/* eslint-disable react/prop-types */
import { Button, CircularProgress, Skeleton } from "@mui/material";
import {
  useAddAlbumsMutation,
  useFetchAlbumsQuery,
} from "../store/apis/albumsApi";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumsMutation();
  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "80px" }} />
    );
  } else if (isError) {
    content = <div>Hata var</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{user.name} Albümü</h3>
          <Button color="success" variant="outlined" onClick={handleAlbumAdd}>
            {results.isLoading ? (
              <CircularProgress style={{ width: "23px", height: "23px" }} />
            ) : (
              <span>Albüm Ekle +</span>
            )}
          </Button>
        </div>
      </div>
      <div>{content}</div>
    </>
  );
}

export default AlbumList;

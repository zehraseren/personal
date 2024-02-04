/* eslint-disable react/prop-types */
import { Button, CircularProgress, Skeleton } from "@mui/material";
import {
  useFetchPhotosQuery,
  useAddPhotosMutation,
} from "../store/apis/photosApi";
import PhotoListItem from "./PhotoListItem";

function AlbumList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotosMutation();
  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "80px" }} />
    );
  } else if (isError) {
    content = <div>Hata var</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{album.title} Fotoğrafları</h3>
          <Button color="error" variant="outlined" onClick={handlePhotoAdd}>
            {results.isLoading ? (
              <CircularProgress style={{ width: "23px", height: "23px" }} />
            ) : (
              <span>Fotoğraf Ekle +</span>
            )}
          </Button>
        </div>
      </div>
      <div>{content}</div>
    </>
  );
}

export default AlbumList;

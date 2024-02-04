/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import { useRemovePhotosMutation } from "../store";
import { FaTrash } from "react-icons/fa";

function PhotoListItem({ photo }) {
  const [removePhotos, results] = useRemovePhotosMutation();
  const handleRemovePhoto = () => {
    removePhotos(photo);
  };

  return (
    <div className="plImg" onClick={handleRemovePhoto}>
      <img src={photo.url} alt="" />
      <div className="deleteCircularDiv">
        {results.isLoading ? (
          <CircularProgress style={{ width: "18px", height: "18px" }} color="error"/>
        ) : (
          <FaTrash />
        )}
      </div>
    </div>
  );
}

export default PhotoListItem;

/* eslint-disable react/prop-types */
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotoList";
import { FaTrash } from "react-icons/fa";
import { useRemoveAlbumsMutation } from "../store";
import { CircularProgress } from "@mui/material";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumsMutation();
  const handleClick = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <button className="buttonULI" onClick={handleClick}>
        {results.isLoading ? (
          <CircularProgress style={{ width: "18px", height: "18px" }} />
        ) : (
          <FaTrash />
        )}
      </button>
      {album.title}
    </>
  );

  return (
    <div>
      <ExpandablePanel header={header}>
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  );
}

export default AlbumListItem;

import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import { FaTrash } from "react-icons/fa";
import { useRemoveUsersMutation } from "../store";
import { CircularProgress } from "@mui/material";

function UsersListItem({ user }) {
  const [removeUser, results] = useRemoveUsersMutation();
  const handleClick = () => {
    removeUser(user);
  };

  const header = (
    <>
      <button className="buttonULI" onClick={handleClick}>
        {results.isLoading ? <CircularProgress style={{width:"18px", height:"18px"}} /> : <FaTrash />}
      </button>
      {user.name}
    </>
  );

  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
}

export default UsersListItem;

import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import { FaTrash } from "react-icons/fa";

function UsersListItem({ user }) {
  const header = (
    <>
      <button className="buttonULI">
        <FaTrash />
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

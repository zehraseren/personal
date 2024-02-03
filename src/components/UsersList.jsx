import { Button, CircularProgress, Skeleton } from "@mui/material";
import { useFetchUsersQuery, useAddUsersMutation } from "../store";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const { data, isError, isFetching } = useFetchUsersQuery();
  const [addUser, results] = useAddUsersMutation();
  const handleUserAdd = () => {
    addUser();
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  } else if (isError) {
    content = <div>Hata var</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="topArrangement">
        <h1 style={{ fontSize: "25px" }}>Kişiler</h1>
        <Button variant="outlined" onClick={handleUserAdd}>
          {results.isLoading ? <CircularProgress /> : <span>Ekle +</span>}
        </Button>
      </div>
      {content}
    </div>
  );
}

export default UsersList;

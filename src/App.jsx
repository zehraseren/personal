import "./App.css";
import UsersList from "./components/UsersList";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}

export default App;

import { Provider, useSelector } from "react-redux";
import Todo from "./components/Todo";
import store from "./store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

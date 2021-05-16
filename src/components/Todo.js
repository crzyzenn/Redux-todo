import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addTodo, clearAllTodos } from "../features/todoSlice";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo) {
      dispatch(
        addTodo({
          id: v4(),
          task: todo,
          done: false
        })
      );

      setTodo("");
    } else {
      alert("Please type something.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo--add--container">
        <input
          type="text"
          placeholder="Add Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div>
          <button type="submit">Add Todo</button>
          <button
            type="button"
            onClick={() => {
              window.confirm("Clearing all todos. Are you sure?") &&
                dispatch(clearAllTodos());
            }}
          >
            Clear all
          </button>
        </div>
      </form>

      <br />
      <TodoList />
    </>
  );
}

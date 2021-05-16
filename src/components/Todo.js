import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addTodo, clearAllTodos } from "../features/todoSlice";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState(null);
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        id: v4(),
        task: todo,
        done: false
      })
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
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
      </form>

      <br />
      <TodoList />
    </>
  );
}

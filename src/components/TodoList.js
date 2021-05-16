import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todo);

  const todosJsx = todos.map(({ id, task, done }) => (
    <TodoItem key={id} id={id} task={task} done={done} />
  ));

  return (
    <>
      <h1>Todos:</h1>
      <div className="todo--items--container">{todosJsx}</div>
    </>
  );
}

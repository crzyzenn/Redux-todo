import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todo);

  const ongoingTodosJsx = todos
    .filter((todo) => !todo.done)
    .map(({ id, task, done }) => (
      <TodoItem key={id} id={id} task={task} done={done} />
    ));

  const doneTodosJsx = todos
    .filter((todo) => todo.done)
    .map(({ id, task, done }) => (
      <TodoItem key={id} id={id} task={task} done={done} />
    ));

  return (
    <div
      style={{
        padding: 20
      }}
    >
      <h3>My todos</h3>
      {ongoingTodosJsx.length > 0 ? (
        <div className="todo--items--container">{ongoingTodosJsx}</div>
      ) : (
        <p>Nothing here. &nbsp;Add todos.</p>
      )}
      <br />
      <br />
      <h3>Done</h3>
      {doneTodosJsx.length > 0 ? (
        <div className="todo--items--container">{doneTodosJsx}</div>
      ) : (
        <p>Nothing here. &nbsp;Complete your tasks to see them :)</p>
      )}
    </div>
  );
}

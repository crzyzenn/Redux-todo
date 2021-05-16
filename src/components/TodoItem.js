import { CheckOutlined, DeleteOutline, UndoOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleDone } from "../features/todoSlice";

export default function TodoItem({ id, task, done }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };
  const handleMark = () => {
    dispatch(toggleDone({ id }));
  };

  return (
    <div className="todo--item">
      <h3
        style={{
          textDecoration: done && "line-through",
          marginBottom: 0
        }}
      >
        {task}
      </h3>
      <div className={`todo--item--status ${done ? "done" : "not-done"}`}>
        {done ? "Done" : "Ongoing"}
      </div>
      <div style={{ marginBottom: 20 }}>
        <button onClick={handleMark}>
          {done ? <UndoOutlined /> : <CheckOutlined />}
        </button>
        <button onClick={handleDelete}>
          <DeleteOutline />
        </button>
      </div>
    </div>
  );
}

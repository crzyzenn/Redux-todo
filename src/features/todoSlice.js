import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todo: []
  },
  reducers: {
    addTodo(state, action) {
      state.todo.push(action.payload);
    },
    clearAllTodos(state) {
      console.log("Clearing store");
      state.todo.length = 0;
    },
    deleteTodo(state, action) {
      const { id } = action.payload;
      state.todo = state.todo.filter((todo) => todo.id !== id);
    },
    toggleDone(state, action) {
      const { id } = action.payload;
      state.todo = state.todo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      });
    }
  }
});

export const {
  addTodo,
  clearAllTodos,
  deleteTodo,
  toggleDone
} = todoSlice.actions;

export default todoSlice.reducer;

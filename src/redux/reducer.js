import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos

    //This code defines a reducer function called addTodos that takes the current state and an action as parameters. It pushes the payload of the action into the state and then returns the updated state.
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    //This code snippet removes todos from the state based on the id specified in the action payload.
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    //This code snippet updates a todo item in an array of todos based on the id provided in the action payload. It uses the map function to loop through the todos, and if it finds a todo with a matching id, it updates the todo's item with the new item from the action payload.
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    //This code snippet defines a reducer function called completeTodos that takes in the current state and an action as parameters. It maps over the state array and checks if the id of each todo object matches the action.payload value. If there is a match, it creates a new todo object with the completed property set to true, otherwise it returns the original todo object. The function then returns the updated state array with the completed todo objects marked as completed.
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;

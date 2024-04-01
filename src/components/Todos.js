import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};


//This code snippet defines a function called mapDispatchToProps in JavaScript. This function takes in a dispatch parameter and returns an object. The object has a property called addTodo, which is assigned a function. This function is a callback that gets called when the addTodo action is dispatched. It takes an obj parameter and dispatches the addTodos action with that parameter. The purpose of this code is to map the addTodo action to a prop called addTodo, which can be used in a React component to dispatch the addTodos action.
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};


//This code snippet defines a functional component called Todos. It takes props as input and renders a form for adding todos. It uses the useState hook to manage the todo input's state, and it includes event handlers for input change and adding new todos. The add function adds a new todo to the list when the input is not empty, and it resets the input after adding. The motion.button component provides animations for the add button.
const Todos = (props) => {
  const [todo, setTodo] = useState("");


  //This code snippet defines a function called handleChange in JavaScript that updates the Todo state with the value of the input element that triggered the change event.
  const handleChange = (e) => {
    setTodo(e.target.value);
  };


  //This code snippet defines a function called add in JavaScript. It checks if the todo variable is empty. If it is, it displays an alert message saying "Input is Empty". Otherwise, it calls the addTodo function from the props object, passing an object with an id, item, and completed properties. The id is generated randomly, the item is set to the value of the todo variable, and completed is set to false. Finally, it resets the todo variable to an empty string.
  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};
//I am using connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);

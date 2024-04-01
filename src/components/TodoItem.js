import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FcEditImage, FcCheckmark, FcCancel } from "react-icons/fc";



//This code snippet defines a functional component TodoItem in React. It takes props as input and renders a list item with animation and interactive buttons for editing, completing, and removing todo items. It also handles updating todo items on pressing the enter key while editing. Additionally, it uses the motion component for animations.
const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  //This code snippet defines a function called changeFocus in JavaScript. When this function is called, it sets the disabled property of the inputRef element to false and gives focus to that element.
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  //This code defines an update function that takes id, value, and e as parameters. It checks if the key code of the event e is 13 (which corresponds to the enter key). If it is, it calls the updateTodo function with the id and value as arguments and sets the disabled property of inputRef.current to true.
  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        style={{ resize: "none" }}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          {" "}
          <FcEditImage />{" "}
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <FcCheckmark />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          <FcCancel />
        </motion.button>{" "}
      </div>
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;

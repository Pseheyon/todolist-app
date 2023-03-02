import React, { useState } from "react";

const AddList = ({ lists, setList }) => {
  const [todo, setTodo] = useState("");
  const clickAddCreate = () => {
    const newlist = {
      id: lists.length + 1,
      list: todo,
    };
    setList([...lists, newlist]);
  };
  return (
    <nav>
      <span>
        <input
          className="todolist"
          placeholder="할것을 입력하시오"
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        <div className="btnWrap">
          <button onClick={clickAddCreate}>create</button>
        </div>
      </span>
    </nav>
  );
};

export default AddList;

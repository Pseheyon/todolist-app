import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { doneTdo, delteTodo } from "../reduxforder/modulse/todos";
import { Link } from "react-router-dom";
const DoneTodos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clicktodoDelete = (id) => {
    dispatch(delteTodo(id));
  };
  const clickisDon = (a) => {
    dispatch(doneTdo(a));
  };
  return (
    <div>
      <h1>done</h1>
      <div className="box_wrap">
      {todos.map((todo) =>
        //3항을 사용하여 isdon이 true인 친구만 보여주려면
        todo.isdon == true ? (
          // 3항을 사용하여 edit의 불린갑에따라 다른 모습을 보여줄 수 있다.
          <div key={todo.id} className="box">
            <Link to={`/${todo.id}`}>
              <div className="detail">
                <span>{todo.id}.</span> <span> 상세보기</span>
              </div>
            </Link>
            <div className="box_title">{todo.title}</div>
            <div className="box_todolist">{todo.todolist}</div>
            <div className="buttonWrap">
              <button onClick={() => clicktodoDelete(todo.id)}>삭제하기</button>
              <button onClick={() => clickisDon(todo)}>취소</button>
            </div>
          </div>
        ) : null
      )}
      </div>
    </div>
  );
};

export default DoneTodos;


import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { doneTdo, editTodo, delteTodo } from "../reduxforder/modulse/todos";
import TodosList from "./TodosList";

const EditeTodos = ({ todo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editTodolist, setEditTodolist] = useState(todo.todolist);
  const todos = useSelector((state) => state.todos);
  const clicktodoDelete = (id) => {
    dispatch(delteTodo(id));
  };
  const clickisEdit = (todoId, editTitle, editTodolist) => {
    dispatch(editTodo(todoId, editTitle, editTodolist));
    console.log(todoId);
  };
  const updates = { editTitle, editTodolist };
  return (
    <>
      {edit ? (
        <div key={todo.id} className="box_txt_warp">
          <input
            className="box_title"
            type="text"
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
          />
          <input
            className="box_todolist"
            type="text"
            value={editTodolist}
            onChange={(e) => setEditTodolist(e.target.value)}
          />

          <div className="buttonWrap">
          <button
            onClick={() => {
              // clickisEdit(todo.id, editTitle, editTodolist);
              setEdit((pre) => !pre);
            }}
          >
            수정하기
          </button>
          </div>
        </div>
      ) : (
        <div key={todo.id} className="box_txt_warp">
          <div className="box_title">{updates.editTitle}</div>
          <div className="box_todolist">{updates.editTodolist}</div>

          <div className="buttonWrap">
          <button
            onClick={() => {
              //clickisEdit(todo.id, editTitle, editTodolist);
              setEdit(!edit);
            }}
          >
            변경
          </button>
          </div>
        </div>
      )}
    </>
  );
};
export default EditeTodos;
const Stbutton = styled.button`
  width: 48%;
 
`
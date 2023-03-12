import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../reduxforder/modulse/todos";
import GlobalStyle from "./createGlobalStyle";

const TodolistContainer = () => {
  const [title, seTilte] = useState("");
  const [todolist, seTodolist] = useState("");
  const todos = useSelector((state) => state.todos);
  // const { id, isdon } = todos;
  const dispatch = useDispatch();
  const newInfo = { title, todolist };


  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();
    // if (title === "") return;{}
    dispatch(addTodo({ title, todolist, todos }));
  },[newInfo]);

// const onSubmitHandler=()=>{
//   //preventDefault();
//   dispatch(addTodo(title, todolist, todos))
// }


  return (
    <>
      <div className="navTodo">
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <form onSubmit={onSubmitHandler}>
        <StNavWrapper className="inputTodoWrapper">
          <StdisplayFlexTitlewrap>
          <StdisplayFlex className="titleWrapper">
            <Sth2>제목 :</Sth2>
            <StInputbox 
              type="text"
              value={title}
              required
              placeholder="제목을 입력하세요"
              onChange={(e) => {
                seTilte(e.target.value);
              }}
            ></StInputbox>
          </StdisplayFlex>
          <StdisplayFlex className="toDosWrapper">
          <Sth2>내용 :</Sth2>
            <StInputbox 
              type="text"
              value={todolist}
              required
              placeholder="내용을 입력하세요"
              onChange={(e) => {
                seTodolist(e.target.value);
              }}
            ></StInputbox>
          </StdisplayFlex>
          </StdisplayFlexTitlewrap>
          <StbtnInputlist>추가하기</StbtnInputlist>
        </StNavWrapper>
      </form>
    </>
  );

};

export default TodolistContainer;
  
const StbtnInputlist =styled.button`
border-radius: 50px;
padding: 1%;
height: 50%;
`
const StNavWrapper =styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 4% 2%;
overflow: hidden;
box-sizing: border-box;
align-items: center;
background-color: beige;
border: 3px dashed #e2e28b;
border-radius: 20px;

`;
const StdisplayFlex =styled.div`
display: flex;
width: 100%;
height: 70%;
justify-content: space-between;
align-items: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const StdisplayFlexTitlewrap =styled.div`
display: flex;
width: 70%;
justify-content: space-between;
`
const StInputbox = styled.input`
font-size: 20px;
display: flex;
align-items: center;
margin: 0;
padding: 2% 1%;
height: 80%;
`
const Sth2 =styled.h2`
width: 25%;
margin-right: 2%;
`

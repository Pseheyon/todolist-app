import React from 'react'
import { useSelector } from 'react-redux';
import {useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './createGlobalStyle';

const Detail = () => {
  const param = useParams();

  const todos = useSelector((state) =>state.todos)
  const todo = todos.find((todo) => todo.id === parseInt(param.id));
  const navigate = useNavigate();
  return( 
<>
<GlobalStyle />

<StDetailBoxWrap className='box_wrap detail_box_wrapp' >
<StDetailBox className='box detail_box'>
    <h1>{todo.title}</h1>
    <h5>{todo.todolist}</h5>
    <button onClick={()=>{
      navigate("/")
    }}>이전으로</button>
  </StDetailBox>
</StDetailBoxWrap></>
  );
}

export default Detail

const StDetailBoxWrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`
const StDetailBox = styled.div`
  margin: 0 auto;
  margin-top: 50vh;
  transform: translateY(-50%);
  justify-content: center;
`
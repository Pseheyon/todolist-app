import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delteTodo, doneTdo, editTodo } from "../reduxforder/modulse/todos";
import EditeTodos from "./EditeTodos";
import { GlobalStyle } from "./createGlobalStyle";
import { Link } from "react-router-dom";

const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState();
  const [editTodolist, setEditTodolist] = useState();

  const clicktodoDelete = (id) => {
    dispatch(delteTodo(id));
  };
  const clickisDon = (a) => {
    dispatch(doneTdo(a));
  };
  const clickisEdit = (todoId, editTitle, editTodolist) => {
    dispatch(editTodo(todoId, editTitle, editTodolist));
    console.log(todoId);
  };

  return (
    <div className="working_wrap">
      {/* <h1>done</h1>
      {todos.map((todo) =>
        //3항을 사용하여 isdon이 false인 친구만 보여주려면
        todo.isdon == true ? (
          <div key={todo.id}>
            {todo.title}
            {todo.todolist}
            <div>
              <button onClick={() => clicktodoDelete(todo.id)}>삭제하기</button>
              <button onClick={() => clickisDon(todo)}>취소</button>
            </div>
          </div>
        ) : null
      )}
      완료된 투두만 보여주세요 */}
      <h1>working</h1>
      <div className="box_wrap">
        {todos.map((todo) =>
          //3항을 사용하여 isdon이 true인 친구만 보여주려면
          todo.isdon == false ? (
            // 3항을 사용하여 edit의 불린갑에따라 다른 모습을 보여줄 수 있다.
            // edit ? (
            // <div key={todo.id}>
            //   <input
            //     type="text"
            //     value={editTitle}
            //     onChange={(event) => setEditTitle(event.target.value)}
            //   />
            //   <input
            //     type="text"
            //     value={editTodolist}
            //     onChange={(e) => setEditTodolist(e.target.value)}
            //   />
            //   <button
            //     onClick={() => {
            //       dispatch(editTodo(todo, updates));
            //       setEdit((pre) => !pre);
            //     }}
            //   >
            //     수정하기!
            //   </button>
            // </div>
            //   <EditeTodos todo={todo} key={todo.id} />
            // ) : (
            <div key={todo.id} className="box">
              {/* {todo.title}
            {todo.todolist} */}
            <Link to={`/${todo.id}`}>
              <div className="detail">
                <span>{todo.id}.</span> <span> 상세보기</span>
              </div>
            </Link>
              <EditeTodos
                todo={todo}
                key={todo.id}
                onClick={() => clickisEdit(todo.id, editTitle, editTodolist)}
              />
              <div className="buttonWrap">
                <button onClick={() => clicktodoDelete(todo.id)}>
                  삭제하기
                </button>
                <button onClick={() => clickisDon(todo)}>완료</button>
              </div>
            </div>
          ) : //  )
          null
        )}
      </div>
    </div>
  );
};

export default TodosList;

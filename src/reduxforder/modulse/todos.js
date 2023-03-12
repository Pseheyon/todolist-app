const ADD_TODO = "ADD_TODO";
export const addTodo = (todos) => {
  return { type: ADD_TODO, todos };
  // console.log("ADD_TODO", payload);
};

const DELETE_TODO = "DELETE_TODO";
export const delteTodo = (payload) => {
  return { type: DELETE_TODO, payload: payload };
};

const DONE_TODO = "DONE_TODO";
export const doneTdo = (payload) => {
  return { type: DONE_TODO, payload };
};

const EDIT_TODO = "EDIT_TODO";
export const editTodo = (todo, editTitle, editTodolist) => {
  return {
    type: EDIT_TODO,
    todo,
    editTitle,
    editTodolist,
  };
};

//초기 상태값(state)
const initialState = [
  {
    id: 1,
    title: "그냥 공부하기",
    todolist: "열심히하기",
    isdon: false,
  },
  {
    id: 2,
    title: "그냥 공부하기",
    todolist: "열심히하기",
    isdon: false,
  },
  {
    id: 3,
    title: "화이팅하기",
    todolist: "열심히하기",
    isdon: false,
  },
  {
    id: 4,
    title: "화이팅하기",
    todolist: "열심히하기",
    isdon: false,
  },
];

//Reducer state의 변화를 일으키는 함수 // input : state와 action
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      //어떤 로직을 써야 ... 추가가 될까 ? ?
      //payload는 새로운 객체 값!
      //return안에는 무조건 initialstate와 형이 동일해야한다~
      const newTodo = {
        id: state.length + 1,
        title: action.todos.title,
        todolist: action.todos.todolist,
        isdon: false,
      };
      return [...state, newTodo];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case DONE_TODO:
      // isdon 값을 바꿔주자 !
      const newList = state.map(
        (item) =>
          item.id === action.payload.id ? { ...item, isdon: !item.isdon } : item

        // item.isdon ? false : true
      );
      return newList;

    case EDIT_TODO:
      const todoId = action.todo.id;
      const idxtodo = state.findIndex((item) => item.id == todoId);

      const editTodo = {
        id: todoId,
        title: action.todo.editTitle,
        todolist: action.todo.editTodolist,
        isdon: action.todo.isdon,
      };
      const editedList = [...state];

      editedList.splice(idxtodo, 1, editTodo);
      // 필요한 정보 : todo의 아이디값, state에서 todo의 인덱스값 => const 선언
      //findIndex()
      //splice todo의 인덱스값 부터 1개를 삭제하고, 위의 수정된 항목을 추가해주면

      return editedList;

    default:
      return state;
  }
};
export default todos;

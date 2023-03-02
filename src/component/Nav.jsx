const Nav = ({ todo, setTodo, isClicked }) => {
  // console.log(lists)

  return (
    <>
      <input
        className="todolist"
        placeholder="할것을 입력하시오"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </>
  );
};

export default Nav;
// 화이팅..!

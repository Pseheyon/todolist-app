import Nav from "./component/Nav";
import List from "./component/List";
import "./App.css";
import Btn from "./component/Btn";
import { useState } from "react";
import className from "classnames";

function App() {
  const [lists, setList] = useState([
    { id: 1, list: "후후 난이걸 우습게 여겼다", isClicked: false },
    { id: 2, list: "밤까지 달려라~~", isClicked: false },
  ]);
  const [todo, setTodo] = useState("");

  const clickListDelete = (id) => {
    const newList = lists.filter((list) => list.id !== id);
    setList(newList);
  };
  //const [isClicked, setIsClicked] = useState(false);
  //const done = { isClicked: true };

  const clickListDone = (id) => {
    const doneList = lists.map((list) =>
      list.id === id ? { ...list, isClicked: !list.isClicked } : list
    );
    setList(doneList);
    console.log(doneList);
  };
  // const clickListEdit = (id) => {
  //   const editlist = {
  //     id: id,
  //     list: id.todo,
  //     isClicked: false,
  //   };
  //   setList([...lists, editlist]);
  // };

  const clickAddCreate = () => {
    const newlist = {
      id: lists.length + 1,
      list: todo,
      isClicked: false,
    };
    setList([...lists, newlist]);
  };

  return (
    <>
      <div>
        <nav>
          <span>
            <Nav
              list={todo}
              value={todo}
              setTodo={setTodo}
              clickAddCreate={clickAddCreate}
            ></Nav>
            <div className="btnWrap">
              <Btn onClick={clickAddCreate}>create</Btn>
            </div>
          </span>
        </nav>
      </div>
      <List key={lists.key}>
        {lists.map((item) => {
          const isClicked = item.isClicked;
          return (
            <li key={item.id} className={className("list", { isClicked })}>
              {item.list}
              <div className="btnWrap">
                <Btn onClick={() => clickListDelete(item.id)}>delete</Btn>
                <Btn onClick={() => clickListDone(item.id)}>
                  {item.isClicked ? "undone" : " done"}
                </Btn>
                {/* <Btn onClick={() => clickListEdit(item.id)}>
                  {item.isClicked ? "edit" : " create"}
                </Btn> */}
              </div>
            </li>
          );
        })}
      </List>
    </>
  );
}

export default App;

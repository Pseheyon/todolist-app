import React from "react";

const Btn = (props) => {
  // const [btn, setBtn] = useState();
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Btn;

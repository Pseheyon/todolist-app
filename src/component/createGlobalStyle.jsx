import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    
    font-family: Georgia, 'Times New Roman', Times, serif;
    line-height: 1.5;

  }
  body{
    /* padding: 2%;
    overflow: hidden;
    box-sizing: border-box; */
  }
  
  .navTodo{
    width: 100%;
    display: flex;
    border: 2px solid #2c6a6c;
    border-top: none;
    justify-content: space-between;
    padding: 2%;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #51b9bc;
    margin-bottom: 1%;
    font-weight: bolder;
    border-radius: 0 0 10px 10px;
    color: white;
  }
  .box_wrap{
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    gap: 2%;  
    
  }
  .box {
    width: 17.5%;
    margin: 1% 0;
    box-shadow: 5px 5px 10px #99b3b3;
    border-radius: 30px;
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: white;
  }
  .detail{
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    padding-bottom: 5%;
    cursor: pointer;
  }
  .box_wrap >h1{
    flex: 1;
    width: 100%;
  }
  .buttonWrap{
    display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 4%;
  flex-direction: row-reverse;
  }
  .buttonWrap >button{
    width: 48%;
  }
  button{
    border: 2px solid #2c6a6c;
    border-radius: 10px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: #51b9bc;
    color: white;
    font-weight: bolder;
    transition: all 0.3s;
    cursor: pointer;
  }
  button:hover{
    background-color: darksalmon;
    color: white;
    font-weight: bolder;
    border:2px solid #b1674e;
  }
  input{
    align-items: center;
    justify-content: center;
    display: inline-block;
    border: none;
    border-bottom: 1px solid gray;
    background-color: transparent;
    margin: 0.5% auto 6% auto;
    width: 80%;
  }
  input:focus {outline:none;}
  .box_txt_warp{
    width: 100%;
    
  }
  .box_title{
    width: 100%;
    font-size: 1.5rem;
    font-weight: bolder;
    //padding: 0.5% auto;
    margin: 1% auto 6% auto;
   // border-bottom: 1px solid gray;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .box_todolist{
    width: 100%;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 100;
    margin: 3% auto 6% auto;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .detail_box_wrapp{
    width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  }
  .detail_box{
    margin: 0 auto;
  margin-top: 50vh;
  transform: translateY(-50%);
  justify-content: center;
  }
`;
  
export default GlobalStyle;

import { useContext } from "react";
import Chat from "../components/Chat";
import Child from "../components/Child";
import ThemeButton from "../components/ContextEx2/ThemeToggler";
import ContextEx from "../components/ContextExample/ContextEx";
import CounterUR from "../components/counterUsingUseReducer/CounterUR";
import ParentCrudReducer from "../components/CRUD todo with reducer/ParentCrudReducer";
import AddItem from "../components/CRUD todo/AddItem";
import ParentCrud from "../components/CRUD todo/ParentCrud";
import CrudOp from "../components/CRUD/CrudOp";
import Form from "../components/filtered-list-program/Form";
import JsxButton from "../components/JsxButton";
import Parent2 from "../components/lifting-the-state-up/parent2";
import ParentComp from "../components/lifting-the-state-up/parentComp";
import MapHigherOrderFunction from "../components/MapHigherOrderFunction";
import Parent from "../components/parent";
import PlayButton from "../components/PlayButton";
import StateUpdate from "../components/StateUpdate";
import Thumbnail from "../components/ThumbNail";
import UpdatingObjectsInState from "../components/UpdatingObjectsInState";
// import ThemeContext from "../components/ContextEx2/ThemeContext";
import ParentRCCH from "../components/reducer-context-customHook-together/ParentRCCH";
import RefForFocus from "../components/focusing a text input/RefForFocus";
import DataFetch from "../components/useEffect'sEffect/DataFetch";

function App() {
  const arr = [
    { myName: "ashish", myClass: 10, key: 1 },
    { myName: "ankita", myClass: 10, key: 2 },
    { myName: "kiran", myClass: 12, key: 3 },
    { myName: "harshita", myClass: 15, key: 4 },
    { myName: "archit", myClass: 78, key: 5 },
  ];
  return (
    <>
      {/* <Thumbnail></Thumbnail>
      <Thumbnail></Thumbnail>
      <Thumbnail></Thumbnail> */}
      {/* <Parent>
        <Child></Child>
        <Child></Child>
        <Child></Child>
      </Parent> */}
      {arr.map((ar) => {
        return (
          <MapHigherOrderFunction
            myName={ar.myName}
            myClass={ar.myClass}
            key={ar.key}
          ></MapHigherOrderFunction>
        );
      })}
      <JsxButton
        onPlay={() => console.log(`playing...${Math.random()}`)}
        onPause={() => console.log("pause")}
      >
        play
      </JsxButton>
      {/* <PlayButton
        onClick={() => alert(`playing...${Math.random()}`)}
      ></PlayButton> */}
      <StateUpdate></StateUpdate>
      <Chat></Chat>
      <UpdatingObjectsInState></UpdatingObjectsInState>
      <ParentComp></ParentComp>
      <Parent2></Parent2>
      <Form></Form>
      <CrudOp></CrudOp>
      <ParentCrud></ParentCrud>
      <ParentCrudReducer></ParentCrudReducer>
      <br></br>
      <br></br>
      <CounterUR></CounterUR>
      <ContextEx></ContextEx>

      <ThemeButton></ThemeButton>

      <ParentRCCH></ParentRCCH>

      <RefForFocus></RefForFocus>
      <br />
      <DataFetch />
    </>
  );
}

export default App;

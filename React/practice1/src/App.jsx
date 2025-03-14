import Child from "../components/Child";
import JsxButton from "../components/JsxButton";
import MapHigherOrderFunction from "../components/MapHigherOrderFunction";
import Parent from "../components/parent";
import PlayButton from "../components/PlayButton";
import StateUpdate from "../components/StateUpdate";
import Thumbnail from "../components/ThumbNail";

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
    </>
  );
}

export default App;

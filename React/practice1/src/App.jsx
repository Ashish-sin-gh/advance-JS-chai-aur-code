import Child from "../components/Child";
import Parent from "../components/parent";
import Thumbnail from "../components/ThumbNail";

function App() {
  return (
    <>
      {/* <Thumbnail></Thumbnail>
      <Thumbnail></Thumbnail>
      <Thumbnail></Thumbnail> */}
      <Parent>
        <Child></Child>
        <Child></Child>
        <Child></Child>
      </Parent>
    </>
  );
}

export default App;

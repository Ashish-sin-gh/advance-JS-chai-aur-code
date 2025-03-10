import JsxButton from "./JsxButton";

function PlayButton({ onClick }) {
  return (
    <>
      <JsxButton onClick={onClick}>Play the video</JsxButton>
    </>
  );
}
export default PlayButton;

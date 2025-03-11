function JsxButton({ onPlay, onPause, children }) {
  let playing = true;
  function isPlaying() {
    if (playing) onPlay();
    else onPause();
    playing = !playing;
  }

  return (
    <>
      <button onClick={isPlaying}>{children}</button>;
    </>
  );
}

export default JsxButton;

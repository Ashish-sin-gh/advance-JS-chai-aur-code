function JsxButton({ onClick, children }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>;
    </>
  );
}

export default JsxButton;

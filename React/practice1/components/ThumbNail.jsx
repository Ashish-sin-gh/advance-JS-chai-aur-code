function Thumbnail() {
  let topic1 = "unboxing m4";
  return (
    <div>
      <section>
        <img
          src="https://dummyimage.com/200x100/8c8a8c/dadceb.gif&text=thumbnail+loading"
          alt="placeholder"
        ></img>
      </section>
      <section>
        <h3>{topic1}</h3>
        <p>channel name</p>
        <p>likes</p>
      </section>
    </div>
  );
}

export default Thumbnail;

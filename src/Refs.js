import React, { useEffect, useRef } from "react";

function Refs() {
  const name = useRef(null);
  const pass = useRef(null);
  function submit(e) {
    e.preventDefault();
    console.log(name.current.value);
    console.log(pass.current.value);
    name.current.value = "";
    pass.current.value = "";
  }
  useEffect(() => {
    name.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={submit}>
        <input ref={name} type="text" />
        <input ref={pass} type="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Refs;

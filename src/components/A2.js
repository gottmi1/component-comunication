import React, { useState } from "react";

export default function A2() {
  const [value, setValue] = useState("아직 안 바뀜");
  return (
    <div>
      <p>{value}</p>
      <B setValue1={setValue} />
    </div>
  );
}

function B({ setValue1 }) {
  return (
    <div>
      <p>B 컴포넌트</p>
      <C setValue2={setValue1} />
    </div>
  );
}

function C({ setValue2 }) {
  return (
    <div>
      <p>C 컴포넌트</p>
      <D setValue3={setValue2} />
    </div>
  );
}

function D({ setValue3 }) {
  return (
    <div>
      <p>D 컴포넌트</p>
      <E setValue4={setValue3} />
    </div>
  );
}

function E({ setValue4 }) {
  function click() {
    setValue4("바뀜");
  }
  return (
    <div>
      <p>E 컴포넌트</p>
      <button onClick={click}>바꿔</button>
    </div>
  );
}

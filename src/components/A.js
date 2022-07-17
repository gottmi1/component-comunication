import React, { useState } from "react";

export default function A() {
  const [value, setValue] = useState("아직 안 바뀜");
  const onClick = () => {
    if (value === "아직 안 바뀜") {
      setValue("바뀜");
    } else {
      setValue("아직 안 바뀜");
    }
  };
  return (
    <div>
      <B value={value} />
      <button onClick={onClick}>E값 바꾸기</button>
    </div>
  );
}

function B(props) {
  return (
    <div>
      <p>B컴포넌트</p>
      <C value={props.value} />
    </div>
  );
}
function C(props) {
  return (
    <div>
      <p>C컴포넌트</p>
      <D value={props.value} />
    </div>
  );
}
function D(props) {
  return (
    <div>
      <p>D컴포넌트</p>
      <E value={props.value} />
    </div>
  );
}
function E(props) {
  return (
    <div>
      <p>E컴포넌트</p>
      <h3>{props.value}</h3>
    </div>
  );
}

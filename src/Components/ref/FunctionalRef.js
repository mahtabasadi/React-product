import React, { useEffect, useRef } from "react";

const FunctionalRef = () => {
  const Inputref = useRef();
  useEffect(() => {
    Inputref.current.focus();
  },[]);

  return (
    <div>
      <input type="text" ref={Inputref} /> 
    </div>

  );
};

export default FunctionalRef;



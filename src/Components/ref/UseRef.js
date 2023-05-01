// import { useEffect, useRef, useState } from "react";

// const UseRefExample = () => {
//   const [inputValue, setInputValue] = useState("");
//   const InputRef = useRef()

//   const ResetHandeler = () => {
//     setInputValue("");
//     InputRef.current.focus()
//   };

//   const ChangeHandeler = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       <input
//       type="text"
//       value={inputValue}
//       onChange={ChangeHandeler}
//       ref={InputRef}
//       />
//       <button onClick={ResetHandeler}>Reset</button>
//     </div>
//   );
// };

// export default UseRefExample;

import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [InputValue, SetInputvalue] = useState("");
  const previnputvalue = useRef();

  const onChange = (e) => {
    SetInputvalue(e.target.value);
  };

  console.log("re-render", InputValue);
  console.log("prevValue", previnputvalue.current);

  useEffect(() => {
    previnputvalue.current = InputValue
    console.log('useEffect',previnputvalue.current);
  }, [InputValue]);

  return (
    <div>
      <input
        type="text"
        value={InputValue}
        onChange={onChange}
      />
      <p>
        my name is {InputValue} and it used to be {previnputvalue.current}
      </p>
    </div>
  );
};

export default UseRef;

import { useState} from "react";

const useInput = (input) => {
  const [enteredInput, setEnteredInput] = useState(input);
  const [isTouched, setIsTouched] = useState(false);

  const inputhandler = (e) => {
    setEnteredInput(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  let inputHasError = false;
  if (isTouched && enteredInput === "") {
    inputHasError = true;
  }

  return {
    enteredInput,
    isTouched,
    inputhandler,
    inputBlurHandler,
    inputHasError,
  };
};

export default useInput;

import { useState } from "react";
import InputField from "./forms/input-field.js";
import BlackSubmitButton from "./forms/black-submit-button.js";


export default function Form(){

  const [disable, setDisable] = useState(true);

  return (
    <form
      className="mx-auto bg-white w-4/6"
    >
      <InputField
        name='email'  
        type='text'
      >
        Email
      </InputField>
      <InputField
        name='password'  
        type='password' 
      >
        Password
      </InputField>
      
      <BlackSubmitButton
        disabled={disable}
      >
        Iniciar Sesión
      </BlackSubmitButton>

    </form>
  );
};
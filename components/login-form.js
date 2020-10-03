import { Fragment, useState } from "react";
import InputField from "./forms/input-field.js";
import SubmitButton from "./forms/submit-button.js";


export default function Form(){

  const [disable, setDisable] = useState(true);

  return (
    <Fragment>
      <form
        className="mx-auto bg-white w-4/6"
      >
        <InputField
          name='name' 
          placeholder='Ecribe tu nombre' 
          type='text'
        >
          Email
        </InputField>
        <InputField
          name='password' 
          placeholder='Ecribe tu contraseña' 
          type='password' 
        >
          Password
        </InputField>
        
        <SubmitButton
          disabled={disable}
        >
          Iniciar Sesión
        </SubmitButton>

      </form>
    </Fragment>
  );
};
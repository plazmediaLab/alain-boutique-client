import { Fragment } from "react";
import InputField from "./forms/input-field.js";
import SubmitButton from "./forms/submit-button.js";


export default function Form(){
  return (
    <Fragment>
      <form
        className="mx-auto bg-white w-4/6"
      >
        <InputField
          name='name' 
          label='Nombre' 
          placeholder='Ecribe tu nombre' 
          type='text'
        />
        <InputField
          name='password' 
          label='Contraseña' 
          placeholder='Ecribe tu contraseña' 
          type='password' 
        />
        
        <SubmitButton title='Iniciar sesión' />
      </form>
    </Fragment>
  );
};
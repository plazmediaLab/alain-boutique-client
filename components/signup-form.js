import { useState } from "react";
import InputField from "./forms/input-field.js";
import BlueSubmitButton from "./forms/blue-submit-button.js";
import SelectRole from "./forms/select-role.js";

export default function SignUpForm(){

  const [disable, setDisable] = useState(true);
  const [role, setRole] = useState('');

  const handdleRole = (e) => {
    setRole(e.target.value);
  };

  return (
    <form className="mx-auto bg-white w-4/6">
      <InputField
        name='text'  
        type='text'
      >
        Nombre
      </InputField>
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
      <InputField
        name='password-repeat'  
        type='password' 
      >
        Confirmar password
      </InputField>

      <SelectRole handdleRole={ handdleRole } role={ role } />
      
      <BlueSubmitButton
        bg='p_blue-500'
        disabled={disable}
      >
        Regístrar
      </BlueSubmitButton>
    </form>
  );
};
import { useState, useEffect } from "react";
import InputField from "./forms/input-field";
import BlackSubmitButton from "./forms/black-submit-button";
import useAuth from 'hooks/useAuth';
import ErrorMsn from "./resources/error-msn";
import LoadingIcon from "./resources/loading-icon";


export default function Form(){

  const [disable, setDisable] = useState(true);
  const [dataform, setDataForm] = useState({email: '', password: ''});

  const [data, loading, error] = useAuth();

  useEffect(() => {
    if(dataform.email.trim() && dataform.password.trim()){
      setDisable(false);
    }else{
      setDisable(true);
    }
  }, [dataform]);

  const handdleData = (e) => {
    setDataForm({...dataform, [e.target.name]: e.target.value});
  };

  const handdleSubmit = e => {
    e.preventDefault();
    data(dataform.email, dataform.password);
  };

  return (
    <form
      className="mx-auto bg-white w-4/6"
      onSubmit={ e => handdleSubmit(e) }
    >
      <InputField
        name='email'
        type='email'
        handdleData={handdleData}
        err={ error && true }
      >
        Email
      </InputField>
      <InputField
        name='password'
        type='password'
        handdleData={handdleData}
        err={ error && true }
      >
        Password
      </InputField>

      { error ? <ErrorMsn message={error.message} /> : null }
      
      <BlackSubmitButton
        disabled={disable || loading}
      >
        { loading ? <LoadingIcon fill='#fff' w='16' h='16' classN='m-1 mx-auto'/> : 'Iniciar Sesión' }
      </BlackSubmitButton>


    </form>
  );
};
import { useState, useEffect } from 'react';
import InputField from './forms/input-field';
import BlackSubmitButton from './forms/black-submit-button';
import useLogin from 'hooks/useLogin';
import ErrorMsn from './resources/error-msn';
import LoadingIcon from './resources/loading-icon';

export default function Form() {
  const [disable, setDisable] = useState(true);
  const [dataform, setDataForm] = useState({
    email: 'adriangd.1337@gmail.com',
    password: '12345678'
  });

  const [login, loading, error] = useLogin();

  useEffect(() => {
    if (dataform.email.trim() && dataform.password.trim()) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [dataform]);

  const handdleData = (e) => {
    setDataForm({ ...dataform, [e.target.name]: e.target.value });
  };

  const handdleSubmit = (e) => {
    e.preventDefault();
    login(dataform);
  };

  return (
    // TODO · Quitar el valor por defecto de los Inputs 10/15/2020

    <form className="mx-auto bg-white w-4/6" onSubmit={(e) => handdleSubmit(e)}>
      <InputField
        name="email"
        type="email"
        handdleData={handdleData}
        err={error && true}
        value={dataform.email}>
        Email
      </InputField>
      <InputField
        name="password"
        type="password"
        handdleData={handdleData}
        err={error && true}
        value={dataform.password}>
        Password
      </InputField>

      {error ? <ErrorMsn message={error.message} /> : null}

      <BlackSubmitButton disabled={disable || loading}>
        {loading ? (
          <LoadingIcon fill="#fff" w="16" h="16" classN="m-1 mx-auto" />
        ) : (
          'Iniciar Sesión'
        )}
      </BlackSubmitButton>
    </form>
  );
}

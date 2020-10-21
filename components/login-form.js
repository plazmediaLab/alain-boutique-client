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
    if (dataform.email.trim() && dataform.password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [dataform]);

  const handleData = (e) => {
    setDataForm({ ...dataform, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dataform);
  };

  return (
    // TODO · Quitar el valor por defecto de los Inputs 10/15/2020

    <form className="mx-auto bg-white w-4/6" onSubmit={(e) => handleSubmit(e)}>
      <InputField
        name="email"
        type="email"
        handleData={handleData}
        err={error && true}
        value={dataform.email}>
        Email
      </InputField>
      <InputField
        name="password"
        type="password"
        handleData={handleData}
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

import InputField from './forms/input-field';
import useLogin from 'hooks/useLogin';
import ErrorMsn from './resources/error-msn';
import LoadingIcon from './resources/loading-icon';
import SubmitButton from './forms/submit-button';

export default function Form() {
  const [formik, loading, error] = useLogin();

  return (
    // TODO · Quitar el valor por defecto de los Inputs 10/15/2020

    <form className="mx-auto bg-white w-4/6" onSubmit={formik.handleSubmit}>
      <InputField
        name="email"
        type="email"
        err={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}>
        Email
      </InputField>
      <InputField
        name="password"
        type="password"
        err={formik.touched.password && formik.errors.password ? formik.errors.password : null}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}>
        Password
      </InputField>

      {error ? <ErrorMsn message={error.message} /> : null}

      <SubmitButton disabled={formik.isValid ? false : true} loading={loading}>
        {loading ? (
          <LoadingIcon fill="#fff" w="16" h="16" classN="m-1 mx-auto" />
        ) : (
          'Iniciar Sesión'
        )}
      </SubmitButton>
    </form>
  );
}

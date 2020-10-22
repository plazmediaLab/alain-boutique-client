import { useState } from 'react';
import InputField from './forms/input-field.js';
import BlueSubmitButton from './forms/blue-submit-button.js';
import SelectRole from './forms/select-role.js';
import LoadingIcon from './resources/loading-icon';
import useSignUp from 'hooks/useSignUp.js';
import ErrorMsn from 'components/resources/error-msn';

export default function SignUpForm() {
  const [role, setRole] = useState('');

  const [formik, loading, error] = useSignUp(role);

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  return (
    <form
      className={`mx-auto bg-white w-4/6 ${!formik.isValid ? 'mb-5' : 'mb-10'}`}
      onSubmit={formik.handleSubmit}>
      <InputField
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        err={formik.touched.name && formik.errors.name ? formik.errors.name : null}
        onBlur={formik.handleBlur}>
        Nombre
      </InputField>
      <InputField
        name="email"
        type="email"
        err={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}>
        Email
      </InputField>
      <InputField
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        err={formik.touched.password && formik.errors.password ? formik.errors.password : null}
        onBlur={formik.handleBlur}>
        Password
      </InputField>
      <InputField
        name="password_repeat"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password_repeat}
        err={
          formik.touched.password_repeat && formik.errors.password_repeat
            ? formik.errors.password_repeat
            : null
        }
        onBlur={formik.handleBlur}>
        Confirmar password
      </InputField>

      <SelectRole handleRole={handleRole} role={role} />

      <BlueSubmitButton
        bg="p_blue-500"
        disabled={formik.isValid && role ? false : true}
        loading={loading}>
        {loading ? <LoadingIcon fill="#fff" w="16" h="16" classN="m-1 mx-auto" /> : 'Regístrar'}
      </BlueSubmitButton>

      {error ? <ErrorMsn message={error.message} /> : null}
    </form>
  );
}

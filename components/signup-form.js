import { useEffect, useState } from 'react';
import InputField from './forms/input-field.js';
import BlueSubmitButton from './forms/blue-submit-button.js';
import SelectRole from './forms/select-role.js';
import LoadingIcon from './resources/loading-icon';

export default function SignUpForm() {
  // eslint-disable-next-line
  const [disable, setDisable] = useState(true);
  const [role, setRole] = useState('');
  const [loading] = useState(false);
  const [newuser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  useEffect(() => {
    if (newuser.name.trim() && newuser.email.trim() && newuser.password && newuser.role) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [newuser]);

  const handleRole = (e) => {
    setRole(e.target.value);
    setNewUser({ ...newuser, role: e.target.value });
  };

  const handleData = (e) => {
    setNewUser({ ...newuser, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, password_repeat } = newuser;

    if (password === password_repeat) {
      delete newuser['password_repeat'];
      const data = { ...newuser, role };
      console.log(data);
    }
  };

  return (
    <form className="mx-auto bg-white w-4/6" onSubmit={(e) => handleSubmit(e)}>
      <InputField name="name" type="text" handleData={handleData}>
        Nombre
      </InputField>
      <InputField name="email" type="text" handleData={handleData}>
        Email
      </InputField>
      <InputField name="password" type="password" handleData={handleData}>
        Password
      </InputField>
      <InputField name="password_repeat" type="password" handleData={handleData}>
        Confirmar password
      </InputField>

      <SelectRole handleRole={handleRole} role={role} />

      <BlueSubmitButton bg="p_blue-500" disabled={disable}>
        {loading ? <LoadingIcon fill="#fff" w="16" h="16" classN="m-1 mx-auto" /> : 'Regístrar'}
      </BlueSubmitButton>
    </form>
  );
}

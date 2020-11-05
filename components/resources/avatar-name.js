import AuthContext from 'context/Auth/AuthContext';
import { useContext, useEffect, useState } from 'react';

export default function AvatarName() {
  const [bg, setBg] = useState('carbon-300');
  const [color, setColor] = useState('carbon-600');
  const [letter, setLetter] = useState('');

  const authContext = useContext(AuthContext);
  const { user = '' } = authContext;

  const handleLetter = (string) => {
    const newLetter = string
      .split(' ')
      .map((item) => item.charAt(0))
      .slice(0, 2)
      .join('');

    setLetter(newLetter);
  };

  useEffect(() => {
    switch (user.role) {
      case 'PARNERTH_ROLE':
        setBg('teal-300');
        setColor('teal-600');
        break;
      case 'USER_ROLE':
        setBg('alain-blue-300');
        setColor('alain-blue-600');
        break;
    }
    handleLetter(user.name);
  }, []);

  return (
    <div
      className={`bg-${bg} text-${color} w-10 h-10 grid place-items-center uppercase font-medium rounded-full`}>
      <h1 className="text-lg tracking-wide">{letter}</h1>
    </div>
  );
}

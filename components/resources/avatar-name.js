import AuthContext from 'context/Auth/AuthContext';
import { useContext, useEffect, useState } from 'react';

export default function AvatarName() {
  const [bg, setBg] = useState('bg-carbon-300');
  const [color, setColor] = useState('text-carbon-600');
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
        setBg('bg-teal-300');
        setColor('text-teal-600');
        break;
      case 'USER_ROLE':
        setBg('bg-alain-blue-300');
        setColor('text-alain-blue-600');
        break;
    }
    handleLetter(user.name);
  }, []);

  return (
    <div
      className={`${bg} ${color} w-10 h-10 grid place-items-center uppercase font-medium rounded-full`}>
      <h1 className="text-lg tracking-wide">{letter}</h1>
    </div>
  );
}

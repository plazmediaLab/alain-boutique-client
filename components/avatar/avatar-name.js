import UserContext from 'context/User/UserContext';
import { useContext, useEffect, useState } from 'react';

export default function AvatarName() {
  const [bg, setBg] = useState('carbon-300');
  const [color, setColor] = useState('carbon-600');
  const [letter, setLetter] = useState('');

  const userContext = useContext(UserContext);
  const { user = '' } = userContext;

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
        setBg('orange-300');
        setColor('orange-600');
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
      className={`bg-${bg} text-${color} w-full h-full grid place-items-center uppercase font-medium`}>
      <h1>{letter}</h1>
    </div>
  );
}

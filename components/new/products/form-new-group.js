import InputField from 'components/forms/input-field';
import { useEffect, useState } from 'react';

export default function FormNewGroup({ setOpenNewGroup }) {
  const [h, setH] = useState('0px');
  const [w, setW] = useState('0px');

  useEffect(() => {
    if (process.browser) {
      const dimentions = document.getElementById('main');
      setH(dimentions.clientHeight);
      setW(dimentions.clientWidth);
    }
  }, []);

  const colors = [
    {
      name: 'rojo',
      value: 'red-500'
    },
    {
      name: 'anaranjado',
      value: 'orange-500'
    },
    {
      name: 'verde',
      value: 'green-500'
    },
    {
      name: 'yellow',
      value: 'yellow-500'
    },
    {
      name: 'té',
      value: 'teal-500'
    },
    {
      name: 'azul',
      value: 'blue-500'
    },
    {
      name: 'indigo',
      value: 'indigo-500'
    },
    {
      name: 'morado',
      value: 'purple-500'
    },
    {
      name: 'rosa',
      value: 'pink-500'
    }
  ];
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const color = document.getElementById('color').value;
    const name = document.getElementById('nameGroup').value;
    alert({ name, color });
  };

  return (
    <>
      <div className="absolute top-0 z-50">
        <form
          className="mx-auto bg-white shadow-2xl rounded-container z-30 absolute overflow-hidden"
          onSubmit={(e) => handleSubmit(e)}>
          <h3 className="p-3 text-center uppercase font-medium tracking-wide bg-gray-600 text-white">
            Nuevo grupo
          </h3>
          <section className="p-5">
            <InputField err="" name="nameGroup" value="Ropa de Evan">
              Nombre
            </InputField>
            <select
              name="color"
              id="color"
              className="py-2 px-3 rounded border border-gray-300 block w-full focus:border-p_blue-500 mb-4 appearance-none">
              <option value="#e2e8f0" label="--- Sin color ---"></option>
              {colors.map((color, index) => (
                <option value={color.value} key={index} className="p-10">
                  {capitalize(color.name)}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full p-3 rounded bg-teal-400 text-white uppercase font-light tracking-wide text-sm flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-1 inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
              Agregar
            </button>
          </section>
        </form>
        <button
          className="absolute top-0 cursor-default closeModal"
          onClick={() => setOpenNewGroup(false)}></button>
      </div>
      <style jsx>{`
        form {
          width: calc(${w}px - 1.2rem);
          top: 147px;
          left: 0.6rem;
        }
        @media (max-width: 520px) {
          form {
            top: 143px;
          }
        }
        div {
          background-color: rgba(0, 0, 0, 1);
        }
        button.closeModal {
          height: ${h}px;
          width: ${w}px;
          z-index: 0;
          background-color: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}

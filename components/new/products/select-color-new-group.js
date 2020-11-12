export default function SelectColorNewGroup({ children, color, setColor }) {
  const colors = [
    {
      name: 'rojo',
      value: '#E53E3E'
    },
    {
      name: 'anaranjado',
      value: '#ED8936'
    },
    {
      name: 'yellow',
      value: '#ECC94B'
    },
    {
      name: 'verde',
      value: '#48BB78'
    },
    {
      name: 'té',
      value: '#38B2AC'
    },
    {
      name: 'azul',
      value: '#4299E1'
    },
    {
      name: 'indigo',
      value: '#667EEA'
    },
    {
      name: 'morado',
      value: '#9F7AEA'
    },
    {
      name: 'rosa',
      value: '#ED64A6'
    }
  ];
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  return (
    <div className="relative">
      <label
        htmlFor="color"
        className="uppercase text-label tracking-wider font-medium text-gray-500 block mb-1">
        {children}
      </label>
      <div className="color-selector w-4 h-4 rounded-full absolute pointer-events-none"></div>
      <select
        onChange={(e) => setColor(e.target.value)}
        name="color"
        id="color"
        className="cursor-pointer truncate py-2 pl-8 pr-10 rounded border border-gray-300 block w-full focus:border-p_blue-500 mb-4 appearance-none">
        <option value="#E2E8f0" label="--- Sin color ---"></option>
        {colors.map((color, index) => (
          <option value={color.value} key={index} className={`p-10`}>
            {capitalize(color.name)}
          </option>
        ))}
      </select>
      <svg
        className="w-5 h-5 absolute pointer-events-none text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <style jsx>{`
        div.color-selector {
          top: calc(50% + 0.1rem);
          left: 0.7rem;
          background-color: ${color};
        }
        svg {
          top: calc(50% + 0.1rem);
          right: 0.7rem;
        }
      `}</style>
    </div>
  );
}

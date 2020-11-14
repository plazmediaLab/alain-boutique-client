import { useEffect, useState } from 'react';

export default function SwitchProduct({ setState }) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    setState(!value ? 'ACTIVE' : 'STOCK');
  }, [value]);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <section className="grid gap-3 w-full items-center">
      <p className="text-xs uppercase text-gray-500 font-light">Mostrar productos en</p>
      <input
        className="react-switch-checkbox hidden"
        type="checkbox"
        name="switch-state"
        id="switch-state"
        onChange={handleChange}
        checked={value}
      />
      <label
        htmlFor="switch-state"
        className="react-switch-label flex items-center justify-between relative cursor-pointer border border-gray-300 bg-gray-200 rounded-full w-full">
        <span className="react-switch-button rounded-full bg-white shadow w-1/2" id="switch" />
        <div className="grid items-center justify-around grid-cols-2 w-full text-center text-xs uppercase font-medium">
          <p
            className={`text-alain-blue-500 transition-opacity duration-200 ${
              !value ? 'opacity-100' : 'opacity-0'
            }`}>
            venta
          </p>
          <p
            className={`text-alain-blue-900 transition-opacity duration-200 ${
              value ? 'opacity-100' : 'opacity-0'
            }`}>
            stock
          </p>
        </div>
      </label>
      <style jsx>{`
        section {
          grid-template-columns: auto 1fr;
        }
        label {
          height: 34px;
          transition: background-color 0.2s;
        }
        span {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          height: 26px;
          transition: 0.2s;
        }
        input[type='checkbox']:checked + label > span {
          left: calc(100% - 3px);
          transform: translateX(-100%);
        }
        label:active span {
          width: 80%;
        }
        p {
          z-index: 1;
        }
      `}</style>
    </section>
  );
}

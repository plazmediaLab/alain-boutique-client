import InputField from 'components/forms/input-field';
import useGroupNew from 'hooks/useGroupNew';
import { useEffect, useState } from 'react';
import SelectColorNewGroup from './select-color-new-group';
import SubmitButtonNewGroup from './submit-button-new-group';

export default function FormNewGroup({ setOpenNewGroup }) {
  const [h, setH] = useState('0px');
  const [w, setW] = useState('0px');
  const [color, setColor] = useState('#E2E8f0');

  const [formik, loading] = useGroupNew(setOpenNewGroup, color);

  useEffect(() => {
    if (process.browser) {
      const dimentions = document.getElementById('main');
      setH(dimentions.clientHeight);
      setW(dimentions.clientWidth);
    }
  }, []);

  return (
    <>
      <div className="container absolute top-0">
        <form
          className="mx-auto bg-white shadow-2xl rounded-container z-40 absolute overflow-hidden"
          onSubmit={formik.handleSubmit}>
          <h3 className="p-3 text-center uppercase font-medium tracking-wide bg-gray-600 text-white">
            Nuevo grupo
          </h3>
          <section className="p-5">
            <InputField
              name="name"
              err={formik.touched.name && formik.errors.name ? formik.errors.name : null}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}>
              Nombre
            </InputField>
            <SelectColorNewGroup setColor={setColor} color={color}>
              Color
            </SelectColorNewGroup>
            <SubmitButtonNewGroup
              loading={loading}
              disabled={loading || formik.isValid ? false : true}
            />
          </section>
        </form>
        <button
          disabled={loading}
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
        div.container {
          background-color: rgba(0, 0, 0, 1);
        }
        button.closeModal {
          height: ${h}px;
          width: ${w}px;
          z-index: 0;
          background-color: rgba(0, 0, 0, 0.2);
        }
        button:disabled.closeModal {
          opacity: 100% !important;
          background-color: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
}

import LoadingIcon from 'components/resources/loading-icon';
import ProductsContext from 'context/Products/ProductsContext';
import useGroupDestroy from 'hooks/useGroupDestroy';
import { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import FormNewGroup from './form-new-group';

export default function SelectGroup() {
  const [openNewGroup, setOpenNewGroup] = useState(false);

  const productsContext = useContext(ProductsContext);
  const { active_group = {}, groups = [], setActiveGroupMethod } = productsContext;

  const [groupDestroy, loading] = useGroupDestroy();

  const handleActiveGroup = (e) => {
    const { color, _id, slug } = groups.find((x) => x.slug === e.target.value);
    setActiveGroupMethod({ color, _id, slug });
  };

  return (
    <>
      <div className="container grid items-center gap-2 rounded-card border border-gray-300 p-1 mb-3 relative">
        {loading ? (
          <div className="absolute icon-loading">
            <LoadingIcon fill="#e2e8f0" />
          </div>
        ) : (
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
        )}
        <button
          disabled={loading || !active_group._id}
          className="bg-gray-100 text-red-300 w-8 h-8 grid place-items-center rounded"
          onClick={() => groupDestroy(active_group._id)}>
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <select
          disabled={loading || !active_group._id}
          name="groups"
          id="groups"
          className={`group flex-1 appearance-none w-full bg-transparent truncate py-1 pl-0 pr-3 cursor-pointer`}
          onChange={(e) => handleActiveGroup(e)}>
          {!active_group._id ? (
            <option value="" label="--- No tienes grupos creados ---"></option>
          ) : (
            groups.map((group) => (
              <option
                value={group.slug}
                defaultValue={group.slug}
                key={group._id}
                selected={group.slug === active_group.slug}
                className="text-alain-blue-800">
                {group.name}
              </option>
            ))
          )}
        </select>
        <button
          disabled={loading}
          className={`${
            !active_group._id
              ? 'text-white bg-alain-blue-400 hover:bg-alain-blue-500 shadow-md'
              : 'text-alain-blue-400 bg-alain-blue-100'
          } w-8 h-8 grid place-items-center rounded`}
          onClick={() => setOpenNewGroup(!openNewGroup)}>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
          </svg>
        </button>
        {openNewGroup
          ? ReactDOM.createPortal(
              <FormNewGroup setOpenNewGroup={setOpenNewGroup} />,
              document.getElementById('portal_node')
            )
          : null}
      </div>
      <style jsx>{`
        select.group {
          color: ${!active_group._id ? '#a0aec0' : active_group.color};
          background-color: transparent;
        }
        div.container {
          grid-template-columns: auto 1fr auto;
        }
        div.icon-loading {
          right: 2.7rem;
        }
        svg {
          top: calc(50% - 0.6rem);
          right: 2.7rem;
        }
      `}</style>
    </>
  );
}

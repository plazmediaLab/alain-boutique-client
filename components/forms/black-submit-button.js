import React from 'react';

export default function BlackSubmitButton(props) {
  return (
    <button
      type="submit"
      className={`${
        props.disabled
          ? 'opacity-50 cursor-not-allowed'
          : `hover:border-alain-blue-800 hover:bg-alain-blue-800`
      } tracking-widest leading-6 transition duration-200 ease-in-out bg-alain-blue-900 border border-alain-blue-900 rounded uppercase w-full text-xs font-medium py-2 mt-4 text-white`}
      {...props}>
      {props.children}
    </button>
  );
}

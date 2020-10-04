import React from 'react';

export default function BlueSubmitButton(props){
  return (
    <button 
      type="submit"
      className={
        `${props.disabled ? 'opacity-50 cursor-not-allowed' : `hover:border-alain-blue-600 hover:bg-alain-blue-600`} tracking-widest leading-6 transition duration-200 ease-in-out bg-alain-blue-500 border border-alain-blue-500 rounded uppercase w-full text-xs font-medium py-2 mt-4 text-white`
      }
      {...props}
    >
      { props.children }
    </button>
  );
};
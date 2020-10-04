import React from 'react';

export default function BlackSubmitButton(props){
  return (
    <button 
      type="submit"
      className={
        `${props.disabled ? 'opacity-50 cursor-not-allowed' : `hover:border-carbon-500 hover:bg-carbon-500`} tracking-widest leading-6 transition duration-200 ease-in-out bg-carbon-800 border border-carbon-800 rounded uppercase w-full text-xs font-medium py-2 mt-4 text-white`
      }
      {...props}
    >
      { props.children }
    </button>
  );
};
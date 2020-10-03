import React from 'react';

export default function SubmitButton(props, { color = 'white', bg = 'carbon-800', hover = 'carbon-500' }){
  return (
    <button 
      type="submit"
      className={
        `${props.disabled ? 'opacity-50 cursor-not-allowed' : `hover:border-${hover} hover:bg-${hover}`} tracking-widest leading-6 transition duration-200 ease-in-out bg-${bg} border border-${bg} rounded uppercase w-full text-xs font-medium py-2 mt-4 text-${color}`
      }
      {...props}
    >
      { props.children }
    </button>
  );
};
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ message }) {
  return (
    <>
      <section className="absolute top-0 w-full z-10 text-alain-blue-800 p-2 flex justify-end">
        <div className="rounded-card overflow-hidden shadow-md w-full md:w-3/5 lg:w-2/6 ">
          <button></button>
          <div className="bg-green-500 text-white p-2">
            <svg
              className="w-10 h-10 block mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="p-3">
            <h1>{message}</h1>
          </div>
        </div>
      </section>
      <style global jsx>{`
        #modal_portal {
          position: relative;
        }
      `}</style>
      <style jsx>{`
        section > div {
          background: rgba(247, 250, 252, 0.2);
          backdrop-filter: blur(5px);
        }
      `}</style>
    </>
  );
}

export default function ModalSuccess({ message, opneModal = false }) {
  return opneModal
    ? ReactDOM.createPortal(<Modal message={message} />, document.getElementById('modal_portal'))
    : null;
}

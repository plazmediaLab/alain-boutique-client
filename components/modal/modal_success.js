import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ message }) {
  const closeModal = () => {
    const container = document.getElementById('modal_portal');
    const modalSuccess = document.querySelector('.success-modal');
    container.removeChild(modalSuccess);
  };

  return (
    <>
      <section className="success-modal absolute top-0 w-full z-10 text-alain-blue-800 p-2 flex justify-end">
        <div className="rounded-card overflow-hidden shadow-md w-full md:w-3/5 lg:w-2/6 ">
          <button
            className="absolute top-0 right-0 p-2 text-green-900 opacity-25 hover:opacity-50"
            onClick={closeModal}>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
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
          <div className="p-3 text-center font-light text-sm">
            <h1 className="text-xl">¡Excelente!</h1>
            <p>{message}</p>
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
          background: rgba(247, 250, 252, 0.1);
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

import { useState } from 'react';

export default function ProductItem({ item }) {
  const [open, setOpen] = useState(false);

  const formatMoney = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const openItem = (e) => {
    const element = e.currentTarget;

    // Contenedor principal y su posición en base a la pantalla
    const main = document.getElementById('main');
    console.log('Main X: ' + main.offsetLeft);
    console.log('Main Y: ' + main.offsetTop);

    // Boton y su posición con respecto al Contenedor
    const button = e.target.parentNode;
    console.log('Button Y: ' + button.offsetLeft);
    console.log('Button Y: ' + button.offsetTop);

    const circle = document.createElement('span');

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - main.offsetLeft - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - main.offsetTop - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = element.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    element.appendChild(circle);

    setOpen(!open);
  };

  return (
    <>
      <li
        key={item._id}
        className="product-item text-sm border border-gray-300 rounded-card shadow overflow-hidden"
        id="ripple-container">
        <div className="grid p-2 relative">
          <button
            onClick={(e) => openItem(e)}
            type="button"
            className="absolute w-full h-full"></button>
          <h3>{item.name}</h3>
          {/* <p>{item.status}</p> */}
          <p>$ {formatMoney(item.price)}</p>
          <p>$ {formatMoney(item.value)}</p>
        </div>
        <div className={`p-2 pt-0 ${open ? '' : 'hidden'}`}>
          <small className="text-xs">{item.description}</small>
        </div>
      </li>
      <style global jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        span.ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(99, 91, 255, 0.2);
          transform: scale(0);
          animation: ripple 600ms linear;
        }
        li.product-item div {
          grid-template-columns: 1fr auto auto;
          grid-column-gap: 1rem;
          grid-row-gap: 0.4rem;
        }
        li.product-item:not(:last-child) {
          margin-bottom: 0.4rem;
        }
        small {
          grid-column: span 2;
        }
      `}</style>
    </>
  );
}

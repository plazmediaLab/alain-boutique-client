/**
 *
 * @param {Event} e Event action on Item
 * @param {String} color Color code for ripple effect
 */
const rippleEffect = (e, color = 'rgba(255, 255, 255, 0.3)') => {
  const element = e.currentTarget;

  // Contenedor principal y su posición en base a la pantalla
  const main = document.getElementById('main');
  // console.log('Main X: ' + main.offsetLeft);
  // console.log('Main Y: ' + main.offsetTop);

  // Boton y su posición con respecto al Contenedor
  const button = e.target.parentNode;
  // console.log('Button Y: ' + button.offsetLeft);
  // console.log('Button Y: ' + button.offsetTop);

  const circle = document.createElement('span');

  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - main.offsetLeft - button.offsetLeft - radius}px`;
  circle.style.top = `${e.clientY - main.offsetTop - button.offsetTop - radius}px`;
  circle.style.backgroundColor = `${color}`;
  circle.classList.add('ripple');

  const ripple = element.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }

  element.appendChild(circle);
};

export default rippleEffect;

export default function title(pathname) {
  let title;

  switch (pathname) {
    case '/home':
      title = 'Inicio';
      break;
    case '/products':
      title = 'Productos';
      break;
    case '/summary':
      title = 'Resumen';
      break;
    case '/orders':
      title = 'Pedidos';
      break;

    default:
      break;
  }

  return title;
}

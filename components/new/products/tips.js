export default function Tips() {
  return (
    <>
      <p className="text-xs text-gray-400 px-2 pb-2 mt-3 tracking-widest uppercase">Tips.</p>
      <ul className="text-xs text-gray-400 px-2 pb-4">
        <li>· El valor de venta no puede ser menor al precio.</li>
        <li>· Precio por defecto es 0.</li>
        <li>· Mantener en 0 el precio del producto para marcar el valor total como ganancia.</li>
        <li>· Si tu producto ya esta publicado para su venta, marcar como ACTIVO.</li>
      </ul>
    </>
  );
}

export default function ProductButtonAction({ children, colorText, ...props }) {
  return (
    <button
      {...props}
      className={`${colorText} px-2 py-1 leading-4 text-xs rounded bg-gradient-to-b border border-gray-300 from-white to-gray-200`}>
      {children}
    </button>
  );
}

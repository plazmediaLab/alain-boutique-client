import rippleEffect from 'helpers/ripple-effect';

export default function SubmitButton({
  children,
  color = '#fff',
  bg = 'bg-alain-blue-900',
  border = 'border-alain-blue-900',
  hoverbg = 'bg-alain-blue-800',
  hoverborder = 'border-alain-blue-800',
  disabled,
  loading
}) {
  return (
    <>
      <button
        disabled={loading || disabled ? true : false}
        type="submit"
        className={`${
          loading || disabled ? 'opacity-50 cursor-not-allowed' : ``
        } tracking-widest leading-6 transition duration-200 ease-in-out border rounded uppercase w-full color-xs font-medium text-xs py-2 mt-4 ${bg} ${border}  hover:${hoverbg} hover:${hoverborder} relative`}>
        {children}
      </button>
      <style jsx>{`
        color: ${color};
      `}</style>
    </>
  );
}

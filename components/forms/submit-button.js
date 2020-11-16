import rippleEffect from 'helpers/ripple-effect';

export default function SubmitButton({
  children,
  color = '#fff',
  bg = 'alain-blue-900',
  hover = 'alain-blue-800',
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
        } tracking-widest leading-6 transition duration-200 ease-in-out border rounded uppercase w-full color-xs font-medium text-xs py-2 mt-4 bg-${bg} border-${bg}  hover:border-${hover} hover:bg-${hover} relative`}>
        {children}
      </button>
      <style jsx>{`
        color: ${color};
      `}</style>
    </>
  );
}

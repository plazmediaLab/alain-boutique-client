export default function InputField({
  children,
  err,
  onChange,
  onBlur,
  name,
  placeholder,
  type = 'text',
  value
}) {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={name}
        className="uppercase text-label tracking-wider font-medium text-gray-500 block mb-1">
        {children}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`py-2 px-3 rounded border border-gray-300 block w-full focus:border-p_blue-500 ${
          err ? 'border-b-4 border-red-400 placeholder-red-300' : ''
        }`}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {err && err.length > 0 ? (
        <p className="text-sm text-red-500 pt-1 flex items-center">
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {err}
        </p>
      ) : null}
    </div>
  );
}

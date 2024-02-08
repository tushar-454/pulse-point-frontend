const SelectInput = ({ label, id, options, error, register, ...rest }) => {
  return (
    <div className='w-full space-y-2'>
      <label htmlFor={id} className='text-xl font-semibold'>
        {label}
      </label>
      <div className='relative'>
        <select
          {...rest}
          {...register}
          id={id}
          className={`w-full rounded-lg border border-transparent bg-gray-100 p-3 text-lg outline-none ${
            error && 'border-red-600 bg-red-50'
          }`}
        >
          <option>Choose your {label}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p className='mt-2 text-sm text-red-600'>{error}</p>
      </div>
    </div>
  );
};

export default SelectInput;

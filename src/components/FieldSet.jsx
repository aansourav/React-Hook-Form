const FieldSet = ({ label, children }) => {
  return (
    <fieldset className='m-2 border-none p-0'>
      {label && <legend className='text-xl mt-4 text-center font-bold'>{label}</legend>}
      <div className='flex flex-col justify-between self-start'>{children}</div>
    </fieldset>
  );
};

export default FieldSet;

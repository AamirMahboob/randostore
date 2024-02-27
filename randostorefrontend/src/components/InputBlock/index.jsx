import React from "react";

const InputBlock = ({
  label,
  type = "text",
  name,
  placeholder,
  error,
  isError,
  register,
  
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        {...register(name)}
        placeholder={placeholder}
        className="border border-black rounded-lg p-2"
      />
      {isError ? <span>{error?.name?.message}</span> : null}
    </div>
  );
};

export default InputBlock;

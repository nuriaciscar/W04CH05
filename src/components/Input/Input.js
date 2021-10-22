const Input = ({ type, name, text, className, placeholder, pattern }) => {
  return (
    <>
      <label for={name}>{text}</label>
      <input
        type={type}
        className={className}
        id={name}
        placeholder={placeholder}
        pattern={pattern}
      ></input>
    </>
  );
};

export default Input;

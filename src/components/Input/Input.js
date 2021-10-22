const Input = ({ type, name, text, className, placeholder }) => {
  return (
    <>
      <label for={name}>{text}</label>
      <input
        type={type}
        class={className}
        id={name}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default Input;

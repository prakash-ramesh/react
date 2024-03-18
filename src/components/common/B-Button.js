const Button = (props) => {
  return (
    <button
      className='btn btn-primary m-1 btn-sm'
      type={props.type || "button"}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;

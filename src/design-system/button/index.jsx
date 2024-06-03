import "./button.css";

const Button = ({ children, state, ...props }) => {
  return (
    <button {...props} className="FDButton primary">
      {children}
    </button>
  );
};

export default Button;

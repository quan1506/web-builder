import classNames from "classnames";
import "./button.css";

const Button = ({ children, state, className, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        "FDButton",
        "primary",
        state === "loading" && "loading",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

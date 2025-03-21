import { Link } from "react-router-dom";

const Button = ({children , className , href , onClick }) => {

    const classes = `${className || ''} relative inline-flex items-center justify-center h-11 p-1`
  
    const renderButton = () =>(
      <button className={classes} onClick={onClick}>
          <span className="z-[2px]">{children}</span>
      </button>
    );
  
    const renderLink = () =>(
      <Link to={href} className={classes} >
          <span className="z-[2px]">{children}</span>
      </Link>
    );
  
    return href ? renderLink() : renderButton();
  }
  
  export default Button;
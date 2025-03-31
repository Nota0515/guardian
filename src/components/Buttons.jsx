import { Link } from "react-router-dom";

const Button = ({children , className , href , onClick , type= "button" }) => {

    const classes = `${className || ''} relative inline-flex items-center justify-center p-1`
  
    const renderButton = () =>(
      <button className={classes} onClick={onClick} type={type}>
          <span className="z-[2px] flex items-center gap-2 pointer-events-none">{children}</span>
      </button>
    );
  
    const renderLink = () =>(
      <Link to={href} className={classes} >
          <span className="z-[2px] pointer-events-none">{children}</span>
      </Link>
    );
  
    return href ? renderLink() : renderButton();
  }
  
  export default Button;
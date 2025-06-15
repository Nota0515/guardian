import { Link } from "react-router-dom";

const Button = ({children , className , href , onClick , type= "button" , disabled = false  }) => {

    const classes = `${className || ''} ${disabled ? 'cursor-not-allowed opacity-60' : ''} relative inline-flex items-center justify-center p-1`
  
    const renderButton = () =>(
      <button className={classes} onClick={onClick} type={type} disabled={disabled}>
          {disabled ? <span className="loading loading-dots loading-md"></span> : 
          <span className="z-[2px] flex items-center gap-2 ">{children}</span>
          }
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
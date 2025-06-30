import { createPortal } from "react-dom"

const Menuportal = ({children}) => {
    const menuroot = document.getElementById('menu-root');
    return createPortal(children , menuroot);
}

export default Menuportal

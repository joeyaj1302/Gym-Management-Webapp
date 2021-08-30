import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarDate} from './SidebarData'
import './Navbar.css';
import {IconContext} from 'react-icons'
import PersonIcon from '@material-ui/icons/Person';
import CancelIcon from '@material-ui/icons/Cancel';
let id;
function Navbar(props) {
    console.log("In navbar :");
    console.log(props.uid);
    id = sessionStorage.getItem('uid');
    const setUser = () => {
        console.log("Hello")
        
    }
    useEffect(() => {
        setUser();
      }, [])

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className = "navbar"> 
            <Link to= "#" className = 'menu-bars'>
            <FaIcons.FaBars onClick = {showSidebar}/>

            </Link>
        </div>
        <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className = 'nav-menu-items' onClick = {showSidebar}>
                <li className = 'navbar-toggle'>
                    <Link to= "#" className = 'menu-bars'></Link>
                  <PersonIcon/><span> Admin</span> 
                </li>
                {SidebarDate.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to = 
                                {`${item.path}/${id}`} 
                                >
                            {item.icon}
                            <span>{item.title}</span>
                           
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;

/*<div className="icon">{item.icon}</div>
                            <div className = "title">{item.title}</div>*/
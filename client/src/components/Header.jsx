import logo3 from '../assets/logo3.png';
import './Header.css';


export default function Header() { 
    return (
        <div className="header">
            <img src={logo3} alt="Logo" className='logo-image'/>
        </div>
    )
}
import logo from '../assets/logo.png';
import './Header.css';


export default function Header() { 


    return (
        <div className="header">
            <img src={logo} alt="Logo" />
        </div>
    )
}
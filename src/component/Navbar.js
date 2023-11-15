import { Link } from 'react-router-dom';
import { NavbarStyle } from './Navbar.style';

export default function Navbar(){
    return (
        <NavbarStyle>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/ai-film">AiFilm</Link></li>
            </ul>
        </NavbarStyle>
    )
}
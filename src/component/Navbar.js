import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <div>
            <ul>
                <li><Link to="/home">home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
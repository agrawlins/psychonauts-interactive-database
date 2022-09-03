import {useNavigate, Link} from 'react-router-dom'; // p5 import Link
import Logo from "../Images/Psychonauts-Logo-Color.png"

const Header = () => {
    const navigate = useNavigate()

    return(
        <nav className='header'> 
            <Link to="/" className='link'> 
                <img src={Logo} className='header--logo'/>
            </Link> 
            <Link to="/characters" className='link'> 
                <img src='https://psychonauts-api.herokuapp.com/images/api/characters/razputin-aquato.png' className='header--logo'/>
            </Link>
            <Link to="/abilities" className='link'> 
                <img src='https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png' className='header--logo'/>
            </Link>
            <Link to="/summary" className='link'> 
                <img src='https://psychonauts-api.herokuapp.com/images/api/characters/ford-cruller.png' className='header--logo'/>
            </Link>
        </nav>
    )
}

export default Header;
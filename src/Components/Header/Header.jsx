import './Header.css'
import sorslogo from '../../assets/sorslogo.png'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header>
        <nav>
            <div className="logo">
                <img src={sorslogo} alt="company logo" className='companylogo'/>
            </div>
            <div className="title">
                <div className="top-title">
                    <h1>SAVE ON</h1>
                </div>
                <div className="btm-title">
                    <h2>Real Estate Rehsi Group</h2>
                </div>
            </div>
            <div className="navbar">
            
                <ul className='nav-ul'>
                    <li className='listitems'><Link to="/">Home</Link></li>
                    <li className='listitems'><Link to="/">About</Link></li>
                    <li className='listitems'><Link to="/">Our Team</Link></li>
                    <li className='listitems'><Link to="/">Blogs</Link></li>
                    <li className='listitems'><Link to="/">Contact</Link></li>
                    <li className='listitems'><Link to="/">Listings</Link></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header
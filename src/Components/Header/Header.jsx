import './Header.css'
import sorslogo from '../../assets/sorslogo.png'

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
                    <li className='listitems'><a href="#">Home</a></li>
                    <li className='listitems'><a href="#">About</a></li>
                    <li className='listitems'><a href="#">Our Team</a></li>
                    <li className='listitems'><a href="#">Blogs</a></li>
                    <li className='listitems'><a href="#">Contact</a></li>
                    <li className='listitems'><a href="#">Listings</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header
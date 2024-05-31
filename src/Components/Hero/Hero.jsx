import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='herointro'>
      <div className='centeredhero'>
        <h1 className='herotext'><sup>"</sup>Home is the starting place of <br />love, hope, and dreams.<sup>"</sup></h1>
        <Link to="/contact">
          <button className="contact">GET IN TOUCH</button>
        </Link>
      </div>
     
    </div>
  )
}

export default Hero
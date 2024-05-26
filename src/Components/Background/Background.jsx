import './Background.css'
import bgimage from '../../assets/housebg.jpeg'
import bgimage1 from '../../assets/housebg1.jpeg'
import Hero from '../Hero/Hero'


const Background = () => {
  return (
    <>
      <div className="bgimage">
        <img src={bgimage1} alt="Background Cover Image" className='bg-image'/>
      </div>

      <Hero />
  
    </>
    
  )
}

export default Background
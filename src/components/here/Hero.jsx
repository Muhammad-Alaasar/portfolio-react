import './Here.css'
import my_image from '../../assets/my_image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={my_image} alt="Profile Image" />
        <h1><span>I&apos;m Muhammad Al-Aasar,</span> front end developer based in Egypt</h1>
        <p>I am a front end developer from Cairo, Egypt with 5 years of experience in multiple companies like Iqra Network, ElSewedy, and T-Tech.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
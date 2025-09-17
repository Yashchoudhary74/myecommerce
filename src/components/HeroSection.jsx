// import image1 from '../assets/shopping-kids1.jpg'
import image1 from '../assets/banner7b.jpg'
// import image1 from '../assets/shopping-kids2.jpg'
import '../css/HeroSection.css'
export const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-section-image-container">
                <div className='hero-section-overlay'></div>
                <div className='hero-section-text-container'>
                    <span className='hero-section-text h-s-text-1' >Everything you need, </span>
                    <span className='hero-section-text h-s-text-2' >all in one place.</span>
                    {/* <span className='hero-section-text h-s-text-3' >you</span> */}
                    <button className='hero-section-shop-now-btn' >Shop Now</button>
                </div>
                <img className='hero-section-image' src={image1} alt="img"  />
            </div>
        </div>
    )
}
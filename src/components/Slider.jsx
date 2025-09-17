import '../css/slider.css'
import { useState, useEffect } from 'react'

import banner1 from '../assets/sale-banner-6.jpg'
import banner2 from '../assets/sale-banner-7.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/sale-banner-9.jpg'
import banner5 from '../assets/sale-banner-10.jpg'
// import banner4 from '../assets/banner4.jpg'
export const Slider = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {

        const timer = setInterval(() => {
            setCount(prev => {
                if (prev >= 500) {
                    return 0
                }
                return prev + 100
            })

        }, 3000)

        return () => { clearInterval(timer) }

    }, [])

    console.log(count)

    const slider = {
        transform: `translateX(-${count}%)`,
        transition: count === 0 ? "none" : "transform 0.5s ease-in-out"
    }



    return (
       <div className='slider-section'>
         <div className="slider-container">

            <div style={slider} className="slider">
                <img className='slides' src={banner1} alt="Slide 1" />
                <img className='slides' src={banner2} alt="Slide 2" />
                <img className='slides' src={banner3} alt="Slide 3" />
                <img className='slides' src={banner4} alt="Slide 4" />
                <img className='slides' src={banner5} alt="Slide 5" />
                <img className='slides' src={banner1} alt="Slide 1" />
                
     

            </div>


        </div>
       </div>
    )
}
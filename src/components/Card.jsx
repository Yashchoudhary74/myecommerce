import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cardImage from '../assets/avtar1.webp'
import '../css/Card.css'
import { faCartShopping, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
export const Card = ({ src,title,description,rating,price,brand }) => {
    return (
        <div className="card">
            <img className='card-image' src={src} alt='img'/>
            <div className='card-details'>
                <div className='card-sub-details'>
                    <span className='product-rating'>{rating}<FontAwesomeIcon className='rating-icon' icon={faStar}> </FontAwesomeIcon> </span>
                    {/* <span className='product-quantity'>15</span> */}
                    <span className='product-brand'>{brand}</span>
                </div>
                <span className='product-title' >{title}</span>
                <p className='product-description' >
                   {description}
                </p>
                <span className='product-price'>{`₹${price}`}

                </span>

            </div>

            <div className='card-overlay'>
                <button className='card-favorite-btn' ><FontAwesomeIcon className='card-favorite-btn-icon' icon={faHeart} ></FontAwesomeIcon></button>
                <button className='card-buynow-btn' >See more</button>
                <button className='card-cart-btn' ><FontAwesomeIcon className='card-cart-btn-icon' icon={faCartShopping} ></FontAwesomeIcon></button>
            </div>
        </div>
    )
}
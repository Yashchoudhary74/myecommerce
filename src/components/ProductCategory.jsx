import {Link} from 'react-router-dom'
import fashionImg from '../assets/icons/fashionIcon.png'
import electronicImg from '../assets/icons/refrigrator.png'
import beautyImg from '../assets/icons/beauty.png'
import furnitureImg from '../assets/icons/furniture.png'
import jewelryImg from '../assets/icons/jewelry.png'
import stationeryImg from '../assets/icons/stationery.png'
import toyImg from '../assets/icons/toy.png'
import sportImg from '../assets/icons/sport.png'
import healthImg from '../assets/icons/health.png'
import groceryImg from '../assets/icons/grocery.png'
import '../css/ProductCategory.css'
export const ProductCategory = () => {
    return (
        <div className="category-slider" >
           <Link to="/category/" > <div className="category-card"> <img className="category-card-img" src={fashionImg} />  <span className='category-title' > Fashion </span> </div></Link>
           <Link to="/category/smartphones" > <div className="category-card"> <img className="category-card-img" src={electronicImg} />  <span className='category-title' > Electronics </span> </div></Link>
           <Link to="/category/beauty" > <div className="category-card"> <img className="category-card-img" src={beautyImg} />  <span className='category-title' > Beauty </span> </div></Link>
           <Link to="/category/furniture" > <div className="category-card"> <img className="category-card-img" src={furnitureImg} />  <span className='category-title' > Home & Furniture </span> </div></Link>
           <Link to="/category/" > <div className="category-card"> <img className="category-card-img" src={jewelryImg} />  <span className='category-title' > Jwellery </span> </div></Link>
           <Link to="/category/" > <div className="category-card"> <img className="category-card-img" src={stationeryImg} />  <span className='category-title' > Stationery </span> </div></Link>
           <Link to="/category/" > <div className="category-card"> <img className="category-card-img" src={toyImg} />  <span className='category-title' > Toys </span> </div></Link>
           <Link to="/category/" > <div className="category-card"> <img className="category-card-img" src={sportImg} />  <span className='category-title' > Sports </span> </div></Link>
           <Link to="/category/" > <div className="category-card"> <img className="category-card-img" src={healthImg} />  <span className='category-title' > Health & Wellness </span> </div></Link>
           <Link to="/category/groceries" > <div className="category-card"> <img className="category-card-img" src={groceryImg} />  <span className='category-title' > Grocery </span> </div></Link>
        </div>
    )
}
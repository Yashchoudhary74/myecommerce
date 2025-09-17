import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import '../css/Navbar.css'
import { useState } from 'react'
export const Navbar = () => {

    const [navBG, setNavBG] = useState({ backgroundColor: "transparent" })
    const [navTitleColor, setNavTitleColor] = useState({ color: "white" })
    const [navBtnColor, setNavBtnColor] = useState({ color: "white" })

    const ChangeNavbarOnScroll = () => {
        document.addEventListener('scroll', () => {
            if (scrollY > 60) {

                setNavBG({
                    backgroundColor: "white", boxShadow: "0px 0px 10px #80808017", transition: "all 0.3s ease"
                })
                setNavTitleColor({ color: "black", transition: "all 0.3s ease" })
                setNavBtnColor({ color: "black", transition: "all 0.3s ease" })
            }

            else {

                setNavBG({
                    backgroundColor: "transparent",
                    boxShadow: "0px 0px 10px transparent",
                    transition: "all 0.3s ease"
                })
                setNavTitleColor({ color: "white", transition: "all 0.3s ease" })
                setNavBtnColor({ color: "white", transition: "all 0.3s ease" })
            }
        })
    }

    ChangeNavbarOnScroll()

    return (
        <div style={navBG} className="navbar">
            <Link to='/'>  <span style={navTitleColor} className='navbar-title' >Luxerio</span></Link>
            {/* <div className="nav-menu" >
                <li className="nav-item" >Electronics</li>
                <li className="nav-item" >Fashion</li>
                <li className="nav-item" >Furniture</li>
                <li className="nav-item" >Decoration</li>
                <li className="nav-item" >Jwellery</li>
                <li className="nav-item" >Grocery</li>
            </div> */}
            <div className='search-bar'>
                <div className='nav-search'>
                    <input className='nav-search-input' type="text" placeholder='Search for products' />
                    <button className='nav-search-btn' ><FontAwesomeIcon className="nav-search-icon" icon={faSearch}></FontAwesomeIcon></button>
                </div>
            </div>

            <div style={navBtnColor} className='nav-actions' >
                <li className='nav-action-btn' ><FontAwesomeIcon className='nav-action-icon' icon={faSearch}></FontAwesomeIcon></li>
                <li className='nav-action-btn' ><FontAwesomeIcon className='nav-action-icon' icon={faHeart}></FontAwesomeIcon></li>
                <li className='nav-action-btn' ><FontAwesomeIcon className='nav-action-icon' icon={faShoppingCart}></FontAwesomeIcon></li>
                <li className='nav-action-btn' ><FontAwesomeIcon className='nav-action-icon' icon={faUser}></FontAwesomeIcon></li>


            </div>


        </div>
    )
}
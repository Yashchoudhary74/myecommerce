import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar'
import { Home } from '../pages/Home';
import { ShowProduct } from '../pages/showProduct';

export const Content = () => {
    return (
        <>

            <Navbar></Navbar>
            <Routes>
               <Route path='/' element={<Home></Home>}  ></Route>
               <Route path= '/category/:categoryName' element={<ShowProduct></ShowProduct>}  ></Route>
               
            </Routes>

        </>
    )
}
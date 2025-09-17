import { Card } from './Card'
import ProductList from './ProductList'
import dummyProduct from '../api/dummyProduct.json'
import '../css/CardSlider.css'
export const CardSlider = () => {
   

    const DummyCard= {
        // maxWidth:"140px",
        // minWidth:"130px",
        
    }
    return (
        <div  className='card-slider'>
            {/* <ProductList></ProductList> */}
            {
                dummyProduct.map((data, key) => {
                    return (
                        <div style={DummyCard} key={data.id} className='dummy-card'>
                            <Card
                                title={data.title}
                                src={data.src}
                                description={data.description}
                                price={data.price}
                                rating={data.rating}
                                brand={data.brand}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}
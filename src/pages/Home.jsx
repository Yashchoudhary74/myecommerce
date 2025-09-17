import { Slider } from '../components/Slider'
import { HeroSection } from '../components/HeroSection'
import { CardSlider } from '../components/CardSlider'
import { ProductCategory } from '../components/ProductCategory'
import ProductList from '../components/ProductList'
import { ProductBanner } from '../components/ProductBanner'
export const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <ProductCategory> </ProductCategory>
            <Slider></Slider>
            {/* <ProductBanner object="smartphones" ></ProductBanner> */}
            <CardSlider></CardSlider>
            
        </>
    )
}
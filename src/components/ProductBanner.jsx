import bannerImg1 from "../assets/sale-banner-7.jpg"
import bannerImg2 from "../assets/sale-banner-6.jpg"
import bannerImg3 from "../assets/sale-banner-3.jpg"
export const ProductBanner = ({ object }) => {

    const banners = {
        beauty: {
            image: bannerImg1
        },
        groceries: {
            image: bannerImg2
        },
        smartphones: {
            image: bannerImg3
        }


    }

    const productBanner = {
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
    const productBannerImage = {
        // maxWidth:"700px"
        // padding:"20px",   
        width:"100%"
    }
    const bannerImage = {
       width:"100%",
       filter:"brightness(0.5)"
    }
    return (
        <div style={productBanner} className="product-banner">
            <div style={productBannerImage} className="product-banner-img">
                <img style={bannerImage} src={banners[object].image} alt="img" />
            </div>
        </div>
    )
}
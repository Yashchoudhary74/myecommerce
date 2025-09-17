import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


import { Card } from "../components/Card"
import "../css/ShowProduct.css"
import { ProductBanner } from "../components/ProductBanner";

export const ShowProduct = () => {

    const { categoryName } = useParams()

    console.log(categoryName)
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProduct = async () => {
        try {

            const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
            const data = await res.json()
            setCategory(data.products)
            // console.log(data)
            // console.log(data.products)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchProduct()
    }, [])

    // console.log("data ===" + category)



    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }
    return (
        <div className="product-section">
        <ProductBanner object={categoryName}></ProductBanner>

            <div className="products">
                {
                    category.map((product, key) => {
                        return (
                            <div className="product" key={product.id}>
                                <Card
                                    title={product.title}
                                    src={product.thumbnail}
                                    rating={product.rating}
                                    brand={product.brand}
                                    price={product.price}
                                    description={product.description.trim().length > 50 ? product.description.trim().substring(0, 50) + "..." : product.description}
                                />
                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
}
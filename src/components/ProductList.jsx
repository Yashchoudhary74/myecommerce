// ProductList.jsx (React)
import { useEffect, useState } from 'react';
import { Card } from './Card';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/category/smartphones");
      const data = await res.json();
      setProducts(data.products)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const cardStyle = {
    display: "flex",
    width: "250px"
    
  }

  console.log(products[0])

  return (

    products.map((product, key) => {
      return (
        <div key={product.id} style={cardStyle} >
          <Card
            title={product.title}
            src={product.thumbnail}
            rating={product.rating}
            description={product.description.trim().length > 50 ? product.description.trim().substring(0, 50) + "..." : product.description}
            price={product.price}
            brand={product.brand}
          />
        </div>
      )
    })

  )

}

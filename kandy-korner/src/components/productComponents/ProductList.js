import React, { useState, useEffect } from 'react'

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=candy&_sort=candyId")
            .then((res) => res.json())
            .then(
                (productData) => {
                    setProducts(productData)
                    console.log(productData)
                })
        },[]
    )
        return (
            <>
            <h2>Products</h2>
                { 
                    products.map(
                        (product) => {
                        return <div key={`product--${product.id}`}>
                            <p>id: {product.id}</p> 
                            <p>Candy: {product.candyName}</p> 
                            <p>Candy Type: {product.candy.candyType}</p> 
                            {/* <p>Candy Amount: {product.candyAmount}</p>  */}
                            {/* <p>Price: {product.price}</p>  */}
                            <p>Foreign Key: {product.candyId}</p>
                            --------------------------------------------
                            </div>
                    })
                }
            </>
        )

}


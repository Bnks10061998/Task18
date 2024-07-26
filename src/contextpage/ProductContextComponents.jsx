import React from 'react'
import {useState} from 'react'
export const ProductContext = React.createContext()

function ProductContextComponents({children}) {
    let [products,setProducts] = useState([
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "description": 	"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "price": 109.95,
            "rating": 3.9,
            "stock": 120,
            "category": "men's clothing",
            "thumbnail": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "images": [
                "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            ]
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "price": 22.3,
            
            "rating": 4.1,
            "stock": 259,
            
            "category": "men's clothing",
            "thumbnail": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "images": [
                "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            ]
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "price": 55.99,
            
            "rating": 4.7,
            "stock": 500,
            
            "category": "men's clothing",
            "thumbnail": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "images": [
                "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            ]
        },
        {
            "id": 4,
            "title": "Mens Casual Slim Fit",
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "price": 15.99,
            
            "rating": 2.1,
            "stock": 430,
            
            "category": "men's clothing",
            "thumbnail": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "images": [
                "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            ]
        },
        {
            "id": 5,
            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            "price": 695,
            
            "rating": 4.6,
            "stock": 400,
            
            "category": "jewelery",
            "thumbnail": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "images": [
                "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
            ]
        }
    ]
    )
    return <ProductContext.Provider value ={{products,setProducts}}>
         {children}
  </ProductContext.Provider>
}

export default ProductContextComponents
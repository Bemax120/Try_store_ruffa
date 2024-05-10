import React, { useState, useEffect } from "react";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

function AllProducts() {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                    price: doc.data().price,
                    image: doc.data().productImage,
                    description: doc.data().description
                }));
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = async (product) => {
        try {
            // Check if the product already exists in the orders collection
            const querySnapshot = await getDocs(collection(db, "orders"));
            const orders = querySnapshot.docs.map(doc => doc.data());
            const existingOrder = orders.find(order => order.name === product.name);
    
            if (existingOrder) {
                setMessage("Item already added to the cart"); // Set message if item already exists
            } else {
                setMessage("Item added to cart"); // Set message before adding to cart
                await addDoc(collection(db, "orders"), {
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    description: product.description,
                    quantity: 1
                });
            }
            setTimeout(() => setMessage(""), 2000); // Clear message after 2 seconds
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
    };

    return (
        <>
            <div className="product-container">
                <h2 className="product-name"><FontAwesomeIcon icon={faShoppingCart} /> All Products</h2>
                <div className="product-list">
                    {products.map((product) => (
                        <div key={product.id} className="product">
                            <img src={product.image} alt={product.name} />
                            <h3><FontAwesomeIcon icon={faShoppingCart} /> {product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <div className="icons">
                                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" onClick={() => addToCart(product)} />
                                <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                            </div>
                        </div>
                    ))}
                </div>
                {message && <div style={{ color: "green", textAlign: "center" }}>{message}</div>}
            </div>
            <Footer />
        </>
    );
}

export default AllProducts;

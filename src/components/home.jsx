import React from 'react';
import Footer from "./footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash, faRunning, faShoePrints } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div>
            <img src="https://i.pinimg.com/originals/59/a1/af/59a1afdd45d9fe1aaeb6bdc51c07b599.jpg" alt="Store Image" />
            <div className="category-icons">
                <div className="category-icon">
                    <img src="https://ph-test-11.slatic.net/p/794b5b62cba73f8c4f907c685bac2664.jpg" alt="Casual Shoes" />
                    <p>Sneaker Shoes</p>
                </div>
                <div className="category-icon">
                    <img src="https://t3.ftcdn.net/jpg/05/84/96/60/360_F_584966026_0HU7OQdOUlrRse3qjtjiYayY1ePGGtSe.jpg" alt="Sport Shoes" />
                    <p>Sport Shoes</p>
                </div>
                <div className="category-icon">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYi_8HAOlgIl_hFYBg_F7_6Bf4qL-680EoNbMu-Hc9yvU3GRdTmrKs1YB9Yv7NfGN224&usqp=CAU" alt="School Shoes" />
                    <p>School Shoes</p>
                </div>
                <div className="category-icon">
                    <img src="https://media.istockphoto.com/id/1314324263/photo/woman-pink-shoes-banner-high-heels-closeup-top-view-women-fashion-ladies-accessories-girly.jpg?s=612x612&w=0&k=20&c=r4ypglAqCBGLURJoWH8lQQy6m1X1_EZsgaivijMaV8k=" alt="School Shoes" />
                    <p>Sandals</p>
                </div>
            </div>
            <h2><FontAwesomeIcon icon={faShoppingCart} /> Best Selling Products</h2>
            <div className="product-list">
                <div className="product">
                    <img src="https://i.ebayimg.com/images/g/WlgAAOSwxuFkbnO3/s-l1200.webp" alt="Product 1"/>
                    <h3><FontAwesomeIcon icon={faShoppingCart} /> Nike Shoes</h3>
                    <p>Sport Shoes</p>
                    <p>$10</p>
                    <div className="icons">
                        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                        <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                    </div>
                </div>
                <div className="product">
                    <img src="https://www.mensjournal.com/.image/t_share/MTk4OTM4NDMyMDc1MDgxNDc5/nike-killshot.jpg" alt="Product 2" />
                    <h3><FontAwesomeIcon icon={faShoppingCart} /> Nike Shoes</h3>
                    <p>Casual Shoes </p>
                    <p>$15</p>
                    <div className="icons">
                        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                        <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;

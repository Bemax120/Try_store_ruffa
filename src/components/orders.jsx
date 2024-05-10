import React, { useState, useEffect } from 'react';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMinusCircle, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { db } from './firebaseConfig';
import { collection, addDoc, deleteDoc, doc, updateDoc, getDocs } from 'firebase/firestore';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersSnapshot = await getDocs(collection(db, 'orders'));
                const ordersData = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setOrders(ordersData);
                calculateTotalPrice(ordersData);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const calculateTotalPrice = (ordersData) => {
        const total = ordersData.reduce((acc, order) => acc + order.price * order.quantity, 0);
        setTotalPrice(total);
    };

    const removeFromOrder = async (orderId) => {
        try {
            await deleteDoc(doc(db, 'orders', orderId));
            const updatedOrders = orders.filter(order => order.id !== orderId);
            setOrders(updatedOrders);
            calculateTotalPrice(updatedOrders);
        } catch (error) {
            console.error('Error removing from order:', error);
        }
    };

    const incrementQuantity = async (orderId) => {
        try {
            const orderRef = doc(db, 'orders', orderId);
            await updateDoc(orderRef, {
                quantity: orders.find(order => order.id === orderId).quantity + 1
            });
            const updatedOrders = orders.map(order =>
                order.id === orderId ? { ...order, quantity: order.quantity + 1 } : order
            );
            setOrders(updatedOrders);
            calculateTotalPrice(updatedOrders);
        } catch (error) {
            console.error('Error incrementing quantity:', error);
        }
    };

    const decrementQuantity = async (orderId) => {
        try {
            const orderRef = doc(db, 'orders', orderId);
            const currentQuantity = orders.find(order => order.id === orderId).quantity;
            if (currentQuantity > 1) {
                await updateDoc(orderRef, {
                    quantity: currentQuantity - 1
                });
                const updatedOrders = orders.map(order =>
                    order.id === orderId ? { ...order, quantity: order.quantity - 1 } : order
                );
                setOrders(updatedOrders);
                calculateTotalPrice(updatedOrders);
            }
        } catch (error) {
            console.error('Error decrementing quantity:', error);
        }
    };

    return (
        <>
            <div className="orders-container">
                <h2 className="orders-name"><FontAwesomeIcon icon={faShoppingCart} /> Your Orders</h2>
                {orders.map((order) => (
                    <div key={order.id} className="order">
                        <img src={order.image} alt={order.name} />
                        <div className="order-details">
                            <h3>{order.name}</h3>
                            <p>${order.price}</p>
                            <div className="quantity">
                                <button onClick={() => decrementQuantity(order.id)}><FontAwesomeIcon icon={faMinusCircle} /></button>
                                <span>{order.quantity}</span>
                                <button onClick={() => incrementQuantity(order.id)}><FontAwesomeIcon icon={faPlusCircle} /></button>
                            </div>
                            <button onClick={() => removeFromOrder(order.id)}><FontAwesomeIcon icon={faTrash} /> Remove</button>
                        </div>
                    </div>
                ))}
                <div className="price-details">
                    <h3>Price Details</h3>
                    <p>Price ({orders.length} item): ${totalPrice}</p>
                    <p>Delivery Charges: Free</p>
                    <h4>Total Amount: ${totalPrice}</h4>
                </div>
                <button className="checkout-button">Checkout</button>
            </div>
            <Footer />
        </>
    );
};

export default Orders;

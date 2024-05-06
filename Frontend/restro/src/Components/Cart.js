import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function Cart({ isLoggedIn, setIsLoggedIn, username,setUsername }) {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/cart');
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        if (isLoggedIn) {
            fetchCart();
        }
    }, [isLoggedIn]);

    const fetchCart = async () => {
        try {
            const response = await fetch(`http://localhost:3001/cart?username=${username}`, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    "access-control-allow-origin" : "*",
                },
   
            });
            if (response.ok) {
                const data = await response.json();
                setCartItems(data);
            } else {
                console.error('Failed to fetch cart items');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const decreaseQuantity = async (item) => {
        if (item.quantity === 1) {
            return;
        }

        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.itemName === item.itemName) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });
        setCartItems(updatedCartItems);
        try {
            await fetch(`http://localhost:3001/cart/${(item.itemName)}/decrement`, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    "access-control-allow-origin" : "*",
                },
                
            });
        } catch (error) {
            console.error('Error decrementing quantity:', error);
        }
    };

    const removeItem = async (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.itemName !== item.itemName);
        setCartItems(updatedCartItems);

        try {
            await fetch(`http://localhost:3001/cart/${(item.itemName)}`, {
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json',
                    "access-control-allow-origin" : "*",
                },
            
            });
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    const handleOrderNow = () => {
        if (cartItems.length === 0) {
            alert("Cart is empty");
        } else {
            alert("Order Successful");
        }
    };

    const handleMenu = () => {
        navigate('/menu');
    };

    const increaseQuantity = async (item) => {
        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.itemName === item.itemName) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });
    
        setCartItems(updatedCartItems);
    
        try {
            await fetch(`http://localhost:3001/cart/${(item.itemName)}/increment`, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    "access-control-allow-origin" : "*",
                }
            });
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    return (
        <div >
            {isLoggedIn ?
                <div className='container cart'>
                    <h1 style={{marginBottom:'25px',textAlign:'center'}}>Cart</h1>
                    <div className="table-container">
                        {cartItems.length === 0 ? (
                            <div style={{textAlign: 'center'}}>
                                <p>Cart is empty</p>
                                <button className="custom-btn" onClick={handleMenu}>Go to Menu</button>
                            </div>
                        ) : (
                            <table className="cart-table">
                                <thead style={{fontSize:'18px',marginBottom:'50px'}}>
                                    <tr>
                                        <th>Item Name</th>
                                        <th style={{padding:'15px'}}>Price</th>
                                        <th style={{padding:'25px'}}>Quantity</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr style={{marginBottom:'25px'}} key={item._id} className="cart-row">
                                            <td style={{fontWeight:'bold'}}>{item.itemName}</td>
                                            <td>${item.price}</td>
                                            <td className="quantity-cell">
                                                <button className='custom-btn' onClick={() => decreaseQuantity(item)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button className='custom-btn' onClick={() => increaseQuantity(item)}>+</button>
                                            </td>
                                            <td>
                                                <button className='custom-btn' onClick={() => removeItem(item)}>Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <div style={{marginTop:'25px'}} >
                                    <div style={{fontSize:'18px',marginBottom:'25px'}}>Total Price: ${calculateTotalPrice()}</div>
                                    <span style={{marginTop:'25px'}} ><button className="custom-btn" onClick={handleOrderNow}>Order Now</button>
                                    </span>
                                </div>
                            </table>
                        )}
                    </div>
                </div>
                : <div>
                    <Login auth="/cart" setIsLoggedIn={setIsLoggedIn} setUsername={setUsername}/>
                </div>}
        </div>
    );
}

export default Cart;


import React, { useState } from 'react';

const BuyPage = () => {
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handlePurchase = async () => {
        const response = await fetch('/api/user/purchase', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cardDetails),
        });
        const data = await response.json();
        if (data.success) {
            // Redirect to home page to show books after successful payment
            window.location.href = '/';
        } else {
            alert('Payment failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Enter Payment Details</h2>
            <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="expirationDate"
                placeholder="Expiration Date"
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="cvv"
                placeholder="CVV"
                onChange={handleInputChange}
            />
            <button onClick={handlePurchase}>Buy</button>
        </div>
    );
};

export default BuyPage;

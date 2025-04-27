import React from 'react';
import '../Css/Thankyou.css'

const Thankyou = () => {
    return (
        <div>
            <div style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', padding: '20px' }}>
                <h1 style={{ fontFamily: 'Antic Didone, serif', color: '#574b44' }}>
                    Thank You for Your Order!
                </h1>
                <p>
                    We truly appreciate your trust in our jewelry. Your order has been successfully placed and is now being prepared with love and care. ✨
                </p>
                <p>You’ll receive a confirmation email shortly with all the details.</p>
                <p>If you have any questions, feel free to reach out to our support team.</p>
                <p>We hope you love your new jewelry as much as we loved making it! 💍</p>
                <p style={{ marginTop: '30px' }}>
                    Stay sparkly,<br /><strong>Nailed Jewelry</strong>
                </p>
            </div>
        </div>
    );
};

export default Thankyou;

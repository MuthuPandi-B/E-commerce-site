import React from 'react';
import Logo from '../Assets/logo.png';

const PaymentComponent = ({amount}) => {
  const loadRazorpay = (script) => {
    return new Promise((resolve) => {
      const scriptTag = document.createElement('script');
      scriptTag.src = script;
      scriptTag.onload = () => resolve(true);
      scriptTag.onerror = () => resolve(false);
      document.body.appendChild(scriptTag);
    });
  };
 

  const handlePayment = async () => {
    const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }


    const options = {
       
      key: import.meta.env.VITE_RAZORPAY_KEY, // Replace with your Razorpay key ID
      amount: amount, // Amount in paise
      currency: 'INR',
      name: 'One Click Shopping',
      description: 'Test Transaction',
      image: Logo, // Replace with your logo URL
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        window.location.href = '/';
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Corporate Office',
      },
      theme: {
        color: '#F37254',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
    
      <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handlePayment}>Pay Now</button >
    </div>
  );
};

export default PaymentComponent;

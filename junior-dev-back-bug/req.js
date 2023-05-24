/* eslint-disable linebreak-style */
import axios from 'axios';

const baseURL = 'http://localhost:9000/api/bkash'; // Replace with the actual base URL

const requestData = {
  amount: '500',
  currency: 'BDT',
  intent: 'authorization',
  merchantInvoiceNumber: 'Inv0124',
};

axios
  .post('/checkout/payment/create', requestData, {
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: 'id_token',
      'x-app-key': 'x-app-key',
    },
  })
  .then((response) => {
    console.log('Payment request successful:', response.data);
  })
  .catch((error) => {
    console.error('Error in payment request:', error.message);
  });

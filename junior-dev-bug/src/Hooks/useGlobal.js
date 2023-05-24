import axios from "axios";
import { useState } from "react";
import countryCode from "../Features/Checkout/Data/countryCode.json";
const useGlobal = () => {
  const [open, setOpen] = useState(false);
  const [bkashURL, setBkashURL] = useState("");
  const [mbCode, setMbCode] = useState(countryCode[15]);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleModal = () => setOpen(!open);

  const getPayment = (body) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/bkash/createPayment`, {
        ...body,
        totalPrice,
      })
      .then((response) => {
        console.log(response);
        console.log(response.status);
        console.log(response.data);
        setBkashURL(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  return {
    bkashURL,
    toggleModal,
    open,
    setMbCode,
    mbCode,
    getPayment,
    totalPrice,
    setTotalPrice,
  };
};
export default useGlobal;

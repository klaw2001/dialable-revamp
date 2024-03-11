"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Prod from "../../../../public/Images/wheelchairfront.png";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { getCartItems, initializeRazorpay } from "@/utils";
const Cart = () => {
  const {id} = useParams() 
  const [cartItems , setCartItems] = useState([])
  useEffect(()=>{
    const myFunction = async () =>{
      const cart = await getCartItems(id)
      setCartItems(cart)
    }
    myFunction()
  },[])
  const userID = "65cb74adbee9d7c924ba9739"
  const formatNumberWithCommas = (number) => {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  const totalamt = () => {
    return cartItems.reduce((total, product) => {
      return total + product.price * (product.quantity || 1);
    }, 0);
  };
  const handleIncrement = async (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);

    // Make API request to update quantity in the backend
    try {
      const cartID = updatedCart[index]._id;
      await axios.put(`/api/cart/${cartID}?updatetype=increment`);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }

    // Update localStorage
    // localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleDecrement = async (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);

      // Make API request to update quantity in the backend
      try {
        const cartID = updatedCart[index]._id;
        await axios.put(`/api/cart/${cartID}?updatetype=decrement`);
      } catch (error) {
        console.error("Error updating quantity:", error);
      }

      // Update localStorage
      // localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();
    if (!res) {
      // toast.error("Razorpay SDK Failed to load");
      return;
    }

    try {
      // Make API call to the serverless API
      const response = await fetch("/api/razorpay-payment/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: totalamt() * 100, // Assuming totalamt is in rupees, convert to paise for Razorpay
        }),
      });

      // const { firstName, lastName, email, contact } = userData;

      const data = await response.json();

      const options = {
        key: process.env.RAZORPAY_KEY, // Use NEXT_PUBLIC_RAZORPAY_KEY for client-side access
        name: "Dialable",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your purchase",
        image: "http://res.cloudinary.com/dqpj1vyjn/image/upload/v1704696575/jh8xzhfpc4vtgtpfg7fi.jpg",
        handler: function (response) {
          // Validate payment at the server - using webhooks is a better idea.
          alert("Razorpay Response: " + response.razorpay_payment_id);

          clearCartItems();
          storeOrder(response.razorpay_payment_id, data.amount);
          // Additional processing or confirmation can be done here
        },
        prefill: {
            // name: `${firstName} ${lastName}`, // Concatenate firstName and lastName
            // email: email,
            // contact: contact,
          userID : userID
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error making Razorpay payment:", error);
      // toast.error("Error processing payment");
    }
  };


  return (
    <div className="py-10 px-4 lg:py-20 lg:px-10 lg:mb-8 relative overflow-x-clip">
      <div className="breadcrumb text-black text-[3vw] md:text-[2vw] lg:text-[1.1vw] font-medium">
        <Link href={"/"}>Home</Link> {`>`} Cart
      </div>
      <h1 className="Sans text-[5vw] md:text-[4vw] lg:text-[3vw] font-bold mb-4 md:mb-6 lg:mb-8">My Cart</h1>
      <div className="flex gap-6 flex-col lg:flex-row montserrat">
        {
          cartItems?.map((product , ind) =>(
        <div key={ind} className="w-full lg:w-1/2">
          <div className="pt-10 pb-4 border-y-2 border-black">
            <div className="flex md:flex-row flex-col gap-3">
              <div className="img w-full md:w-[20%] md:h-[20%] lg:w-[7vw] lg:h-[7vw] border border-black">
                <Image
                  src={product.productID.thumbnail}
                  width={132}
                  height={132}
                  alt="productimg"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="grow">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex gap-3">
                    <div className="info ">
                      <h1 className="font-bold text-[5.2vw] md:text-[2vw]  lg:text-[1.2vw]">
                      {product.productID.name}
                      </h1>
                      <p className="text-[2.85vw] md:text-[1.5vw] lg:text-[.85vw]">Color: Black</p>
                      <p className="text-[2.85vw] md:text-[1.5vw] lg:text-[.85vw]">Size: 16 inch</p>
                      <p className="text-[2.85vw] md:text-[1.5vw] lg:text-[.85vw]"> Price - ₹{product.productID.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="flex items-center">
                          {/* Decrement button */}
                          <button className="border border-gray-300 rounded-full w-8 h-8 flex justify-center items-center" onClick={() => handleDecrement(ind)}>-</button>
                          {/* Display quantity */}
                          <p className="border border-gray-300 rounded-full w-8 h-8 flex justify-center items-center">{product.quantity}</p>
                          {/* Increment button */}
                          <button className="border border-gray-300 rounded-full w-8 h-8 flex justify-center items-center" onClick={() => handleIncrement(ind)}>+</button>
                        </div>
                    <div className="total">
                      <h1 className="font-bold text-[5.2vw] md:text-[2vw]  lg:text-[1.2vw] text-left lg:text-right">
                        Total
                      </h1>
                      <p className="font-bold text-[4vw] md:text-[1.8vw] lg:text-[1vw] mt-3">₹{formatNumberWithCommas(totalamt())}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between  mt-8 items-center">
                  <div className="buttons flex items-center gap-3 montserrat">
                    <button className="text-[2.85vw] md:text-[1.5vw] lg:text-[.85vw]">Edit</button>
                    <button className="text-[2.85vw] md:text-[1.5vw] lg:text-[.85vw]">Move to Wishlist</button>
                    <button className="text-[2.85vw] md:text-[1.5vw] lg:text-[.85vw]">Save for Later</button>
                  </div>
                  <button className="btn">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

          ))
        }
        <div className="w-full lg:w-1/2">
          <div className="montserrat border-2 py-2 px-4 lg:py-4 lg:px-6 bg-[#F4EBFF] lg:h-[35vw] border-[#781393]">
            <div>
              <p className="font-semibold text-[2.85vw] lg:text-[.85vw] mb-1">
                Enter Promo Code
              </p>
              <div className="flex items-center gap-3 lg:gap-6">
                <input
                  type="text"
                  className="p-2 lg:p-4 w-full"
                  placeholder="Promo Code"
                />
                <button className="p-2 lg:p-4 w-[50%] bg-[#781393]  text-white font-semibold">
                  Submit
                </button>
              </div>
              <div className="font-medium mt-10">
                <div className="flex justify-between">
                  <p className="text-[#000000BF]">Shipping Cost</p>
                  <p>-₹0</p>
                </div>
                <div className="flex justify-between my-4">
                  <p className="text-[#000000BF]">Discount</p>
                  <p>-₹0</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#000000BF]">Tax</p>
                  <p>TBD</p>
                </div>
              </div>
              <div className="total font-bold flex justify-between my-10">
                <p className="text-[#000000BF]">Estimated Total</p>
                <p>₹{formatNumberWithCommas(totalamt())}</p>
              </div>
              <button className="p-4 w-full bg-[#781393] text-white font-medium btn" onClick={makePayment}>
                  Checkout
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

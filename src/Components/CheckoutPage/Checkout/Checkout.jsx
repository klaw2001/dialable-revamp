import Image from "next/image";
import Link from "next/link";
import React from "react";
import Prod from "../../../../public/Images/wheelchairfront.png";

const Checkout = () => {
  return (
    <div className="py-10 px-4 lg:p-24 lg:mb-8 relative overflow-x-clip">
      <div className="breadcrumb mt-10 text-black text-[3vw] md:text-[2vw] lg:text-[1.1vw] font-medium">
        <Link href={"/"}>Home</Link> {`>`} <Link href={"/cart"}>Cart</Link>{" "}
        {`>`} Checkout
      </div>
      <h1 className="Sans text-[5vw] md:text-[4vw] lg:text-[3vw] font-bold mb-4 md:mb-6 lg:mb-8">
        Checkout
      </h1>
      <div className="flex gap-6 flex-col lg:flex-row montserrat">
        <div className="w-full lg:w-1/2">
          <div className="pb-8 border-b-2 border-black">
            <div className="form montserrat">
              <form>
                <div className="contact flex flex-col gap-5">
                  <p className="font-bold text-black text-[1.05vw]">
                    Contact Information
                  </p>

                  <div className="inputCont">
                    <input
                      type="text"
                      className="input p-3 w-full border border-black rounded-none"
                      id="username"
                      required="true"
                    />
                    <label className="label" for="username">
                      Enter Email
                    </label>
                  </div>
                  <div className="inputCont">
                    <input
                      type="text"
                      className="input p-3 w-full border border-black rounded-none"
                      id="username"
                      required="true"
                    />
                    <label className="label" for="username">
                      Enter Phone number
                    </label>
                  </div>
                </div>
                <div className="address flex flex-col gap-5 mt-12">
                  <p className="font-bold text-black text-[1.05vw]">
                    Shipping Address
                  </p>
                  <div className="inputCont">
                    <select
                      type="text"
                      className="input p-3 w-full border border-black rounded-none"
                      id="country"
                      required="true"
                    >
                      <option></option>
                      <option value="India">India</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Malaysia">Malaysia</option>
                    </select>
                    <label className="label" for="username">
                      Country/Region
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="inputCont grow">
                      <input
                        type="text"
                        className="input p-3 border border-black w-full  rounded-none"
                        id="firstname"
                        required="true"
                      />
                      <label className="label" for="firstname">
                        First Name
                      </label>
                    </div>
                    <div className="inputCont grow">
                      <input
                        type="text"
                        className="input p-3 border border-black w-full  rounded-none"
                        id="lastname"
                        required="true"
                      />
                      <label className="label" for="lastname">
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="inputCont">
                    <input
                      type="text"
                      className="input p-3 border border-black w-full  rounded-none"
                      id="address-1"
                      required="true"
                    />
                    <label className="label" for="address-1">
                      Address 01
                    </label>
                  </div>
                  <div className="inputCont">
                    <input
                      type="text"
                      className="input p-3 border border-black w-full  rounded-none"
                      id="address-2"
                      required="true"
                    />
                    <label className="label" for="address-2">
                      Address 02
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="inputCont grow">
                      <input
                        type="text"
                        className="input p-3 border border-black w-full  rounded-none"
                        id="city"
                        required="true"
                      />
                      <label className="label" for="city">
                        City
                      </label>
                    </div>
                    <div className="inputCont grow">
                      <input
                        type="text"
                        className="input p-3 border border-black w-full  rounded-none"
                        id="state"
                        required="true"
                      />
                      <label className="label" for="state">
                        State
                      </label>
                    </div>
                    <div className="inputCont grow">
                      <input
                        type="text"
                        className="input p-3 border border-black w-full  rounded-none"
                        id="zip"
                        required="true"
                      />
                      <label className="label" for="zip">
                       Zip code
                      </label>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox"  name="" id="save" />
                    <label htmlFor="save" className="px-2">Save Address for Future Orders</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="montserrat border-2 py-2 px-4 lg:py-8 lg:px-8 bg-[#F4EBFF]  border-[#781393]">
            <div className="flex md:flex-row flex-col gap-3">
              <div className="img w-full md:w-[20%] md:h-[20%] lg:w-[7vw] lg:h-[7vw] border bg-white ">
                <Image
                  src={Prod}
                  alt="productimg"
                  className="object-cover h-full w-full mix-blend-multiply"
                />
              </div>
              <div className="grow">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex gap-3">
                    <div className="info ">
                      <h1 className="font-bold text-[5.2vw] md:text-[2vw]  lg:text-[1.2vw]">
                        Karma Ergo Lite Silver
                      </h1>
                      <p className="text-[3vw] md:text-[2vw] mt-4 lg:text-[1.05vw]">
                        Qtn:1
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="total">
                      <p className="font-bold text-[4vw] md:text-[1.8vw] lg:text-[1vw] mt-3">
                        ₹2500 /-
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center my-4 border-y-2 border-[#0000004D] py-4 gap-3 lg:gap-6">
                <input
                  type="text"
                  className="p-2 lg:p-4 w-full"
                  placeholder="Discount Code"
                />
                <button className="p-2 lg:p-4 w-[50%] bg-[#781393]  text-white font-semibold">
                  Apply
                </button>
              </div>
              <div className="font-medium my-6">
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
              <div className="total  py-6 font-bold flex justify-between border-t-2 border-[#0000004D]">
                <p className="text-[#000000BF]">Subtotal</p>
                <p>₹2500 /-</p>
              </div>
              <button className="px-4 py-4 mt-6 mb-16 w-full bg-[#781393] text-white font-medium active:scale-[.99] transition-all duration-100">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import axios from "axios";

export const activeNavMenu = (path) => {
  const navItem = document.querySelectorAll(".main-menu li a");
  navItem.forEach((nav) => {
    if (nav.pathname === window.location.pathname) {
      if (!nav.href.includes("#")) {
        if (nav.pathname === "/contact" || nav.pathname === "/about") {
          nav.className = "active";
        } else {
          let navContainer = nav.parentElement.parentElement.parentElement;
          nav.parentElement.parentElement.parentElement.classList.add("active");
        }
      }
    }
  });
};

export const getUserFromLocalStorage = () => {
  try {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error fetching user from localStorage:", error);
    return null;
  }
};

export const imageUpload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "mystore");
  data.append("cloud_name", "dqpj1vyjn");
  const res = await fetch(
    "	https://api.cloudinary.com/v1_1/dqpj1vyjn/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  const res2 = await res.json();
  console.log(res2);
  return res2.url;
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get("/api/products/all-products");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await axios.get(`/api/products/single-product/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching single product:", error);
  }
};
export const getCartItems = async (id) => {
  try {
    const response = await axios.get(`/api/cart/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching cart product:", error);
  }
};

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const deleteCartItems = async (cartID) => {
  try {
    const respone = await axios.delete(`/api/cart/${cartID}`);
    return respone.data.data
  } catch (error) {
    console.log(error);
  }
};
export const getAllListings = async()=>{
  try {
    const response = await axios.get('/api/listing/get-all-listings')
    return response.data.data
  } catch (error) {
    console.error("Error fetching all listings:", error);
    
  }
}
export const getSingleListing = async (id) => {
  try {
    const response = await axios.get(`/api/listing/single-listing/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching single product:", error);
  }
};
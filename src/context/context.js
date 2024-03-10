// // contexts/ProductsContext.js
// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// const ProductsContext = createContext();

// const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   const getAllProducts = async () => {
//     try {
//       const response = await axios.get('/api/products/all-products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   return (
//     <ProductsContext.Provider value={{ products, getAllProducts }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// const useAPI = () => {
//   const context = useContext(ProductsContext);
//   if (!context) {
//     throw new Error('useAPI must be used within a ProductsProvider');
//   }
//   return context;
// };

// export { ProductsProvider, useAPI };

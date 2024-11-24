// App.jsx

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/SigninForm/SigninForm'
import * as authService from '../src/services/authService';
import * as productService from '../src/services/productService';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
const mockProds = [
  {
    _id: 1,
    name: "Product 1",
    category: "Category 1",
    price: 100,
    description: "Description 1"
  },
  {
    _id: 2,
    name: "Product 1",
    category: "Category 1",
    price: 100,
    description: "Description 1"
  },
  {
    _id: 3,
    name: "Product 1",
    category: "Category 1",
    price: 100,
    description: "Description 1"
  },
  {
    _id: 4,
    name: "Product 1",
    category: "Category 1",
    price: 100,
    description: "Description 1"
  },
]


const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [products, setProducts] = useState(mockProds)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllProducts = async () => {
      const productsData = await productService.index()
      setProducts(productsData)
  
    }
    if (user) fetchAllProducts()
  }, [user])


  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

  const handelAddProductToCart = async (product) => {
    setCart([...cart, product]);   
    navigate("/")
  }

  return (
    <>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <>
             <Route user={user} handleSignout={handleSignout} />
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/products" element={<ProductList products={products} />} />
              <Route path="/products/:productid" element={<ProductDetails handleAddProductToCart={handelAddProductToCart} />} />
              
            </>
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
    </>
  );
};

export default App;
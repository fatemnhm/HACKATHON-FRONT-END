// App.jsx

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/SigninForm/SigninForm'
import * as authService from '../src/services/authService';
import ProductList from './components/ProductList/ProductList';

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllQuestions = async () => {
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
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <>
             <Route user={user} handleSignout={handleSignout} />
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/products" element={<ProductList products={products} />} />
              
            </>
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
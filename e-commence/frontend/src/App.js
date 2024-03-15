import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductsDetail';
import Signin from './pages/Auth/Signin';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import Admin from './pages/Admin';
import Home from './pages/Admin/Home';
import Orders from './pages/Admin/Orders';
import AdminProducts from './pages/Admin/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
      </div>
      <div id="content">
        <Routes>
          <Route path="/" exact Component={Products} />
          <Route path="/product/:product_id" Component={ProductDetail} />
          <Route path="/signin" Component={Signin} />
          <Route path="/signup" Component={Signup} />
          <Route path="/basket" Component={Basket} />
          <Route path="*" element={<Error404 />} /> {/* Yıldız (*) yol eşleştirmesi */}
          <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute> <Admin /> </ProtectedRoute>} />
          <Route path="/admin/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path="/admin/orders" element={<ProtectedRoute> <Orders /> </ProtectedRoute>} />
          <Route path="/admin/products" element={<ProtectedRoute> <AdminProducts /> </ProtectedRoute>} />
          {/* 
          
          
          <Route path="/admin/products/:product_id" element={<ProtectedRoute> <Admin /> </ProtectedRoute>} />
          <Route path="/admin/addproduct" element={<ProtectedRoute> <Admin /> </ProtectedRoute>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

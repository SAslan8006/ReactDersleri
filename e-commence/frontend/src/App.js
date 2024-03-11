import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductsDetail';
import Signin from './pages/Auth/Signin';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

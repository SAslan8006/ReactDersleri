import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Product from './Products';
import Signin from './Signin';
import Signup from './components/pages/Auth/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
      </div>
      <div id="content">
        <Routes>
          <Route path="/" exact Component={Product} />
          <Route path="/signin" Component={Signin} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

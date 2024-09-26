// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import MainBody from "./component/MainBody";
import Navbar from "./component/Navbar";
import Contact from "./component/pages/Contact";
import Blog from "./component/pages/Blog";
import About from "./component/pages/About";
import WishList from "./component/ProductCart/WishList";
import ShopCart from "./component/ProductCart/ShopCart";
import Checkout from "./component/ProductCart/Checkout";
import NotFound from "./component/pages/NotFound";
import MenShirts from "./component/Product/MensWear/MenShirts";
import WomensItems from "./component/Product/WomensWear/WomensItems";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        {/* <Routes>
              <Route path="/"  element={<PostList />} />
              <Route path="/create"  element={<CreatePost setSelectedTab={setSelectedTab} />} />
            </Routes> */}

        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/MenShirts" element={<MenShirts />} />
          <Route path="/WomensWear" element={<WomensItems />} />
          <Route path="/ShopCart" element={<ShopCart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;

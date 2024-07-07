import "./App.css";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogpage from "./components/Blogpage";
import ServicePage from "./components/ServicePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#282019]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/blogpage/:id" element={<Blogpage />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/servicePage/:id" element={<ServicePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import SubNav from "./components/SubNav";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Shop from "./screens/Shop";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs"
import ProductPage from "./components/shop/ProductPage";


function App() {
  return (
    <Router>
      <Header />
      <SubNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

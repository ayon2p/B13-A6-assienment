
import { useState, } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import HeroSection from "./component/HeroSection/HeroSection";
import ProductCard from "./component/ProductCard/ProductCard";
import GetStarted from "./component/StartedStep/GetStarted";
import Pricing from "./component/Pricing/Pricing";
import Footer from "./component/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchProducts = async () => {
    const res = await fetch("/data.json");
    return res.json();
};
function App() {
    const [cart, setCart] = useState([]);
    const [productPromise] = useState(() => fetchProducts());
    const handleAddToCart = (item) => {
        const isExist = cart.find((prevItem) => prevItem.id === item.id);
        if (!isExist) {
            setCart([...cart, item]);
            toast.success(`${item.title} added to cart!`, {
                position: "top-right",
                autoClose: 2000,
            });
        } else {
            toast.info("Item already in cart!");
        }
    };
    return (
        <>
            <Navbar cartCount={cart.length} />
            <HeroSection />
            <ProductCard 
                ProductCardPromise={productPromise} 
                cart={cart} 
                setCart={setCart} 
                onAddToCart={handleAddToCart} 
            />
            <GetStarted />
            <Pricing />
            <Footer />
            <ToastContainer position="top-middle" autoClose={2000} />
        </>
    );
}

export default App;
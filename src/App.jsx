
import { Suspense, useState } from 'react'; 
import './App.css';
import HeroSection from './componant/HeroSection/HeroSection'; 
import Navbar from './componant/Navbar/Navbar';
import ProductCard from './componant/ProductCard/ProductCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import GetStarted from './componant/StartedStep/GetStarted';
import Pricing from './componant/pricing/Pricing';
import Footer from './componant/footer/Footer';
const Product = async () => {
    const res = await fetch("/data.json");
    return res.json();
}

function App() {
  const [cart, setCart] = useState([]); 


const handleAddToCart = (item) => {
  setCart((prevCart) => [...prevCart, item]);
 
  toast.success(`${item.title} added to cart!`, {
    position: "top-right",
    autoClose: 2000,
  });
  
};
  const ProductCardPromise = Product();

  return (
    <>
  
      <Navbar cartCount={cart.length} />
      <HeroSection />
      <Suspense fallback={<span>Loading...</span>}>
        
        <ProductCard 
          ProductCardPromise={ProductCardPromise} 
          cart={cart}
          setCart={setCart} 
          onAddToCart={handleAddToCart} 
        />
      </Suspense>
      <GetStarted></GetStarted>
    <Pricing></Pricing>
    <Footer></Footer>
     <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
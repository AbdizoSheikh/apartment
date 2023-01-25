import HomePage from "./pages/HomePage";
import About from './pages/About'

import Property from './pages/Property'
import Contact from './pages/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

import Message from "./components/Message";
import ScrollToTop from "./ScrollTop";


function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
      <Header />
      <ScrollToTop/>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/property" element={<Property />} />
         

          <Route path="/contact" element={<Contact />} />
          



        </Routes>
        <Message/>
        <Footer/>
       
      </BrowserRouter>,
    </div>
  );
}

export default App;

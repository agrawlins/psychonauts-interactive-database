import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from "./Components/Header";
import HomeDisplay from './Components/Home/HomeDisplay';
import CharactersDisplay from './Components/Characters/CharactersDisplay';
import AbilitiesDisplay from "./Components/Abilities/AbilitiesDisplay";
import Summary from './Components/Summary/Summary';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Router> 
            <Header />
            <Routes> 
                <Route path ="/" element={<HomeDisplay />} /> 
                <Route path ="/characters" element={<CharactersDisplay />} />
                <Route path ="/abilities" element={<AbilitiesDisplay />} /> 
                <Route path ="/summary" element={<Summary />} />
                {/* <Route path ="/products/:productId" element={<ProductDetails />} */}
                {/* <Route path ="/services/:serviceId" element={<ServiceDetails />} */}
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
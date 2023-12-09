import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import { Route, Routes } from 'react-router-dom';
import UserContext from './context/context';
import Products from './components/products/Products';

// Create a Home component for the root path
const Home = () => {
  return <h1>Welcome to the Home Page</h1>;
};

function App() {
  const [count, setCount] = useState(0);
  const [accessToken, setAccessToken] = useState(null);

  let passObj ={
    play: "Game",
    car :"Opel",
    plane:"AIR",
    drive: (text) => {
      console.log(text);
      return <p>{text}</p>
    },
    accessToken, // Include accessToken in the context
    setAccessToken, // Provide a function to update accessToken
  }

  return (
    <>
      <UserContext.Provider value={passObj}>
      <NavBar />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />  
          <Route path='/Services' element={<Services />} />  
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Products' element={<Products />} />
        </Routes>

        
        <Header />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
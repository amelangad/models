import Home from './pages/Home'
import Photos from './pages/Photos'
import Contact from './pages/Contact'
import { Routes, Route, useLocation } from "react-router-dom"
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center">
      <Nav />
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathame}>
          <Route index element={<Home />}></Route>
          <Route path="/gallery" element={<Photos />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;


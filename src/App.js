import { useState } from "react";
import './App.css';
import './component/theme.css';
import Header from './component/header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Body from './component/body';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './component/about';
import Footer from './component/footer';
import Contactus from './component/contactus';
import Portfolio from './component/portfolio';

function App() {
  const [theme, setTheme] = useState("light");
  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`${theme}`}>
      <Router>
      <Header toggleTheme={handleThemeToggle} theme={theme} />
          <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/body" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio /> } />
          <Route path="/contactus" element={<Contactus />} />
          </Routes>
        <Footer />
      </Router>
    </div>    
  );
}

export default App;

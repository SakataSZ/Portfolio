import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/' element={<About />} />
          <Route path='/portfolio/' element={<Portfolio />} />
          <Route path='/contact/' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
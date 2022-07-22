import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ResponsiveDrawer from './components/ResponsiveDrower';

const homeUrl = process.env.PUBLIC_URL;

const pages = [
  {name: 'Home', path: homeUrl + '/', element: <Home />},
  {name: 'About', path: homeUrl + '/about', element: <About />},
  {name: 'Contact', path: homeUrl + '/contact/', element: <Contact />}
]

function App() {
  console.log(homeUrl + '/')
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveDrawer pages={pages}/>
        <Routes>
          {/* for local */}
          <Route path='/' element={<Home />} />
          
          {pages.map((page) => (
            <Route path={page.path} element={page.element} key={page.name} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

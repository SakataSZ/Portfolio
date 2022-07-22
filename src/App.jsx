import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveDrawer from './components/ResponsiveDrower';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const baseURL = process.env.PUBLIC_URL

const pages = [
  { name: 'Home', path: baseURL + '/', element: <Home /> },
  { name: 'About', path: baseURL + '/about', element: <About /> },
  { name: 'Contact', path: baseURL + '/contact/', element: <Contact /> }
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveDrawer pages={pages} />
        <Routes>
          {pages.map((page) => (
            <Route path={page.path} element={page.element} key={page.name} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

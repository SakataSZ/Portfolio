import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import ResponsiveDrawer from './components/templates/ResponsiveDrower';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Test from './components/pages/Test';

const baseURL = process.env.PUBLIC_URL

const pages = [
  { name: 'Home', path: baseURL + '/', element: <Home /> },
  { name: 'About', path: baseURL + '/about', element: <About /> },
  { name: 'Contact', path: baseURL + '/contact', element: <Contact /> }
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveDrawer pages={pages}/>
        <Routes>
          <Route path={baseURL + "/test"} element={<Test />} />
          {pages.map((page) => (
            <Route path={page.path} element={page.element} key={page.name} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

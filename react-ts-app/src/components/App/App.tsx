import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from '../../pages/404';
import Home from '../../pages/Home';
import AboutUs from '../../pages/About';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import NotFound from "../../pages/404Page";
import { Home } from "../../pages/HomePage";
import { AboutUs } from "../../pages/AboutPage";
import { Header } from "../Header/Header";
import { FormPage } from "../../pages/FormPage";

export const apiEndpoint = "https://www.flickr.com/services/rest/?";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

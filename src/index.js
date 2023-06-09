import React from 'react';
import './styles/general.scss'
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import NavBar from './components/navbar/NavBar';



const Container = () => {
  return (
    
    <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>

      </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

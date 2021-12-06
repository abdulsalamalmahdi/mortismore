import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Exhibitions from './routes/exhibitions';
import Crafts from './routes/crafts';
import Artist from './routes/artist';
import Home from './routes/home';
import Links from './routes/links';
import './main.css';
import './index.css';
import App from './App';
import Logo from './routes/logo';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path="/logo" element={<Logo/>}/>
      <Route path="home" element={<Home />} />
        <Route path="exhibitions" element={<Exhibitions />} />
        <Route path="crafts" element={<Crafts />} /> 
        <Route path="links" element={<Links />} />
        <Route path="artist/:id" element={<Artist />}> 
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        
      </Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

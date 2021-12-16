import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Unit from './pages/Unit'
import Header from './components/Header'
import Footer from './components/Footer'
import Error404 from './components/Error404'
//import './index.css';
import {createGlobalStyle} from 'styled-components'
const Test = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Test />
      <Header />
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/apropos" element={<Apropos/>} />
        <Route exact path="/unit/:id" element={<Unit/>}>
          render={({match}) => <Unit id={match.params.id} />}
        </Route>
        <Route path="*" element={<Error404/>} />
    </Routes>
    <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


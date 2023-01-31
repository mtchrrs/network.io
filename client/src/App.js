import './App.css';
import React from "react";
import Header from "./components/header";
import Landing from "./components/landing";
import Footer from "./components/footer";
import SignUp from "./components/signup";
import LogIn from "./components/login";
import Profile from "./components/profile";
import Opportunities from "./components/opportunities";
import Portfolio from "./components/portfolio";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        {/* <img src={} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// function App() {
//   return (
//     <Router class="App">
//         <Navigation />
//         <Routes>
//           <Route exact path={`${process.env.PUBLIC_URL}/`} element={ <Home /> }/>
//           <Route exact path={`${process.env.PUBLIC_URL}/about`} element={ <About /> }/>
//           <Route exact path={`${process.env.PUBLIC_URL}/projects`} element={ <Projects /> }/>
//           <Route exact path={`${process.env.PUBLIC_URL}/contact`} element={ <Contact /> }/>
//         </Routes>
//         <Footer />
//     </Router>
//   );
// }
export default App;

import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcustom from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";
import Alert from "./components/Layout/Alert";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import ErrorPage from "./components/Pages/ErrorPage";
import { GithubProvider } from './context/Github/githubContext';
import { AlertProvider } from "./context/alert/AlertContext";
import User from "./components/Pages/User";

function App() {
  return (

    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>        
      <Navbarcustom
          icon="fa fa-github"
          title="InsightHub"
          style={{ color: "white" }}
        />
        <Alert/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:login" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


        <Footer />
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>

  );
}

export default App;

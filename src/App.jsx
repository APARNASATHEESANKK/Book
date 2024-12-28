import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Login from './Pages/Login'; // Importing Login component
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
      <Header />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<Login />} path="/login" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

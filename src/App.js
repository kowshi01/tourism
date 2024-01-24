import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Places from './Components/Places/Places';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import Signup from './Components/Hero/Signup';
import Success from './Components/Hero/Success';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/places' element={<Places/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

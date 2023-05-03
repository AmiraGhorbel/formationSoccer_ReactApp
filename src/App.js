import './App.css';
import Home from './components/Home';
import Wrap from './components/Wrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Matches from './components/Matches';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Player from './components/Player';
import Add from './components/Add';
import Adm2 from './components/Adm2';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdmPla from './components/AdmPla';
import Afficher from './components/Afficher';
import Cartt from '../../soocer/src/components/Cartt';
import Mat from './components/Mat';
import Signup from './components/Signup';
import Login from './components/Login';
import Users from './components/Users';

//import logo from '../public/assets/images/logo.png'
function App() {
  return (
    <div className='site-wrap'>
      <Router>
        <Wrap />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matchs" element={<Matches />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/player" element={<Player />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Add />} />
          <Route path="/editp/:id" element={<AdmPla />} />
          <Route path="/admin" element={<Adm2 />} />
          <Route path="/addpla" element={<AdmPla />} />
          <Route path="/aff" element={<Afficher />} />
          <Route path="/cart" element={<Cartt/>}/>
          <Route path="/sign" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/mat" element={<Mat/>}/>
          <Route path="/user" element={<Users/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;

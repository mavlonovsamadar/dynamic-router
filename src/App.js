import './App.css';
import Home from './components/Home/Home';
import Navbarmenu from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Person from './components/MenuRouter/Person';
import Hi from './components/MenuRouter/Hi';
import Find from './components/MenuRouter/Find';
function App() {
  return (
    <>
    <Router>
    <Navbarmenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/person' element={<Person />} />
        <Route path='/hi' element={<Hi />} />
        <Route path='/find' element={<Find />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

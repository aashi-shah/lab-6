import './App.css';
import Hello1 from './Components/Hello1';
import Hello2 from './Components/Hello2';
import Props from './Components/Props';
import Propchild from './Components/Propchild';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Message from './Components/Message';
import Basiccard from './Components/Basiccard';
import PositionedSnackbar from './Components/PositionedSnackbar';
import LongTextSnackbar from './LongTextSnackbar';
function App() {
  return (
    <div className="App">
      
          {/* <p>well ello there mate!!</p>
          
          <Hello1 />
          <Hello2 />
          <Props name = "Emily"/>
          <Propchild name = "Rege Jean Page"  name1 = "Simon" />   
  <Propchild/>  */}      
          <Navbar />
       {/* <Message message = "Welcome to app"/> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/NavBar" element={<Navbar />} />
            </Routes>   
      {/* <Basiccard />
      <PositionedSnackbar />
      <LongTextSnackbar /> */}
    </div>
  );
}

export default App;

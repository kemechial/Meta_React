import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Promo from './components/Promo';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';

function App() {
  return (
    <div className="App">
          <Promo className = "promo" message = "Don't miss this deal!"/>
          <Nav className = "nav"/>
          <Intro1 />
          <Intro2 />
          <Intro3 />
          <Footer/>
    </div>
  );
}

export default App;

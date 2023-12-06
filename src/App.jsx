import './Style.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Services from './Services';
import Footer from './Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ScrollToTopButton from './ScrollToTopButton';
import Layouts from './Layouts';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />  
        <Routes>
                <Route path='/'  exact Component={Layouts} />
                <Route path='/about' exact Component={About} />
                <Route path='/skills' exact Component={Skills} />
                <Route path='/services' exact Component={Services} />
                <Route path='/portfolio' exact Component={Portfolio} />
                <Route path='/contact' exact Component={Contact} />
            </Routes>
        <Footer /> 
      </BrowserRouter>         
    </div>
  );
}

export default App;

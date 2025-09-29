
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter  } from 'react-router-dom';
import Contact from './Component/Contact';
import Skills from './Component/Skills';
import Project from './Component/Project';
import Header from './Component/Header';
import About from './Component/About';
function App() {
  return (
   <>
        <BrowserRouter>
        <Header/>
        <About/>
        <Skills/>
         <Project/>
         <Contact/>
        </BrowserRouter>

   </>
  );
}

export default App;

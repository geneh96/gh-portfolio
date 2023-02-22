import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;

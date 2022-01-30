import './App.css';
import Intro from './components/introduction/Intro';
import AboutList from './components/about-me-list/AboutList';
import Contact from './components/contacti/Contact';
import Skills from './components/skillsat/Skills';


function App() {
  return (
    <div>
      <Intro />
      <AboutList />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
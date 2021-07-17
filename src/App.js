import Header from './components/Header'
import About from './components/About'
import Intro from './components/Intro'
import Project from './components/Project'
import Experience from './components/Experience'
import Footer from './components/Footer'


function App() {

  const onClick = () => {
    alert("clicked")
  }

  return (
    
    <div className="">
      
      <Header onClick={onClick}/>
      <About />
      <Intro />
      <Project />
      <br/>
      <Experience />
      <Footer/>
    </div>
  );
}

export default App;

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import {AnimatePresence} from 'framer-motion'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
          <div className="container app_container">
            <div className="row app_row">
         <div className="col-lg-3 ">
          
          <Sidebar/>
          
           
         </div>
         <div className=" col-lg-9 app_main-content">
              
         <Navbar/>
         
         <switch>
        <Routes>
        <Route path="/" element={ <About/>}/>
        <Route path="/resume" element={ <Resume/>}/>
        <Route path="/Projects" element={ <Projects/> }/>
       
       
      
        </Routes>
        
        </switch>

                
            
         </div>
         </div>
         </div>
         </div>
         </Router>
         
  );
}

export default App;

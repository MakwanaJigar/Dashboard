import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {

  const [toggle,setToggle]=useState(true);
  const Toggle= () => {
      setToggle(!toggle);
  }

  return (
    <div className="container-fluid bg-light vh-100">
      <div className="row">
       {toggle && <div className="col-2 bg-white vh-100 position-fixed">
        <Sidebar />
        </div>}
        {toggle && <div className="col-2"></div>}
        <div className="col">
            <Home Toggle={Toggle}/>
        </div>
      </div>
   
    </div>
  );
}

export default App;

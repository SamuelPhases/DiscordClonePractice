import React,{useState} from 'react'
import './App.css';
import SideA from './components/SIDE_A/SideA';
import SideB from './components/SIDE_B/SideB';
import SideC from './components/SIDE_C/SideC';
import SideD from './components/SIDE_D/SideD';

function App() {
  
  const [showList,setShowList]   = useState(true)
  return (
    <div className="app">

      <SideA />
      <SideB />
      <SideC setShowList={setShowList} showList={showList}  />
      <SideD setShowList={setShowList} showList={showList}  />
    </div>
  );
}

export default App;

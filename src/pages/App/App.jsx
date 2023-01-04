import { useState } from 'react';
import RecordKeeper from '../../components/RecordKeeper/RecordKeeper';
import DynamicMenuMaker from '../../components/DynamicMenuMaker/DynamicMenuMaker';
import GetTogether from '../../components/GetTogether/GetTogether';
import AboutCard from '../../components/AboutCard/AboutCard';
import './App.css';

function App() {
  const [openProject, setOpenProject] = useState('');

  return (
    <div className="App">
      <div>
        <h2>TAYLOR</h2> 
        <h2>ROMOSER</h2>
      </div>
      <div>
        <h4>Projects</h4>
      </div>
      <div className='project-container' >
        <RecordKeeper  />
        <DynamicMenuMaker  />
        <GetTogether  />
        <AboutCard />
      </div>
    </div>
  );
}

export default App;
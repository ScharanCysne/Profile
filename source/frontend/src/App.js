import './App.css'

import Curriculum from './component/curriculum';
import FloatingButton from './component/FloatingButton';
import Projects from './component/projects';
import Skillset from './component/skillset';
import SubHeader from './component/subheader';

function App() {
  return (
    <div className="App" style={{ marginLeft: '5%', marginRight: '5%', display: 'block'}}>
      <p style={{textAlign: 'center'}}><i class="arrow down"></i></p>
      <div>
        <SubHeader/>
        <Skillset />
        <Curriculum/>
        <Projects/>
      </div>
      <FloatingButton/>
    </div>
  )
}

export default App

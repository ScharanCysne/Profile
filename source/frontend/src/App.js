import './App.css'

import Divider from '@mui/material/Divider';
import Curriculum from './component/curriculum';

const SubHeader = () => {
  return (
    <div>
      <h1
        style={{
          color: 'white',
          fontFamily: 'avenir',
          textAlign: 'center',
        }}
      >
        Nicholas Scharan Cysne
      </h1>
      <Divider variant='middle' style={{color: 'white', border: '1px solid'}}/>
      <h3
        style={{
          color: 'white',
          fontFamily: 'avenir',
          textAlign: 'center',
          paddingLeft: '5em',
          paddingRight: '5em',
          marginBottom: '5em'
        }}
      >
        <i>
          "My goal is to develop the tools, systems, and processes that enable
          artificial intelligence to be applied in the real world, thus
          generating tangible and positive impact."
        </i>
      </h3>
    </div>
  )
}


function App() {
  return (
    <div className="App" style={{ marginLeft: '5%', marginRight: '5%', display: 'block'}}>
      <p style={{textAlign: 'center'}}><i class="arrow down"></i></p>
      <SubHeader/>
      <Curriculum/>
    </div>
  )
}

export default App

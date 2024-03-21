import './App.css'

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Curriculum from './component/curriculum';
import FloatingButton from './component/FloatingButton';

const SubHeader = () => {
  return (
    <div>
      <Avatar
        alt="Nicholas Scharan Cysne"
        src="/static/images/avatar.jpg"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '10em',
          height: '10em'
        }}
      />
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
          artificial intelligence to be applied to the most complex problems in today's
          society, thereby generating tangible and positive impact in the world."
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
      <FloatingButton/>
    </div>
  )
}

export default App

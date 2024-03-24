import './App.css'

import { useRef } from 'react';

import Curriculum from './component/curriculum';
import Projects from './component/projects';
import SubHeader from './component/subheader';

import IconButton from '@mui/material/IconButton';
import FloatingButton from './component/FloatingButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ChatButton from './component/chatButton';

function App() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="App" style={{marginLeft: '5%', marginRight: '5%', display: 'block'}}>
      <SubHeader position='25%' position_type='absolute'/>
      <div style={{textAlign: 'center', position: 'relative', top: '-4em'}}>
        <IconButton onClick={executeScroll} aria-label="delete" size="large">
          <ArrowBackIosIcon className="arrow down" fontSize="inherit"/>
        </IconButton>
      </div>
      <div ref={myRef} style={{position: 'relative', top: '-3em'}}/>
      <div>
        <Curriculum position='110%' position_type='absolute'/>
        <Projects position='200%' position_type='absolute'/>
      </div>
      <FloatingButton/>
    </div>
  )
}

export default App

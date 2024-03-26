import './App.css'

import React, { useRef } from 'react';

import Curriculum from './component/curriculum';
import Projects from './component/projects';
import SubHeader from './component/subheader';

import IconButton from '@mui/material/IconButton';
import FloatingButton from './component/FloatingButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function getStyle(){
  if (screen.height / screen.width >= 982 / 1512)
    return {display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%'}
  else
    return {display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%'}
}

function App() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const [scrollYPosition, setScrollYPosition] = React.useState(0);
  const [workEnabled, setWorkEnabled] = React.useState(false);
  const [projectEnabled, setProjectEnabled] = React.useState(false);

  const handleScroll = () => {
      setScrollYPosition(window.scrollY);


  };

  React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  // Now the vertical position is available with `scrollY`
  if(!workEnabled && scrollYPosition > 750)
    setWorkEnabled(true)

  if(!projectEnabled && scrollYPosition > 1300)
    setProjectEnabled(true)

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
        <Curriculum position='110%' position_type='relative'/>
        <Projects position='210%' position_type='absolute'/>
      </div>
      <FloatingButton/>
      <img src={'../static/images/work.jpg'} alt="Logo" className='smooth' style={{
        ...getStyle(),
        position: 'absolute',
        top: '100%',
        left: workEnabled ? '-100%' : '0',
      }}/>
      <img src={'../static/images/projects.jpg'} alt="Logo" className='smooth' style={{
        ...getStyle(),
        position: 'absolute',
        top: '200%',
        left: projectEnabled ? '-100%' : '0',
      }}/>
    </div>
  )
}

export default App

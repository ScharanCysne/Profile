import Chat from "./component/chat";
import Curriculum from "./component/curriculum";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from "./component/header";

function App() {
  return (
    <Container className="App" style={{margin: "5%"}}>
      <Header/>
      <Row>
        <Col>
          <Curriculum/>
        </Col>
        <Col>
          <Chat/>
        </Col>
      </Row>
    </Container>
  )
}

export default App

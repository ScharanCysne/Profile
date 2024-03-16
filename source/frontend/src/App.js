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
        <Col style={{marginTop: "5%"}}>
          <Chat />
        </Col>
        <Col>
          <Curriculum/>
        </Col>
      </Row>
    </Container>
  )
}

export default App

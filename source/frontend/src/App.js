import Chat from "./component/chat";
import Curriculum from "./component/curriculum";

import { Row, Col, Container } from "reactstrap";
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

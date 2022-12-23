import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BasicExample() {
  return (
    <Container style={{position: 'relative'}}>
      <Row style={{position: 'absolute', top: 50, left: 50}}>
        <Col style={{display:'flex', justifyContent:'center',alignItems:'center', height: 700}}>
          <img
            className="d-block w-100"
            src="https://www.goldmansachs.com/insights/pages/multimedia/the-future-of-coding-is-conversation.jpg"
            alt="First slide"
            width={1000}
            height={780}
          />
        </Col>
        <Col style={{display:'flex', justifyContent:'center',alignItems:'center', height: 700}}>
          <Form style={{borderWidth: 1, borderStyle:'solid', borderRadius: 5,padding: 20, height: 400}}>
            <h1 style={{textAlign: 'center'}}>
              Login
            </h1>
            <div style={{position: 'relative', top: 50}}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
              <Button style={{ width: 300 }} variant="primary" type="submit">Salvar </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
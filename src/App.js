import React from 'react';
//import Button from 'react-bootstrap/Button';
import { Container, Button, Alert } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Button variant="primary">Entrar</Button>
      <Alert variant="danger">Nome obrigatório?</Alert>
    </Container>
  );
}

export default App;

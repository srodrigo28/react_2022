import React from 'react';
//import Button from 'react-bootstrap/Button';
import { Button, Alert } from 'react-bootstrap';

function App() {
  return (
    <>
      <Button variant="primary">Entrar</Button>
      <Alert variant="danger">Nome obrigatório?</Alert>
    </>
  );
}

export default App;

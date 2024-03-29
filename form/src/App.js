import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function App() {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [validationStates, setValidationStates] = useState({ emailState: true, passwordState: true });

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
    validatePassword(e.target.value);
  };

  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });

  const validateEmail = (email) => {
    const re = /^(([^<>()[\\]\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"]{2,})$/i;
    setValidationStates({ ...validationStates, emailState: re.test(email) });
  };

  const validatePassword = (password) => {
    // Password format: At least 9 characters long, with numbers and letters
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/;
    setValidationStates({ ...validationStates, passwordState: re.test(password) });
  };

  const clickSubmit = () => {
    validateEmail(formValues.email);
    validatePassword(formValues.password);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email}/>
          { !validationStates.emailState && <Form.Text className="text-muted">Invalid email address.</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
          { !validationStates.passwordState && <Form.Text className="text-muted">Your password should have numbers and letters and should be at least 9 char long</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
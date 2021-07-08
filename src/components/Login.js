import React, { useState } from "react";
import {Form, Button } from "react-bootstrap";
import Axios from "axios";
import "./Login.css";
import {useHistory} from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const login = () =>{
    Axios.post("http://localhost:9000/login", {
      username : email,
      password : password,
    }).then((response) => {
      if (response.status === 200) {
        history.push('/demo');
    }
      
    }, (error) => {
      console.log(error);
    });
  };


  return (
    <div className="Login">
      <Form >
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group  controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={login} >
          Login
        </Button>
      </Form>
    </div>
  );
}

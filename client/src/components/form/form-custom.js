import React, {Component} from 'react';
import {Form } from 'react-bootstrap';
import styled from 'styled-components'

class FormCustom extends Component{

  render(){
    return(
      <Styles>
        <div class="login-dark">
          <Form method="post">
            <h2 class="sr-only">Login Form</h2>
            <Form.Group  controlId="formGroupEmail">
                <Form.Control variant="flat" type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
          </Form>
        </div>
      </Styles>
    )
  }
}
export default FormCustom;

const Styles = styled.div`
}

.login-dark form .form-control {
  background:none;
  border:none;
  border-bottom:1px solid #434a52;
  border-radius:0;
  box-shadow:none;
  outline:none;
  color:inherit;
}

.login-dark form .btn-primary:active {
  transform:translateY(1px);
}

`
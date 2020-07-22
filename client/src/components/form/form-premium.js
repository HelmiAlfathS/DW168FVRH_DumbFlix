
import React, {Component} from 'react';
import {Form, Container } from 'react-bootstrap';
import Button from '../button';
import styled from 'styled-components'
import {Link} from 'react-router-dom';

class FormPremium extends Component{
  render(){
    return(
      <Styles>
        <Container>
          <Form > 
            <Form.Group  controlId="">
              <Form.Control type="text" placeholder="Input Your Account Number" />
            </Form.Group>
            <Form.File id="" custom>
                <Form.File.Input isValid />
                <Form.File.Label data-browse="Icon">
                    Attach Some File
                </Form.File.Label>
            </Form.File>
          </Form>
            <div >
              <Button primary className="stretch"> Kirim </Button>
            </div>
          </Container>
      </Styles>

    )
  }
}
export default FormPremium;

const Styles = styled.div`

`
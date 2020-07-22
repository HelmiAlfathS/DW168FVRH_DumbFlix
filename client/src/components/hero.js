import React, { Component } from 'react';
import { Jumbotron as Jumbo, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Button from './button';
import { Link } from 'react-router-dom';
import jumbotron from '../assets/jumbotron.png';
import thewitcherText from '../assets/thewitcherText.png';

const Styles = styled.div`
  .Hero {
    background: url(${jumbotron}) no-repeat center;
    background-size: center;
    height: 600px;
    position: relative;
    z-index: -2;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 50%;
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0)
      );
      position: absolute;
      bottom: 0;
    }
  }
  .showcase-text {
    font-family: 'Product sans';
    margin-top: 50px;
    text-shadow: 1px 1px 2px black;
  }
  .text-display {
    color: white;
    font-weight: 400;
  }
  .title {
    width: 480px;
    margin-bottom: 15px;
  }

  .transparant {
    background-color: rgba(0, 0, 0, 0);
    padding: 0 6px;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
  }
`;

class Jumbotron extends React.Component {
  render() {
    const { hero, heroText } = this.props;
    return (
      <Styles>
        <Jumbo fluid className="Hero">
          <Container className="text-display">
            <Row className="showcase-text">
              <Col lg={6}>
                <Link to="/home">
                  <img src={thewitcherText} className="title" alt="the" />
                </Link>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.This is a modified jumbotron
                  that occupies the entire horizontal space of its parent.{' '}
                </p>
                <div className="info">
                  <p>
                    2019 <button className="transparant">TV Series</button>
                  </p>
                </div>
                <Button primary large>
                  {' '}
                  WATCH NOW !{' '}
                </Button>
              </Col>
            </Row>
          </Container>
        </Jumbo>
      </Styles>
    );
  }
}
export default Jumbotron;

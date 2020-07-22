import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import card1 from '../assets/cards/card1.png';
import card2 from '../assets/cards/card2.png';
import Poster from './poster';
import { Route, withRouter } from 'react-router-dom';

class CardMovie extends Component {
  render() {
    const { title, year, id, imgUrl } = this.props;

    return (
      <Styles>
        {/* <Link to="`/datail/${id}`"> */}
        <div className="moviecard" key={id}>
          <img
            className="poster"
            src={imgUrl}
            alt="ads"
            onClick={() => this.props.history.push(`/detail/${id}`)}
          />
          <h6 className="title">{title}</h6>
          <p className="year">{year}</p>
        </div>
        {/* </Link> */}
      </Styles>
    );
  }
}
export default withRouter(CardMovie);

const Styles = styled.div`

    .title,
    .year {
      font-family: 'Product sans';
      color: white;
    }
    .moviecard {
      width: 200px;
      background-color: none;
      margin: 5px;
      transition: all 0.2s ease;

      .poster {
        width: 100%;
        object-fit: cover;
        max-height: 300px;
      }
      .title {
        font-size: 18px;
        font-weight: bold;
        margin-top: 5px;
      }
      .year {
        font-size: 14px;
      }
      &:hover {
        transform: scale(1.02);
      }
    }

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 900px) {
    .services {
      display: flex;
      flex-direction: column;
    }
  }
`;

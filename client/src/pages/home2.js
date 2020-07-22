import React, { Component, Fragment } from 'react';
import Jumbotron from '../components/hero';
// import Bio from '../components/bio';
import CardMovie from '../components/cardMovie';
import { getFilm } from '../redux/actions/fimAction';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import jumbotron from '../assets/jumbotron.png';
import thewitcherText from '../assets/thewitcherText.png';

// disini kita akan emngget film

class Home2 extends Component {
  componentDidMount() {
    this.props.getFilm();
  }
  render() {
    console.log(this.props);
    const { data, loading, error } = this.props;
    const film = this.props.data;
    let filmList;
    if (film === null || loading) {
      return null;
    } else {
      filmList = film.map((maindata, index) => {
        return (
          <>
            <h3 className="category" key={index}>
              {maindata.category}
            </h3>
            <div className="wrapper">
              {maindata.films.map((data, subindex) => (
                <CardMovie
                  key={subindex}
                  id={data.id}
                  imgUrl={data.thumbnailFilm}
                  title={data.title}
                  year={data.year}
                />
              ))}
            </div>
          </>
        );
      });
    }

    return (
      <Styles>
        <Fragment>
          <Jumbotron hero={jumbotron} heroText={thewitcherText} />
          <Container>{filmList}</Container>
        </Fragment>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.getFilm;
  return {
    data,
    loading,
    error,
  };
};

export default connect(mapStateToProps, { getFilm })(Home2);

const Styles = styled.div`
.category { 
  margin-bottom : 20px;
  color: white
}
.wrapper{
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(200px,1fr));
  // padding: 20px;
  margin: 5px 0px 30px;
  // border: 2px solid blanchedalmond;
  align-items: center;
  flex-wrap: wrap;
  // justify-content: space-between;`;

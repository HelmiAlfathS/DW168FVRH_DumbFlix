import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import CardMovie from '../components/cardMovie';
import { getFilm } from '../redux/actions/fimAction';
import { connect } from 'react-redux';

class MovieAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
    };
  }
  componentDidMount() {
    this.props.getFilm(); //dispatch
  }
  render() {
    const { films, loading, error } = this.props.films;
    let filmList;
    if (films === null || loading) {
      return null;
    } else {
      if (this.state.selectedCategory === 'Movie') {
        filmList = films.map((maindata, index) => {
          if (maindata.category === 'Movie')
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
      } else if (this.state.selectedCategory === 'TV Series') {
        filmList = films.map((maindata, index) => {
          if (maindata.category === 'TV Series')
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
    }
    return (
      <Styles>
        <Container className="mt-5 d-flex justify-content-between">
          <div className="d-flex">
            <h3 className="text-white">List Film </h3>

            <label className="ml-4 text-white" variant="bg-dark">
              <select
                className="form-control bg-dark text-white"
                onChange={(e) => {
                  this.setState({ selectedCategory: e.target.value });
                }}
              >
                <option value="">Category</option>
                <option value="Movie">Movie</option>
                <option value="TV Series">TV Series</option>
              </select>
            </label>
          </div>
          <div className="d-flex flex-row-reverse">
            <Button
              style={{
                backgroundColor: '#E50914',
                color: 'white',
                border: 'none',
                fontWeight: 'bold',
              }}
              className=" px-4 py-1"
            >
              {' '}
              <a
                href="/film"
                className="text-white"
                style={{ textDecoration: 'none' }}
              >
                Add Film
              </a>
            </Button>
          </div>
        </Container>
        <Container className="mt-4">{filmList}</Container>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.getFilm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getFilm: () => dispatch(getFilm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieAdmin);

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
  justify-content: start;
  flex-wrap: wrap;
  // justify-content: space-between;`;

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Poster from '../components/poster';
import card2 from '../assets/cards/card2.png';
import { Player } from 'video-react';
import ReactPlayer from 'react-player/youtube';
import { Container, Button, Carousel } from 'react-bootstrap';
import ModalEpisode from '../components/form/modalEpisode';
import { connect } from 'react-redux';
import { detailFilm } from '../redux/actions/fimAction';
import { detailEpisode } from '../redux/actions/episodeAction';

// {props.title) {props.url} {props.} ntar dimapping di parent yaitu page detil, ini msh dummy

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  componentDidMount() {
    this.props.allEps(this.props.id);
  }
  closeModal() {
    this.setState((state) => ({
      show: false,
    }));
  }
  showModal() {
    this.setState((state) => ({
      show: !this.state.show,
    }));
  }
  render() {
    const { data } = this.props.auth;
    const { loading, error, detail } = this.props.film;
    const { loading: loadingEps, error: errorEps, dataEps } = this.props.eps;
    console.log(dataEps);
    let epsList;
    // if (dataEps === null || loading) {
    //   return null;
    // } else {
    //   epsList = dataEps.map((eps, index) => {
    //     return (
    //       <>
    //         <Carousel.Item>
    //           <div className="player-wrapper ml-auto">
    //             <ReactPlayer
    //               className="react-player"
    //               url={eps.linkFilm}
    //               width="100%"
    //               height="100%"
    //               controls={true}
    //             />
    //           </div>
    //         </Carousel.Item>
    //       </>
    //     );
    //   });
    // }
    return (
      <Styles>
        <Container className="d-flex flex-row-reverse">
          {detail === null || loading ? (
            <p>Fetching Data . . .</p>
          ) : data.role === 1 && detail.category.id === 2 ? (
            <Button
              onClick={this.showModal}
              style={{
                backgroundColor: '#E50914',
                color: 'white',
                border: 'none',
                fontWeight: 'bold',
              }}
              className="px-4"
            >
              {' '}
              Add Episodes
            </Button>
          ) : (
            false
          )}
        </Container>
        <div className="wrapper">
          {detail === null || loading ? (
            <p>Fetching Data . . .</p>
          ) : (
            <>
              <div className="poster">
                <Poster
                  src={`http://localhost:5000/api/v1/uploads/${detail.thumbnailFilm}`}
                />
              </div>
              <div className="description">
                <h2>{detail.title}</h2>
                <p>
                  2019{' '}
                  <button className="transparant">
                    {detail.category.category}
                  </button>
                </p>
                <p>{detail.description}</p>
              </div>
            </>
          )}

          <div className="videoplayer">
            {dataEps === null || loadingEps ? (
              <p>fetch ... </p>
            ) : (
              <Carousel>
                {dataEps.map((eps) => {
                  return (
                    <Carousel.Item>
                      <div className="player-wrapper ml-auto">
                        <ReactPlayer
                          className="react-player"
                          url={eps.linkFilm}
                          width="100%"
                          height="100%"
                          controls={true}
                        />
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            )}
          </div>

          {/* <div className="trailer">
              <ReactPlayer className="react-player"
                url= 'https://www.youtube.com/watch?v=ysz5S6PUM-U'  // {props.url}
                false 
                controls
                />
  
            </div> */}
        </div>
        <ModalEpisode
          show={this.state.show}
          openModal={this.showModal}
          closeModal={this.closeModal}
          id={this.props.id}
        />
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
    film: state.getFilm,
    eps: state.detailEpisode,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    allEps: (id) => dispatch(detailEpisode(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Description);

const Styles = styled.div`
  .wrapper{
    display: grid;
    grid-template-columns: 0.4fr 0.7fr 0.8fr;
    grid-template-areas: 
      "poster deskripsi trailer";
    grid-gap: 5px;
    margin: 50px 30px;
    // height: 500px;
    // background-color: yellow;

    .poster{
      grid-area: poster;
      justify-self:center
    }
    .description{
      grid-area: deskripsi;
      // background-color: red;
      color: white;
      font-family: 'Product sans';
      text-align: justify;
      padding: 0 20px;

      h2{
        font-weight:bold;
        margin-bottom: 10px
      }
      .transparant{
        background-color : rgba(0,0,0,0);
        padding : 0 10px;
        color: white;
        border: 2px solid white;
        border-radius: 5px;
        margin-left:15px; 
      }
    }
    // .trailer{
    //   grid-area: trailer;
    //   // background-color: blue;
    //   // justify-self:center;

    //   .react-player{
    //     width:100%
    //   }
    .videoplayer{
      grid-area:trailer;
      margin-top: 10px;
      width: 85%;
      
    }
    }
  }
  .showcaseplayer {
    background: rgba(31, 31, 31, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
  }
  .player-wrapper {
    width: 360px;
    height: 240px;
    border: 2px solid white;
   
  }
  .carousel-control-next-icon {
    margin-right:-190%
  }
  .carousel-indicators {
    margin-left: 35%;
    bottom: -45px
  }
  @media (max-width:900px){
    .wrapper{
      display: flex;
      flex-direction: column;
      justify-item: center;
    }
    .poster{
      display: none;
      margin: 10px auto 0;
    }
    .description{
      margin: 20px 0 40px;
    }
    .videoplayer{
      margin-left: 40px
    }

  }

`;

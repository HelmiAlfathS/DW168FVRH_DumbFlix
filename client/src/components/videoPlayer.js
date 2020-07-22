import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
import { getFilm } from '../redux/actions/fimAction';

function MediaPlayer(props) {
  return (
    <Styles>
      <Jumbotron fluid className="showcaseplayer">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=JOAWOLaxcCA&t=4s"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        {/* <div className="videoplayer">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            // fluid={false}
            controls={true}
            width={820}
            height={540}
            // videoWidth= "16:9"
          />
        </div> */}
      </Jumbotron>
    </Styles>
  );
}

export default MediaPlayer;

// function MediaPlayer (props){
//   return(
//     <Styles >
//       <Jumbotron fluid>
//         {/* <Container> */}
//           <ReactPlayer className="react-player"
//                 url= 'https://www.youtube.com/watch?v=ysz5S6PUM-U'  // {props.url}
//                 false
//                 controls
//                  />

//         {/* </Container> */}
//       </Jumbotron>
//     </Styles>
//   )
// }
// export default MediaPlayer;

const Styles = styled.div`
  // .showcaseplayer {
  //   height: 530px;
  //   background-color: rgba(31, 31, 31, 0.3);
  //   // display: flex;
  // }

  // .videoplayer {
  //   margin: -64px auto 0;
  //   // // height: 430px;
  //   // width: 952px;
  //   // margin-top: -64px;
  //   // // border: 2px solid red;
  // }
  // .player-wrapper {
  //   position: relative;
  //   padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  // }

  //
  .showcaseplayer {
    background: rgba(31, 31, 31, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
  }
  .player-wrapper {
    width: 780px;
    height: 480px;
  }
  // .react-player {
  //   position: absolute;
  //   top: -65px;
  //   left: 15%;
  // }
`;
// BROO, utk react-video ada masukan script di scss, dan link di public index.js

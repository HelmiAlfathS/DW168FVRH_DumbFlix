import React, {Component} from 'react';
import styled from 'styled-components';
import {Lock} from '@styled-icons/boxicons-solid';
import {FaUserCircle} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import {Col} from 'react-bootstrap';
import profil from '../assets/profil.png'


class Bio extends Component{
  render(){
    return(
      <IconContext.Provider value={{color:'red', size:"30px", style: { marginRight : "30px", marginTop:"5px"}}}>
        <Styles>
        <div class="wrapper">
          <div class="row">
            <Col md={7}>
              <div class="biodata">
                <h3 class="biodata-title">Personal Info </h3>
                <ul>
                  <li>
                    <FaUserCircle/>
                    <div class="profil-data">
                      <p class="data-user">Helmi Alfath Septiana</p>
                      <p class="data-label">Full Name</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={5}>
              <div class="profil">
                <img className="photo-profil" src= {profil} alt="ada"/>
                <button class="profil-button">Change Photo profil</button>
              </div>
            </Col>
          </div>
        </div>
      </Styles>
        
      </IconContext.Provider>
    )
  }
}
export default Bio;

const Styles = styled.div`
.wrapper {
	width: 785px;
	height: 490px;
	background-color: grey;
	padding: 30px;
	margin: 50px auto;
	border-radius: 10px;
}
ul{
  margin:0;
  padding:0
}

.profil{
	padding: 10px;

}
.profil-photo{
	width: 280px;
	height: 345px;
}
.profil-button{
	display: block;
	border:none;
	outline: none;
	width: 280px;
	height: 50px;
	background-color: rgba(207, 19, 19, 0.925);
	border-radius: 5px;
	font-size: 18px;
	color: white;
	font-weight: bold;
	letter-spacing: 1px;
	transition: .2s;
	margin-top: 10px;
}

.biodata h3{
	font-weight: bold;
}
.biodata ${FaUserCircle}{
	font-size: 23px;
	color: red;
	border-radius: 50%;
	margin-right: 20px;
	transition: .2s;
	line-height: 40px;
}
.biodata li{
	display: flex;
	list-style: none;
	margin-bottom: 20px;
}
.biodata p{
	margin: 0px;
}
.biodata .data-user{
	font-weight: bold;
	font-size: 14px;
}
.biodata .data-label{
	font-size: 12px;
}

`

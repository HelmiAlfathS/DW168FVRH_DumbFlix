import React from 'react';
import Hero from './components/hero'

class Home extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <Hero />
      </div>
    )
  }
}
export default Home;
import React, { Component } from 'react';
import bkgrnd from '../img/11th_Living_01a.jpg'

class Philosophy extends Component {
  render() {
    return (
      <section id="home" style={ { backgroundImage: `url(${bkgrnd})`} }>
        <header>
          <h1> Our Philosophy </h1>
          <p> We at <strong> Delray Sober House</strong> take pride in...</p>
        </header>
      </section>
    )
  }
}
export default Philosophy

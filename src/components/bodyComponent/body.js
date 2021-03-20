import React, { Component } from 'react';
import './body.css'

class Body extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  onSubmit = (event) => {
    event.preventDefault()
     if (this.state.input.length != 1) {
       return document.getElementById('error').innerHTML="No email found"
     }
  }
  render() {
    return(
      <section className = "image-banner">                   
          <div className = "text-1">
              COMING SOON
          </div>
          <div className = "text-2">
              The Dessa MiniPhone 2 
          </div>
          <div className = "text-3">
              Type your Email below to recieve further updates
          </div>
          <input>{this.state.input}</input>
          <button onClick= {this.onSubmit}>Send</button>
          <p id="error"></p>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </section>
      
    )
  }
  }
  export default Body;

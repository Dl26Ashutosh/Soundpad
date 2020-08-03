import React, { Component, Children } from 'react'
import './soundButton.css'


class soundButton extends Component {
    handleClick =  (props) =>
    {
        const audio = new Audio(this.props.track);
        audio.play();
      }
    render() {
        return (
         <>
        <div className="sound-Container">
        <div className="Sound-Button" onClick={this.handleClick}>{this.props.children} </div>   
        </div>
        </>
        )
    }
}

export default soundButton

import React, { Component } from 'react'
import './App.css';
import SoundButton from './soundButton' 
import SOUNDS from './sounds/tracks.json'
class App extends Component {
  render() {
    return (
      <>
      <div className="pad-Title">ध्वनि पैड</div>
      <div className="pad-Container">
      {SOUNDS.map(sound => (
          <SoundButton 
            key={sound.track} 
            track={sound.track}>
            {sound.title}
          </SoundButton>
        ))}
      </div>
      </>
    )
  }
}
export default App

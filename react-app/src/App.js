import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'

import './App.css'

import bike from './bike.svg'
import bus from './bus.svg'
import railway from './railway.svg'
import location from './location.svg'

const MenuIcon = props =>
  <img className='menu-icon' src={props.src} />

const MenuBar = props => (
  <div className="menu-bar" id='menu-bar'>
    <div id='menu-icon-container'>
      <MenuIcon src={bike} />
      <MenuIcon src={bus} />
      <MenuIcon src={railway} />
    </div>
  </div>
)

const LocationButton = props =>
  <img className="location-button" src={props.src} />

const MyGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
    defaultCenter={{
      lat: 53.346348,
      lng: -6.263098
    }}
  />
))

class App extends Component {
  render() {
    return (
      <div className="app">
        <MenuBar
          text="Dublin Bikes Stations"
        />
        <MyGoogleMap
          containerElement={
            <div
              id='map-container'
              style={{
                width: window.innerWidth,
                height: (window.innerHeight - 55)
              }}
            />
          }
          mapElement={
            <div id='map' />
          }
        />
        <LocationButton src={location} />
      </div>
    )
  }
}

export default App;

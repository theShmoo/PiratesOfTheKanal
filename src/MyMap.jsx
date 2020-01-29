import React, {Component} from 'react';
import {
  Map, GoogleApiWrapper, Marker, InfoWindow
} from 'google-maps-react';

const mapStyles = {
  width: "100%",
  height: "100%"
};

const startPosition = {
  lat: 47.987884, lng: 16.255677
};

class MyMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  render()
  {
    return <Map
      google={this.props.google}
      zoom={15}
      style={mapStyles}
      initialCenter={startPosition}
      onClick={this.onMapClicked}
    >
      <Marker
        position={startPosition}
        onClick={this.onMarkerClick}
        name="Start und Ziel" />
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
    </Map>
  }
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZxv-Pr60shB6nkzskYdb2wHw1OLmDkuM'
})(MyMap);

import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const position_start = [
  48.2312071, 16.4108695
];

const center = position_start;

const mapStyle = {
  width: "100%",
  height: "100%"
}

export default class MyMap extends Component {
  render() {
    return (
      <Map center={center} zoom={15} style={mapStyle}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position_start}>
          <Popup>CopaBeach</Popup>
        </Marker>
      </Map>
    );
  }
}

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
  48.259208, 16.369191
];

const position_end = [
  48.190990, 16.419681
];

const center = [
  (position_start[0] + position_end[0]) / 2,
  (position_start[1] + position_end[1]) / 2
]

const mapStyle = {
  width: "100%",
  height: "100%"
}

export default class MyMap extends Component {
  render() {
    return (
      <Map center={center} zoom={12} style={mapStyle}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position_start}>
          <Popup>Start</Popup>
        </Marker>

        <Marker position={position_end}>
          <Popup>Ziel</Popup>
        </Marker>
      </Map>
    );
  }
}

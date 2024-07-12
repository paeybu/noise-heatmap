'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { HeatmapLayer } from 'react-leaflet-heatmap-layer-v3';
import { mockComplaints, complaints } from '../data';

export default function Map() {
  const position: LatLngExpression = [13.946091710860198, 100.47398044499302];
  const points = mockComplaints.map(({ lat, lon }) => [lat, lon, 1]);

  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: '800px', width: '1000' }} // Fixed: Removed the comment from inside the JSX attribute area
    >
      <HeatmapLayer
        points={points}
        longitudeExtractor={(m: number[]) => m[1]}
        latitudeExtractor={(m: number[]) => m[0]}
        intensityExtractor={(m: number[]) => m[2]}
      />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* {mockComplaints.map(({ name, lat, lon }) => (
        <Marker key={name} position={[lat, lon]}>
          <Popup>{name}</Popup>
        </Marker>
      ))} */}
    </MapContainer>
  );
}

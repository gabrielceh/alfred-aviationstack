"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from 'leaflet';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


interface MapProps {
  position: LatLngExpression | LatLngTuple;
  zoom?: number;
  tooltipLabel?: string;
}

const defaults = {
  zoom: 13,
}

const customIcon = L.icon({
    iconUrl: '/images/avion-icon.png',
    iconSize: [38, 38],
    iconAnchor: [0, 10],
    // popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});

export default function Map({ position, tooltipLabel, zoom=defaults.zoom }: MapProps) {

    return (
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
          position={position} 
          draggable={false}
          icon={customIcon}
         >
          {tooltipLabel && <Tooltip>{tooltipLabel}</Tooltip>}
        </Marker>
      </MapContainer>
    );
}

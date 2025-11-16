"use client";

/**
 * Componente de mapa basado en Leaflet para Next.js.
 *
 * **IMPORTANTE (Next.js + Leaflet)**  
 *
 * - Este componente **NO debe importarse desde un barrel (index.ts)** porque eso fuerza
 *   su importación del lado del servidor, rompiendo el renderizado en el cliente.
 * - Este archivo **siempre debe exportarse como `default`**.
 * - Para usarlo correctamente, debe importarse mediante `dynamic` con `ssr: false`.
 *
 * ## Cómo usarlo correctamente:
 *
 * ```tsx
 * import dynamic from "next/dynamic";
 *
 * const Map = dynamic(() => import("@/modules/shared/components/Map/Map"), {
 *   ssr: false,
 *   loading: () => <p>Cargando mapa...</p>,
 * });
 *
 * export default function Page() {
 *   return (
 *     <Map
 *       position={[6.25184, -75.56359]}
 *       zoom={12}
 *       tooltipLabel="Ubicación actual"
 *     />
 *   );
 * }
 * ```
 *
 * Este componente utiliza `react-leaflet` y `Leaflet` para renderizar un mapa interactivo
 * con un marcador personalizado. Requiere ejecutarse únicamente en el cliente.
 */

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from 'leaflet';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


interface MapProps {
  /**
   * Coordenadas donde se centrará el mapa y donde se colocará el marcador.
   * Puede ser un `LatLngExpression` o una tupla `[lat, lng]`.
   */
  position: LatLngExpression | LatLngTuple;

  /**
   * Nivel de zoom inicial del mapa.
   * Por defecto: `13`.
   */
  zoom?: number;

  /**
   * Texto del tooltip que aparece sobre el marcador.
   * Si no se proporciona, no se renderiza el tooltip.
   */
  tooltipLabel?: string;
}

const defaults = {
  zoom: 13,
}

// Icono personalizado para el marcador
const customIcon = L.icon({
    iconUrl: '/images/avion-icon.png',
    iconSize: [38, 38],
    iconAnchor: [0, 10],

});

/**
 * Componente que renderiza un mapa interactivo con Leaflet,
 * incluyendo un marcador con icono personalizado y un tooltip opcional.
 *
 * @param props - Propiedades del componente, incluyendo posición del marcador,
 * zoom inicial y texto opcional para el tooltip.
 */
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

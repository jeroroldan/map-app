import { createContext } from 'react';
import { Map } from 'mapbox-gl';


export interface MapContexrProps {
  isMapReady: boolean,
  map?: Map,

  //methods
  setMap: (map: Map) => void
}



export const MapContext = createContext({} as MapContexrProps)
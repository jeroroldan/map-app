import { MapProvider } from "./context/map"
import { PlacesProvider } from "./context/places"
import { HomeScreen } from "./screens"

import './styles.css'

const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}

export default MapsApp
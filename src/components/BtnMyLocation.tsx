import { useContext } from "react"
import { MapContext } from "../context/map"
import { PlacesContext } from "../context/places"

export const BtnMyLocation = () => {

  const { isMapReady,map } = useContext(MapContext)
  const { userLocation } = useContext(PlacesContext)

  const onClick = () => {
    if(!isMapReady) {
      throw new Error('Mapa mo esta listo')
    }
    if(!userLocation) throw new Error('no hay ubicacion')

    map?.flyTo({
      zoom: 14,
      center: userLocation
    })

  }

  return (
    <button
      className="btn btn-primary"
      onClick={ onClick }
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999
      }}
    >
    
      Mi unbicacion
    </button>
  )
}
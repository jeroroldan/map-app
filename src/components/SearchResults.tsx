import { useContext, useState } from "react"
import LoadingPlaces from "./LoadingPlaces";
import { Feature } from "../interfaces/places";
import { MapContext } from "../context/map";
import { PlacesContext } from "../context/places";




export const SearchResults = () => {

  const { places, isLoadingPlaces } = useContext(PlacesContext);
  const { map } = useContext(MapContext);

  const [ activePlaceId, setActivePlaceId ] = useState('')

  const onPlaceClick = (place: Feature) => {
    setActivePlaceId(place.id);
    const [ lng , lat ] = place.center
    map?.flyTo({
      zoom:14,
      center:[ lng,lat ]
    })

  }

  if(isLoadingPlaces) {
    <LoadingPlaces />
  }

  if(places.length === 0){
    return (<></>)
  }


  return (
    <ul className="list-group mt-3">

      {
        places.map(place => (
          <li
            key={ place.id }
            className={`list-group-item list-group-item-action pointer ${ (activePlaceId === place.id) && 'active'}`}
            onClick={ () => onPlaceClick(place) }
          >
            <h6>{ place.text_es }</h6>
            <p
              style={{
                fontSize: '12px'
              }}
            >
              { place.place_name }
            </p>

            <button className={`btn  btn-sm ${ (activePlaceId === place.id ? 'btn-outline-light' : 'btn-outline-primary') }`}>
              Direcciones
            </button>
          
          </li>
        ))
      }

    </ul>
  )
}

export default SearchResults 
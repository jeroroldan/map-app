import { FC, createContext, useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../api';
import { Feature, PlacesResponse } from '../../interfaces/places';


export interface PlacesState {
  isLoading: boolean;
  userLocation?: [ number, number ],
  isLoadingPlaces: boolean,
  places: Feature[]
}

export const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []

}

interface Props {
  children: JSX.Element | JSX.Element []
}

export const PlacesProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer( placesReducer, INITIAL_STATE );

  useEffect(() => {
    
    getUserLocation()
      .then( lngLat => dispatch({ type:'setUserLocation', payload: lngLat }) )
  }, []);

  const searchPlacesByTerm = async ( query: string ) : Promise<Feature[]> => {
    
    if( query.length === 0 ) {
      
      dispatch({ type:'setPlaces', payload:[] })
      
      return []
    };

    if(!state.userLocation) throw new Error('no hay ubicacion del usuario')

    dispatch({ type:'setLoadingPlaces' })


    const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`,{
      params: {
        proximity: state.userLocation.join(',')
      }
    })
    console.log(resp)


    dispatch({ type:'setPlaces', payload: resp.data.features })

    console.log(resp.data.features)

    return resp.data.features;
  }
  


  return (
    <PlacesContext.Provider value={{
      ...state,

      //methods
      searchPlacesByTerm
    }}>

      { children }

    </PlacesContext.Provider>
  )
}

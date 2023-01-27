import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context/places";
import SearchResults from "./SearchResults";

export const SearchBar = () => {

  const { searchPlacesByTerm } = useContext( PlacesContext )


  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = ( event: ChangeEvent<HTMLInputElement> ) => {

    if(debounceRef.current) {
      clearTimeout( debounceRef.current );


      debounceRef.current = setTimeout(() => {
        searchPlacesByTerm(event.target.value);
        console.log('dsa')
      },350)
    } 
  }


  return (
    <div className="search-container">
    
      <input className="form-control" onChange={ onQueryChange } placeholder="Buscar lugar..." type="text"/>

      <SearchResults />
    
    </div>
  )
}

export default SearchBar
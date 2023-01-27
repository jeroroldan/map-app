
import axios from  'axios';


const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoiamVyb25pbW8zNCIsImEiOiJjbDAyeWd4bGIwenFpM2pvOTJvOW12bW9oIn0.QEHw2vyF7A7kP4a50BHGlQ' 
  }
});

export default searchApi;





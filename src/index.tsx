import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MapsApp from './MapsApp';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiamVyb25pbW8zNCIsImEiOiJjbDAyeWd4bGIwenFpM2pvOTJvOW12bW9oIn0.QEHw2vyF7A7kP4a50BHGlQ';

  if( !navigator.geolocation ){
    alert('Tu navegador no tiene acceso a geo localizacion')
    throw new Error('Tu navegador no tiene acceso a geo localizacion')
  }


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement




);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

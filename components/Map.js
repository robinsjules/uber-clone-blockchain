"use client";

import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import rcContext from '../context/rcContext'

const style = {
    wrapper:'flex-1 h-full w-full',
}

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iaW5zanVsZXMiLCJhIjoiY2xrd2hpODJ0MTFwcTNybXkyN2p4NmRnaSJ9.ygZSZoc2b_oIDaxoXjMPiw'

const Map = () => {
    // const { pickupCoordinates, dropoffCoordinates } = useContext(rcContext)
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-73.990593, 40.740121],
            zoom: 3,
        })

        /*f (pickupCoordinates) {
            addToMap(map, pickupCoordinates)
          }
      
          if (dropoffCoordinates) {
            addToMap(map, dropoffCoordinates)
          }
      
          if (pickupCoordinates && dropoffCoordinates) {
            map.fitBounds([dropoffCoordinates, pickupCoordinates], {
              padding: 400,
            })
          }
    }, [pickupCoordinates, dropoffCoordinates])*/

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
    }

    return <div id ='map' className = {style.wrapper}>Map</div>
})}

export default Map
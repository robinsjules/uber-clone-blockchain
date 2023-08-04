"use client";

import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    wrapper:'flex-1 h-full w-full',
}

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iaW5zanVsZXMiLCJhIjoiY2xrd2hpODJ0MTFwcTNybXkyN2p4NmRnaSJ9.ygZSZoc2b_oIDaxoXjMPiw'

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-99.29011, 39.9172],
            zoom: 3,
        })
    }, [])
    return <div id ='map' className = {style.wrapper}>Map</div>
}

export default Map
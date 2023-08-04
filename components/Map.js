import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    wrapper:'flex-1 h-full w-full'
}

const Map = () => {
    useEffect(()=> {
        const map = new mapboxgl.Map({
            style: 'mapbox://drakosi/ckvcwq3rwdw4314o3i2ho8tph'
        })
    })
    return <div>Map</div>
}

export default Map
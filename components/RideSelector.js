import rcstandard from '../assets/vehicles/rcstandard.png'
import rcxl from '../assets/vehicles/rcxl.png'
import rcbike from '../assets/vehicles/rcbike.png'
import Image from 'next/image'

const style = {}

const vehicleList = [
    {
        vehicleopt: 'RideChain Standard',
        image: rcstandard,
        priceMultiplier: 1,
    },
    {
        vehicleopt: 'RideChain XL',
        image: rcxl,
        priceMultiplier: 1.5,
    },
    {
        vehicleopt: 'RideChain Bike',
        image: rcbike,
        priceMultiplier: 0.5,
    },
]

const RideSelector = () => {
  return (
    <div className = {style.wrapper}>
        <div className = {style.title}>Choose a vehicle</div>
        <div className =  {style.vehicleList}>
            {vehicleList.map((vehicle, index) => (
                <div className = {style.vehicle}>
                    <Image
                        src = {vehicle.iconUrl}
                        className = {style.vehicleImage}
                        height = {50}
                        width = {50}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default RideSelector
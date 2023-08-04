import rcstandard from '../assets/vehicles/rcstandard.png'
import rcxl from '../assets/vehicles/rcxl.png'
import rcbike from '../assets/vehicles/rcbike.png'
import ethLogo from '../assets/ethLogo.png'
import Image from 'next/image'

const style = {
    wrapper: `h-full flex flex-col`,
    title: `text-gray-500 text-center text-xs py-2 border-b`,
    vehicleList: `flex flex-col flex-1 overflow-scroll`,
    vehicle: `flex p-3 m-2 items-center border-2 border-white`,
    selectedVehicle: `border-2 border-black flex p-3 m-2 items-center`,
    vehicleImage: `h-18`,
    vehicleDetails: `ml-2 flex-1`,
    vehicleOpt: `font-medium`,
    time: `text-xs text-violet-500`,
    priceContainer: `flex items-center`,
    price: `mr-[-0.2rem]`,
}

const vehicleList = [
    {
        vehicleOpt: 'RideChain Standard',
        icon: rcstandard,
        priceMultiplier: 1,
    },
    {
        vehicleOpt: 'RideChain XL',
        icon: rcxl,
        priceMultiplier: 1.5,
    },
    {
        vehicleOpt: 'RideChain Bike',
        icon: rcbike,
        priceMultiplier: 0.5,
    },
]

const basePrice = 12345

const RideSelector = () => {
  return (
    <div className = {style.wrapper}>
        <div className = {style.title}>Choose a vehicle</div>
        <div className = {style.vehicleList}>
            {vehicleList.map((vehicle, index) => (
                <div className = {style.vehicle}>
                    <Image
                        src = {vehicle.icon}
                        className = {style.vehicleImage}
                        height = {60}
                        width = {60}
                    />
                <div className = {style.vehicleDetails}>
                    <div className = {style.vehicleOpt}>
                        {vehicle.vehicleOpt}
                    </div>
                    <div className = {style.time}>
                        5 mins away
                    </div>
                </div>
                <div className = {style.priceContainer}>
                    <div className = {style.price}>
                        {((basePrice / 10 ** 5) * vehicle.priceMultiplier).toFixed(5)}
                    </div>
                    <Image
                        src = {ethLogo}
                        width = {20}
                        height = {40}
                    />
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RideSelector
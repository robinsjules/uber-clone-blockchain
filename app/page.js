import Navbar from '../components/Navbar'
import Map from '../components/Map'
import LocationSelector from '../components/LocationSelector'
import Confirm from '../components/Confirm'

const style = {
  wrapper: 'h-screen w-screen flex flex-col text-black',
  main: 'h-screen w-screen flex-1 z-10',
  mapContainer: 'flex-1 w-full h-full',
  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
}

const riderAddress = "0x5E440C7E1c7E30a6fe063bC30b195287e6d30Edb";

export default function Home() {

  async function requestAccount() {
    await window.ethereum.request( {method: 'eth_requestAccounts'}) ;
  }

  async function fetchRide() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        riderAddress,
        Ride.abi,
        provider
      );
      try {
        const data = await contract.ride();
        console.log("data: ", data);
        setRide(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  return (
    <div className = {style.wrapper}>
      <Navbar />
      <div className = {style.main}>
        <Map />
      </div>
      <div className = {style.rideRequestContainer}>
        <div className = {style.rideRequest}>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  )
}

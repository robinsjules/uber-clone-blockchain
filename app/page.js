import Navbar from '../components/Navbar'

const style = {
  wrapper: 'h-screen w-screen flex flex-col',
}
export default function Home() {
  return (
    <div className = {style.wrapper}>
      <Navbar />
      <div className = {style.main}>
        {/*map*/}
      </div>
      <div clasName = {style.rideRequestContainer}>
        <div className = {style.rideRequest}>
          {/* loc selector */}
          {/* confirm ride */}
        </div>
      </div>
    </div>
  )
}

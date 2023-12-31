import Image from 'next/image'
import avatar from '../temp/avatar.jpeg'
import { BsPerson } from 'react-icons/bs'
import ridechainlogo from '../assets/ridechainlogo.png'

const style = {
  wrapper: `h-16 w-full bg-[#701a75] text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `h-1000 w-1000 mr-16 cursor-pointer`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
}

const currentAccount = ''
// const currentAccount = '0x5E440C7E1c7E30a6fe063bC30b195287e6d30Edb'

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>
            <Image className = {style.logo} src = {ridechainlogo} width = {100} height ={100}/>
          </div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>Your Name</div>
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
          />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton}>
            <BsPerson />
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
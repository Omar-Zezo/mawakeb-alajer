import { Link } from "react-router-dom"
import { MainLogo, Menu } from "../images/svg"

const MobileNav = ({setShowMenu}) => {
  return (
    <div className='w-full absolute z-50 flex items-center xl:hidden justify-between left-0 px-5'>
        <div className="w-[100px] pt-4">
            <Link to="/">
            <img src={MainLogo} alt="logo" className="size-full"/>
            </Link>
        </div>
        <div className="size-12 flex justify-center items-center rounded-lg"
        onClick={()=> setShowMenu(true)}
        >
          <img width={45} src={Menu} alt="menu" />
        </div>
    </div>
  )
}

export default MobileNav
import { NavLink } from "react-router-dom";
import { CustomerService, Support } from "../images/svg";
import { faCartShopping, faHouse, faPhotoFilm, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNavigation = ({setShowLogin}) => {

  const token = localStorage.getItem("token")

  return (
    <div className="xl:hidden xl:w-[70%] xl:right-1/2 xl:translate-x-[-20%] xl:mt-10 xl:mb-5 xl:rounded-[50px] max-xl:fixed bottom-0 left-0 z-30 w-full py-2 px-3 bg-gradient-to-r from-mainColor to-secondryColor">
      <ul className="list-none bottom-nav w-full flex items-center justify-around">
      <li className="relative">
          <NavLink to="/" className="size-10 flex justify-center items-center rounded-full duration-300">
          <FontAwesomeIcon className="text-xl text-white" icon={faHouse} />
          </NavLink>
        </li>
        <li className="relative">
          <NavLink to="/media-center/videos" end className="size-10 flex justify-center items-center rounded-full duration-300">
          <FontAwesomeIcon className="text-xl text-white" icon={faPhotoFilm} />
          </NavLink>
        </li>
        <li className="relative" onClick={() => setShowMenu(true)}>
          <NavLink to="/our-seasonal-programs?type=charity" className="size-10 flex justify-center items-center rounded-full duration-300">
          <img width={25} height={25} src={Support} alt={"donate"} />
          </NavLink>
        </li>
        <li className="relative" onClick={() => setShowMenu(true)}>
          <NavLink to="/contact-us" className="size-10 flex justify-center items-center rounded-full duration-300">
          <img width={25} height={25} src={CustomerService} alt={"donate"} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavigation;

import { MainLogo } from "../images/svg";
import { Link, NavLink } from "react-router-dom";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuLight } from "../images/imgs";
import { useState } from "react";
import ChangeLang from "./ChangeLang";
import { t } from "i18next";

const Navbar = ({ allPages, langDetection }) => {
  const [hiddenOnClick, setHiddenOnClick] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  //handel Hidden Submenu on click
  const handelHiddenOClick = () => {
    setHiddenOnClick(true);
    setTimeout(() => {
      setHiddenOnClick(false);
    }, 500);
  };

  return (
    <nav className="w-full pt-10 absolute left-0 top-0 z-50 max-xl:hidden">
      <div className="container flex items-center">
        <div className={`w-[120px] ${langDetection === "en" ? 'mr-auto':'ml-auto'}`}>
          <Link to={"/"}>
            <img src={MainLogo} alt="logo" className="size-full" />
          </Link>
        </div>
        <ul className="w-[70%] pb-8 mx-auto relative flex items-center gap-5">
          <li>
            <NavLink
              to={"/"}
              className="text-white hover:text-mainColor duration-300 text-lg font-medium"
            >
              {t('home')}
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={(e) => e.preventDefault()}
              to={"/a"}
              className="sub-menu flex items-center gap-[6px] text-white hover:text-mainColor hover:bg-white relative py-2 px-3 rounded-t-xl duration-300 text-lg font-medium"
            >
              {t('mawakeb Al-Ajer')}
              <FontAwesomeIcon
                className="text-base"
                icon={faAngleDown}
              />
              <ul className={`inner-sub-menu w-[200px] hidden bg-white absolute top-[42px] ${langDetection === "en" ? 'left-0':'right-0'} z-10 rounded-b-lg`}>
                {allPages?.map((link) => (
                  <li key={link.id} className="w-full">
                    <Link
                      onClick={handelHiddenOClick}
                      to={`/get-to-know-us/who-are-we/${link.key}`}
                      className={`${hiddenOnClick ? "hidden":"block"} pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavLink>
          </li>


          <li>
            <NavLink
              to={"/get-to-know-us/who-are-we/okf_moakl_alagr"}
              className="text-white hover:text-mainColor duration-300 text-lg font-medium"
            >
              {t('about waqf')}
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              onClick={(e) => e.preventDefault()}
              to={"/a"}
              className="sub-menu flex items-center gap-[6px] text-white hover:text-mainColor hover:bg-white relative py-2 px-3 rounded-t-xl duration-300 text-lg font-medium"
            >
              {t('support fields')}
              <FontAwesomeIcon
                className="text-base"
                icon={faAngleDown}
              />
              <ul className={`inner-sub-menu w-[200px] hidden bg-white absolute top-[42px] ${langDetection === "en" ? 'left-0':'right-0'} z-10 rounded-b-lg`}>
                <li className="w-full">
                  <Link
                    onClick={handelHiddenOClick}
                    to={"/our-seasonal-programs?type=charity"}
                    className={`${hiddenOnClick ? "hidden":"block"} pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300`}
                  >
                    {t('charitable programs')}
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    onClick={handelHiddenOClick}
                    to={"/our-seasonal-programs?type=community"}
                    className={`${hiddenOnClick ? "hidden":"block"} pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300`}
                  >
                    {t('community programs')}
                  </Link>
                </li>
              </ul>
            </NavLink>
          </li> */}

          <li>
            <NavLink
              onClick={(e) => e.preventDefault()}
              to={"/a"}
              className="sub-menu flex items-center gap-[6px] text-white hover:text-mainColor hover:bg-white relative py-2 px-3 rounded-t-xl duration-300 text-lg font-medium"
            >
              {t('media center')}
              <FontAwesomeIcon
                className="text-base"
                icon={faAngleDown}
              />
              <ul className={`inner-sub-menu w-[200px] hidden bg-white absolute top-[42px] ${langDetection === "en" ? 'left-0':'right-0'} z-10 rounded-b-lg`}>
                <li className="w-full">
                  <Link
                    onClick={handelHiddenOClick}
                    to={"/media-center/news"}
                    className={`${hiddenOnClick ? "hidden":"block"} pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300`}
                  >
                    {t('news')}
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    onClick={handelHiddenOClick}
                    to={"/media-center/photos"}
                    className={`${hiddenOnClick ? "hidden":"block"} pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300`}
                  >
                    {t('photo gallery')}
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    onClick={handelHiddenOClick}
                    to={"/media-center/videos"}
                    className={`${hiddenOnClick ? "hidden":"block"} pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300`}
                  >
                    {t('video library')}
                  </Link>
                </li>
              </ul>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/our-services"}
              className="text-white hover:text-mainColor duration-300 text-lg font-medium"
            >
              {t('our services')}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/jobs"}
              className="text-white hover:text-mainColor duration-300 text-lg font-medium"
            >
              {t('jobs')}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/contact-us"}
              className="text-white hover:text-mainColor duration-300 text-lg font-medium"
            >
              {t('contact us')}
            </NavLink>
          </li>

          <img
            src={MenuLight}
            alt="menu-light"
            className="w-full absolute bottom-0 right-0"
          />
        </ul>
        <ChangeLang
        showLangMenu={showLangMenu}
        setShowLangMenu={setShowLangMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;

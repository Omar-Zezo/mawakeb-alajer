import { Link, NavLink } from "react-router-dom";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LangIcon, MainLogo } from "../images/svg";
import { useState } from "react";
import { langAr, langEn } from "../store/slices/translation/translation";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { t } from "i18next";

const MobileMenu = ({ showMenu, setShowMenu, allPages, langDetection, settings }) => {
  const [aboutLinksMenu, setAboutLinksMenu] = useState(false);
  const [mediaCenterMenu, setMediaCenterMenu] = useState(false);
  const [supportFieldsMenu, setSupportFieldsMenu] = useState(false);

  const dispatch = useDispatch()

  //change language
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    if (lang === "en") {
      dispatch(langEn());
      window.location.reload();
    }

    if (lang === "ar") {
      dispatch(langAr());
      window.location.reload();
    }
  };

  const mediaCenter = [
    { name: t('news'), link: "/media-center/news" },
    { name: t('photo gallery'), link: "/media-center/photos" },
    { name: t('video library'), link: "/media-center/videos" },
  ];

  return (
    <div
      className={`fixed pb-5 overflow-y-auto right-0 top-0 z-50 w-full h-screen bg-secondryColor flex flex-col gap-5 items-center justify-start pt-5 ${
        showMenu ? "mr-0" : "mr-[-100%]"
      } duration-300`}
    >
      <div className="w-full pr-5 pl-10 flex items-center justify-between">
        <img width={100} src={MainLogo} alt="logo" />
        <div
          onClick={() => setShowMenu(false)}
          className="px-3 py-2 border border-white/50 rounded-lg"
        >
          <FontAwesomeIcon className="text-xl text-white" icon={faX} />
        </div>
      </div>
      <ul className="w-full pt-5 flex mobile-menu flex-col mt-10 items-center gap-5">
        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 text-white font-semibold rounded-lg"
            to={"/"}
            onClick={() => setShowMenu(false)}
          >
            {t('home')}
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            to="/about-the-association"
            onClick={(e) => {
              e.preventDefault();
              setAboutLinksMenu(!aboutLinksMenu);
            }}
            className="px-8 pt-3 text-white flex items-center gap-2 pb-2 flex-col font-semibold rounded-lg"
          >
            <div className="flex items-center gap-2">
              <h4>{t('mawakeb Al-Ajer')}</h4>
              <div className="size-fit text-lg font-semibold">
                {aboutLinksMenu ? "-" : "+"}
              </div>
            </div>
            <ul
              className={`w-full overflow-y-auto pt-2 ${
                aboutLinksMenu ? "flex" : "hidden"
              } flex-col rounded-b-lg`}
            >
              {allPages?.map((link) => (
                <li key={link.id} className="w-full max-w-[200px] text-center">
                  <Link
                    onClick={() => setShowMenu(false)}
                    to={`/get-to-know-us/who-are-we/${link.key}`}
                    className="block text-white pr-5 pl-2 py-3 text-base font-semibold hover:bg-mainColor hover:text-white duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="text-white px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/get-to-know-us/who-are-we/okf_moakl_alagr"}
            onClick={() => setShowMenu(false)}
          >
            {t('about waqf')}
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="text-white px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/our-services"}
            onClick={() => setShowMenu(false)}
          >
            {t('our services')}
          </NavLink>
        </li>

        {/* <li className="text-black-200 text-xl">
          <NavLink
            to="/m-c"
            onClick={(e) => {
              e.preventDefault();
              setSupportFieldsMenu(!supportFieldsMenu);
            }}
            className="text-white px-8 pt-3 flex items-center gap-2 pb-2 flex-col font-semibold rounded-lg"
          >
            <div className="flex items-center gap-2">
              <h4>{t('support fields')}</h4>
              <div className="size-fit text-lg font-semibold">
                {supportFieldsMenu ? "-" : "+"}
              </div>
            </div>
            <ul
              className={`w-full overflow-y-auto pt-2 ${
                supportFieldsMenu ? "flex" : "hidden"
              } flex-col rounded-b-lg`}
            >
              <li className="max-w-[200px] text-center">
                <NavLink
                  to={"/our-seasonal-programs?type=charity"}
                  className="block pr-5 pl-2 py-3 text-base text-white font-semibold hover:bg-mainColor hover:text-white duration-300"
                  onClick={() => setShowMenu(false)}
                >
                  {t('charitable programs')}
                </NavLink>
              </li>
              <li className="max-w-[200px] text-center">
                <NavLink
                  to={"/our-seasonal-programs?type=community"}
                  className="block pr-5 pl-2 py-3 text-base text-white font-semibold hover:bg-mainColor hover:text-white duration-300"
                  onClick={() => setShowMenu(false)}
                >
                  {t('community programs')}
                </NavLink>
              </li>
            </ul>
          </NavLink>
        </li> */}

        <li className="text-black-200 text-xl">
          <NavLink
            to="/m-c"
            onClick={(e) => {
              e.preventDefault();
              setMediaCenterMenu(!mediaCenterMenu);
            }}
            className="text-white px-8 pt-3 flex items-center gap-2 pb-2 flex-col font-semibold rounded-lg"
          >
            <div className="flex items-center gap-2">
              <h4>{t('media center')}</h4>
              <div className="size-fit text-lg font-semibold">
                {mediaCenterMenu ? "-" : "+"}
              </div>
            </div>
            <ul
              className={`w-full overflow-y-auto pt-2 ${
                mediaCenterMenu ? "flex" : "hidden"
              } flex-col rounded-b-lg`}
            >
              {mediaCenter.map((link) => (
                <li key={link.name} className="max-w-[200px] text-center">
                  <NavLink
                    to={link.link}
                    className="block pr-5 pl-2 py-3 text-base text-white font-semibold hover:bg-mainColor hover:text-white duration-300"
                    onClick={() => setShowMenu(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="text-white px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/jobs"}
            onClick={() => setShowMenu(false)}
          >
            {t('jobs')}
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="text-white px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/contact-us"}
            onClick={() => setShowMenu(false)}
          >
            {t('contact us')}
          </NavLink>
        </li>
      </ul>


      <div className="flex items-center gap-8 mt-10">
        <a href={settings?.social_links?.facebook} target="_blanck">
          <FontAwesomeIcon
            className="text-[35px] text-white"
            icon={faFacebook}
          />
        </a>

        <a href={settings?.social_links?.youtube} target="_blanck">
          <FontAwesomeIcon
            className="text-[35px] text-white"
            icon={faYoutube}
          />
        </a>

        <a href={settings?.social_links?.instagram} target="_blanck">
          <FontAwesomeIcon
            className="text-[35px] text-white"
            icon={faInstagram}
          />
        </a>
      </div>

      <div className="flex mt-10 gap-2 text-lg font-bold px-3 py-1 border border-white rounded-lg text-white">
        {langDetection === "en" ? (
          <div
            onClick={() => changeLang("ar")}
            className="flex items-center gap-2"
          >
            <img width={25} src={LangIcon} alt="saudi-flag" />
            <p className="pt-1">العربية</p>
          </div>
        ) : (
          <div
            onClick={() => changeLang("en")}
            className="flex items-center gap-2"
          >
            <img width={25} src={LangIcon} alt="saudi-flag" />
            <p className="pt-1">الإنجليزية</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;

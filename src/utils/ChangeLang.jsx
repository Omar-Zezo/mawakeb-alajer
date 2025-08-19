import { LangIcon } from "../images/svg";
import { langAr, langEn } from "../store/slices/translation/translation";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { t } from "i18next";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ChangeLang = ({ stickyNav, showLangMenu, setShowLangMenu }) => {
  const { i18n } = useTranslation();

  const dispatch = useDispatch();
  const {pathname} = useLocation()

  useEffect(()=>{
    setShowLangMenu(false)
  },[pathname])


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

  return (
    <div className="flex flex-col relative">
      <div
        onClick={() => setShowLangMenu(!showLangMenu)}
        className={`h-[40px] px-3 ${
          showLangMenu ? "rounded-t-lg bg-mainColor/30" : "rounded-lg"
        } ${
          stickyNav ? "bg-white text-mainColor shadow-base" : "text-white"
        } flex items-center gap-2 cursor-pointer`}
      >
        <img width={30} src={LangIcon} alt="saudi-flag" />
        <FontAwesomeIcon className="text-white/80 text-xl" icon={faAngleDown} />
      </div>
      <ul
        className={`w-[90px] items-center py-2 ${
          showLangMenu ? "flex" : "hidden"
        } flex flex-col gap-2 ${
          stickyNav ? "bg-white text-mainColor" : "bg-mainColor/30 text-white"
        } rounded-lg rounded-tr-none absolute right-0 top-[40px] shadow-lg`}
      >
        <li
          className={`w-full flex items-center gap-1 justify-center pb-1 border-b ${
            stickyNav ? "border-black/20" : "border-white/50"
          } cursor-pointer`}
          onClick={() => {
            changeLang("ar");
            setShowLangMenu(false);
          }}
        >
          <p className="text-base font-semibold">{t('arabic')}</p>
        </li>

        <li
          className={`w-full flex items-center gap-1 justify-center cursor-pointer`}
          onClick={() => {
            changeLang("en");
            setShowLangMenu(false);
          }}
        >
          <p className="text-base font-semibold">{t('english')}</p>
        </li>
      </ul>
    </div>
  );
};

export default ChangeLang;

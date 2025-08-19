import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../utils/Navbar";
import MobileNav from "../utils/MobileNav";
import Footer from "../utils/Footer";
import BottomNavigation from "../utils/BottomNavigation";
import UseSettings from "../hooks/UseSettings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPages } from "../store/slices/aboutus/pages";
import { ToastContainer } from "react-toastify";
import MobileMenu from "../utils/MobileMenu";
import UseLangDetection from "../hooks/UseLangDetection";
import Maintenance from "../utils/Maintenance";
import { Helmet } from "react-helmet";
import { FavIcon } from "../images/imgs";

const Layout = () => {
  const [allPages, setAllPages] = useState(null);
  const [showMenu, setShowMenu] = useState(null);
  const [message, setMessage] = useState(null);
  const allPgesData = useSelector((state) => state.pages);
  const settings = UseSettings();
  const langDetection = UseLangDetection();

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  //get all pages
  useEffect(() => {
    dispatch(getPages());
  }, []);

  useEffect(() => {
    if (allPgesData?.data?.data?.data) {
      setAllPages(allPgesData?.data?.data?.data);
    }
    if (allPgesData?.error?.data?.data?.message) {
      setMessage(allPgesData?.error?.data?.data?.message);
    }
  }, [allPgesData]);

  if (message === null) {
    return (
      <div
        className={pathname === "/" && "bg-[#223C66]"}
        dir={langDetection === "en" ? "ltr" : "rtl"}
      >
        <Helmet>
          <meta name="description" content={settings?.description} />
          <meta name="keywords" content={settings?.keywords} />
          <link rel="icon" type="image/png" href={FavIcon}></link>
        </Helmet>
        <Navbar allPages={allPages} langDetection={langDetection} />
        <MobileNav setShowMenu={setShowMenu} />
        <MobileMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          allPages={allPages}
          langDetection={langDetection}
          settings={settings}
        />
        <BottomNavigation />
        <Outlet />
        <Footer settings={settings} langDetection={langDetection} />
        <ToastContainer position="top-center" />
      </div>
    );
  } else {
    return <Maintenance message={message} />;
  }
};

export default Layout;

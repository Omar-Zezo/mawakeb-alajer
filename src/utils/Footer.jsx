import React from "react";
import { FooterBg, WhiteLogo } from "../images/imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLocationDot,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { t } from "i18next";

const Footer = ({ settings, langDetection }) => {
  return (
    <footer className="w-full h-[600px] max-xl:h-[950px] py-10 mt-[100px] relative">
      <img
        src={FooterBg}
        alt="fotter-bg"
        className="size-full max-xl:object-cover absolute left-0 top-0 z-[1]"
      />
      <div className="container absolute left-1/2 translate-x-[-50%] z-[2]">
        <div className="flex items-center">
          <img
            src={WhiteLogo}
            alt="logo"
            className="w-[180px] max-xl:w-[150px]"
          />
          <div
            className={`w-[80%] max-xl:hidden h-fit ${
              langDetection === "en" ? "ml-auto" : "mr-auto"
            } flex justify-end items-center gap-3 border-b-2 border-white pb-2`}
          >
            <a
              href={settings?.social_links?.linkedin}
              className="size-8 text-white hover:bg-white hover:text-mainColor duration-300 flex items-center justify-center rounded-full border border-white"
            >
              <FontAwesomeIcon className="text-lg" icon={faLinkedinIn} />
            </a>
            <a
              href={settings?.social_links?.youtube}
              className="size-8 text-white hover:bg-white hover:text-mainColor duration-300 flex items-center justify-center rounded-full border border-white"
            >
              <FontAwesomeIcon className="text-lg" icon={faYoutube} />
            </a>
            <a
              href={settings?.social_links?.instagram}
              className="size-8 text-white hover:bg-white hover:text-mainColor duration-300 flex items-center justify-center rounded-full border border-white"
            >
              <FontAwesomeIcon className="text-xl" icon={faInstagram} />
            </a>
            <a
              href={settings?.social_links?.twitter}
              className="size-8 text-white hover:bg-white hover:text-mainColor duration-300 flex items-center justify-center rounded-full border border-white"
            >
              <FontAwesomeIcon className="text-lg" icon={faXTwitter} />
            </a>
            <a
              href={settings?.social_links?.facebook}
              className="size-8 text-white hover:bg-white hover:text-mainColor duration-300 flex items-center justify-center rounded-full border border-white"
            >
              <FontAwesomeIcon className="text-xl" icon={faFacebookF} />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-16 mt-[100px]">
          <div className="xl:w-[30%] w-full flex flex-col gap-5">
            <h3 className="text-3xl text-white font-semibold pb-2 border-b border-white">
              {t("quick links")}
            </h3>
            <div className="flex">
              <ul className="w-1/2 flex flex-col gap-4">
                <li>
                  <Link
                    to={"/"}
                    className="text-lg text-white hover:text-secondryColor duration-300 font-medium"
                  >
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/our-services"}
                    className="text-lg text-white hover:text-secondryColor duration-300 font-medium"
                  >
                    {t("our services")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/jobs"}
                    className="text-lg text-white hover:text-secondryColor duration-300 font-medium"
                  >
                    {t("jobs")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"contact-us"}
                    className="text-lg text-white hover:text-secondryColor duration-300 font-medium"
                  >
                    {t("contact us")}
                  </Link>
                </li>{" "}
              </ul>
              <ul className="w-1/2 flex flex-col gap-4">
                <li>
                  <Link
                    to={"/get-to-know-us/who-are-we/who_are_we"}
                    className="text-lg text-white hover:text-secondryColor duration-300 font-medium"
                  >
                    {t("about mawakeb Al-Ajer")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/get-to-know-us/who-are-we/okf_moakl_alagr"}
                    className="text-lg text-white hover:text-secondryColor duration-300 font-medium"
                  >
                    {t("about waqf")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/media-center/videos"}
                    className="text-lg text-white hover:text-secondryColor duration-300 font-medium"
                  >
                    {t("video library")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-3xl text-white font-semibold pb-2 border-b border-white">
              {t("contact information")}
            </h3>
            <div className="flex">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <div className="size-8 flex items-center justify-center rounded-full border border-white">
                    <FontAwesomeIcon
                      className="text-white text-lg"
                      icon={faPhoneFlip}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    {settings?.contacts.phone?.map((number) => (
                      <a
                        href={number.value}
                        className="text-lg text-white hover:text-secondryColor duration-300 font-medium"
                      >
                        {number?.title}: {number.visible_value}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-8 flex items-center justify-center rounded-full border border-white">
                    <FontAwesomeIcon
                      className="text-white text-lg"
                      icon={faWhatsapp}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    {settings?.contacts.whatsapp?.map((number) => (
                      <a
                        target="_blank"
                        href={number.value}
                        className="text-lg text-white hover:text-secondryColor duration-300 font-medium"
                      >
                        {number?.title}: {number.visible_value}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-8 flex items-center justify-center rounded-full border border-white">
                    <FontAwesomeIcon
                      className="text-white text-lg"
                      icon={faEnvelope}
                    />
                  </div>
                  <a
                    href={`mailto:${settings?.settings?.email}`}
                    className="text-lg text-white hover:text-secondryColor duration-300 font-medium"
                  >
                    {t("email")}: {settings?.settings?.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-8 flex items-center justify-center rounded-full border border-white">
                    <FontAwesomeIcon
                      className="text-white text-lg"
                      icon={faLocationDot}
                    />
                  </div>
                  <p className="text-lg text-white hover:text-secondryColor duration-300 font-medium">
                    {t("address")}: {settings?.settings?.address}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "../../utils/ScrollToTop";
import { HeaderBg } from "../../images/imgs";
import {
  faFacebookF,
  faInstagram,
  faSnapchat,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import UseSettings from "../../hooks/UseSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BtnLoader from "../../utils/BtnLoader";
import { useForm } from "react-hook-form";
import { makeContactusMsg } from "../../store/slices/aboutus/contactus";
import { t } from "i18next";
import UseLangDetection from "../../hooks/UseLangDetection";
import { Helmet } from "react-helmet";

const Contactus = () => {
  const [showBtnLoader, setShowBtnLoader] = useState(false);
  const contactMsgData = useSelector((state) => state.contactus);
  const settings = UseSettings();
  const langDetection = UseLangDetection();

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  //submit msg form
  const formSubmit = (data) => {
    setShowBtnLoader(true);
    dispatch(
      makeContactusMsg({
        full_name: data?.full_name,
        email: data?.email,
        phone: data?.phone,
        subject: data?.subject,
        message: data?.message,
      })
    );
  };

  //handel btn loader
  useEffect(() => {
    if (contactMsgData.data) {
      setShowBtnLoader(false);
    }
    if (contactMsgData.error) {
      setShowBtnLoader(false);
    }
  }, [contactMsgData]);

  return (
    <ScrollToTop>
      <Helmet>
        <title>{t('mawakeb Al-Ajer')} - {t('contact us')}</title>
      </Helmet>
      <div>
        <header className="h-[350px] max-xl:h-[100px] relative rounded-b-2xl xl:rounded-b-[150px]">
          <div
            className="size-full grayscale bg-fixed absolute top-0 left-0 z-[-1] rounded-b-2xl xl:rounded-b-[150px]"
            style={{
              background: `url('${HeaderBg}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="bg-gradient-to-r from-mainColor to-secondryColor opacity-90 size-full rounded-b-2xl xl:rounded-b-[150px]"></div>
        </header>

        <div className="pt-20">
          <h1 className="text-5xl max-xl:text-4xl mb-10 text-secondryColor title-line relative pb-5 text-center font-semibold">
            {t("contact us")}
          </h1>
          <div className="container mt-[150px] flex gap-5 flex-wrap items-center">
            <div className="container flex max-xl:flex-col gap-4">
              <div className="w-1/2 max-xl:w-full flex flex-col gap-4">
                <h3 className="text-lg text-mainColor font-medium">
                  {t("contact us")}
                </h3>
                <p className="text-[36px] max-xl:text-3xl text-secondryColor font-bold">
                  {t("feel free to contact us")}
                </p>
                <p className="lg:w-[70%] mt-8 text-lg text-[#7e7e7e] font-medium">
                  {t("feel free to write a message")}
                </p>

                <div className={`flex gap-3 items-center mt-10`}>
                  <a
                    href={settings?.social_links?.facebook}
                    target="_blanck"
                    className="size-12 rounded-full flex justify-center items-center bg-[#4867aa] hover:bg-secondryColor duration-300"
                  >
                    <FontAwesomeIcon
                      className="text-lg text-white"
                      icon={faFacebookF}
                    />
                  </a>
                  <a
                    href={settings?.social_links?.twitter}
                    target="_blanck"
                    className="size-12 rounded-full flex justify-center items-center bg-[#111] hover:bg-secondryColor duration-300"
                  >
                    <FontAwesomeIcon
                      className="text-lg text-white"
                      icon={faXTwitter}
                    />
                  </a>
                  <a
                    href={settings?.social_links?.snapchat}
                    target="_blanck"
                    className="size-12 rounded-full flex justify-center items-center bg-yellow-400 hover:bg-secondryColor duration-300"
                  >
                    <FontAwesomeIcon
                      className="text-lg text-white duration-300"
                      icon={faSnapchat}
                    />
                  </a>
                  <a
                    href={settings?.social_links?.youtube}
                    target="_blanck"
                    className="size-12 rounded-full flex justify-center items-center bg-[#ff0000] hover:bg-secondryColor duration-300"
                  >
                    <FontAwesomeIcon
                      className="text-lg text-white duration-300"
                      icon={faYoutube}
                    />
                  </a>
                  <a
                    href={settings?.social_links?.instagram}
                    target="_blanck"
                    className="size-12 rounded-full flex justify-center items-center bg-[#f3c661] hover:bg-secondryColor duration-300"
                  >
                    <FontAwesomeIcon
                      className="text-lg text-white duration-300"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href={settings?.social_links?.whatsapp}
                    target="_blanck"
                    className="size-12 rounded-full flex justify-center items-center bg-green-700 hover:bg-secondryColor duration-300"
                  >
                    <FontAwesomeIcon
                      className="text-lg text-white"
                      icon={faWhatsapp}
                    />
                  </a>
                </div>
              </div>

              <div className="w-1/2 max-xl:w-full max-xl:mt-10">
                <form className="w-full" onSubmit={handleSubmit(formSubmit)}>
                  <div className="w-full flex justify-between flex-wrap">
                    <div className="w-[49%] max-md:w-full mb-8 flex flex-col gap-2">
                      <label className="text-base px-4 text-[#444] font-semibold">
                        {t("full name")}
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none p-4 text-base text-[#444] rounded-[50px] border border-black/10"
                        placeholder={t("full name")}
                        {...register("full_name", {
                          required: t("this field is required"),
                          minLength: {
                            value: 3,
                            message: t("the name must be 3 letters or more"),
                          },
                        })}
                      />
                      <p className="mt-1 px-2 text-red-600 text-sm">
                        {errors.full_name?.message}
                      </p>
                    </div>

                    <div className="w-[49%] max-md:w-full mb-8 flex flex-col gap-2">
                      <label className="text-base px-4 text-[#444] font-semibold">
                        {t("email")}
                      </label>
                      <input
                        type="email"
                        className="w-full outline-none p-4 text-base text-[#444] rounded-[50px] border border-black/10"
                        placeholder={t("email")}
                        {...register("email", {
                          required: t("this field is required"),
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t("invalid email"),
                          },
                        })}
                      />
                      <p className="mt-1 px-2 text-red-600 text-sm">
                        {errors.email?.message}
                      </p>
                    </div>

                    <div className="w-full max-md:w-full mb-8 flex flex-col gap-2">
                      <label className="text-base px-4 text-[#444] font-semibold">
                        {t("phone")}
                      </label>
                      <input
                        type="phone"
                        className="w-full outline-none p-4 text-base text-[#444] rounded-[50px] border border-black/10"
                        placeholder={t("phone")}
                        autoComplete="off"
                        {...register("phone", {
                          required: t("this field is required"),
                          pattern: {
                            value: /^(05\d{8}|5\d{8})$/,
                            message: t("we accept Saudi numbers only"),
                          },
                        })}
                      />
                      <p className="mt-1 px-2 text-red-600 text-sm">
                        {errors.phone?.message}
                      </p>
                    </div>

                    <div className="w-full max-md:w-full mb-8 flex flex-col gap-2">
                      <label className="text-base px-4 text-[#444] font-semibold">
                        {t("subject")}
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none p-4 text-base text-[#444] rounded-[50px] border border-black/10"
                        placeholder={t("subject")}
                        {...register("subject", {
                          required: t("this field is required"),
                        })}
                      />
                      <p className="mt-1 px-2 text-red-600 text-sm">
                        {errors.subject?.message}
                      </p>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                      <label className="text-base px-4 text-[#444] font-semibold">
                        {t("message")}
                      </label>
                      <textarea
                        type="text"
                        className="w-full outline-none h-[200px] p-4 text-base text-[#444] rounded-md resize-none border border-black/10"
                        placeholder={t("message")}
                        {...register("message", {
                          required: t("this field is required"),
                          minLength: {
                            value: 20,
                            message:
                              "the text must be 20 characters or more long",
                          },
                        })}
                      />
                      <p className="mt-1 px-2 text-red-600 text-sm">
                        {errors.message?.message}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className={`w-[23%] h-[60px] relative mt-8 flex items-center justify-center bg-mainColor hover:bg-secondryColor duration-300 cursor-pointer ${
                        langDetection === "en"
                          ? "rounded-r-full"
                          : "rounded-l-full"
                      } text-white text-base font-bold`}
                    >
                      {showBtnLoader ? <BtnLoader /> : t("send")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default Contactus;

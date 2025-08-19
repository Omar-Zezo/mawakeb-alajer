import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import BtnLoader from "../../utils/BtnLoader";
import { makeContactusMsg } from "../../store/slices/aboutus/contactus";
import { t } from "i18next";
import { LightTitle } from "../../images/imgs";
import { motion } from "framer-motion";


const Conatctus = () => {
  const [showBtnLoader, setShowBtnLoader] = useState(false);
  const contactMsgData = useSelector((state) => state.contactus);

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

  //motion
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setInView(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="w-full p-10 mt-20 bg-gradient-to-l from-mainColor to-[#5d759c] rounded-tl-[100px] rounded-br-[100px]"
    >
      <div className="container flex max-xl:flex-col items-center justify-between">
        <div className="xl:w-[30%] w-full xl:h-[250px] h-[100px] flex items-center justify-center relative">
          <p className="text-[60px] max-xl:text-4xl text-[#223C66] max-xl:font-semibold font-medium">
            {t("contact us")}
          </p>
          <img
            src={LightTitle}
            alt="shadow"
            className="size-full absolute top-1/2 translate-y-[-50%] max-xl:translate-x-[-45%] left-1/2 translate-x-[-50%] opacity-60 z-[10] mix-blend-overlay"
          />
        </div>
        <form
          className="xl:w-[65%] max-xl:mt-16 flex items-center gap-5 justify-between flex-wrap"
          onSubmit={handleSubmit(formSubmit)}
        >
          <div className="xl:w-[48%] w-full flex flex-col gap-3">
            <label
              htmlFor="full_name"
              className="text-lg text-white/50 font-semibold px-3"
            >
              {t("full name")}
            </label>
            <input
              type="text"
              id="full_name"
              className="p-4 bg-white text-[#444] outline-mainColor rounded-[50px] input-shadow"
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
          <div className="xl:w-[48%] w-full flex flex-col gap-3">
            <label
              htmlFor="email"
              className="text-lg text-white/50 font-semibold px-3"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              className="p-4 bg-white text-[#444] outline-mainColor rounded-[50px] input-shadow"
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
          <div className="xl:w-[48%] w-full flex flex-col gap-3">
            <label
              htmlFor="phone"
              className="text-lg text-white/50 font-semibold px-3"
            >
              {t("phone")}
            </label>
            <input
              type="tel"
              id="phone"
              autoComplete="off"
              className="p-4 bg-white text-[#444] outline-mainColor rounded-[50px] input-shadow"
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
          <div className="xl:w-[48%] w-full flex flex-col gap-3">
            <label
              htmlFor="subject"
              className="text-lg text-white/50 font-semibold px-3"
            >
              {t("subject")}
            </label>
            <input
              type="text"
              id="subject"
              className="p-4 bg-white text-[#444] outline-mainColor rounded-[50px] input-shadow"
              {...register("subject", {
                required: t("this field is required"),
              })}
            />
            <p className="mt-1 px-2 text-red-600 text-sm">
              {errors.subject?.message}
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <label
              htmlFor="message"
              className="text-lg text-white/50 font-semibold px-3"
            >
              {t("message")}
            </label>
            <textarea
              id="message"
              className="p-4 h-[180px] bg-white text-[#444] outline-mainColor rounded-2xl resize-none input-shadow"
              {...register("message", {
                required: t("this field is required"),
                minLength: {
                  value: 20,
                  message: t("the text must be 20 characters or more long"),
                },
              })}
            />
            <p className="mt-1 px-2 text-red-600 text-sm">
              {errors.message?.message}
            </p>
          </div>
          <button
            type="submit"
            className={`xl:w-[15%] w-[30%] mr-auto ml-2 h-[50px] relative mt-4 flex items-center justify-center bg-secondryColor hover:bg-mainColor duration-300 cursor-pointer rounded-lg text-white text-base font-bold`}
          >
            {showBtnLoader ? <BtnLoader /> : t("send")}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Conatctus;

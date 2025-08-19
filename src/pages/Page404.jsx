import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUP, MainLogo } from "../images/svg";
import { t } from "i18next";
import { Error404 } from "../images/imgs";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center pt-[100px] gap-5">
      <p className="w-full text-center text-2xl text-mainColor font-semibold">
        {t('the link is incorrect')}
      </p>
      <img width={500} src={Error404} alt="404" className="object-cover" />
      <div className="flex items-center gap-5 mt-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-secondryColor p-3 border border-secondryColor rounded-lg"
        >
          <FontAwesomeIcon className="text-2xl" icon={faHouse} />
          <p className="text-xl font-medium">{t('home')}</p>
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white p-3 bg-mainColor rounded-lg"
        >
          <p className="text-xl font-medium">{t('back')}</p>
          <img
            width={30}
            src={ArrowUP}
            alt="back"
            className="rotate-[-90deg]"
          />
        </button>
      </div>
    </div>
  );
};

export default Page404;

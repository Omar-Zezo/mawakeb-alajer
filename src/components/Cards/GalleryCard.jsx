import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GalleryCard = ({ item }) => {
  return (
    <div className="gallery-card h-[300px] rounded-[15px] relative">
      <img
        src={item?.thumbnail || item?.image || item?.media_path}
        alt="slide-1"
        className="object-contain size-full rounded-[15px]"
      />
      <div className="overlay absolute size-full bg-mainColor cursor-pointer rounded-[15px] opacity-95 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon className="text-4xl text-white" icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;

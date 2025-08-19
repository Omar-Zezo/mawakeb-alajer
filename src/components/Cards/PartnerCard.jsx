
const PartnerCard = ({partner}) => {
  return (
    <div className="size-[150px] bg-white">
      <img src={partner?.image} alt="partner-logo" className="size-full object-contain"/>
    </div>
  );
};

export default PartnerCard;

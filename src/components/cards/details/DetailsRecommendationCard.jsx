import Star from "../../../assets/png/star.png";
import PropTypes from "prop-types";

const DetailsRecommendationCard = ({
  name,
  intro,
  rating,
  reviewCount,
  price,
}) => {
  return (
    <div className="common_shadow rounded-[20px]">
      <div className="h-[244px] w-full overflow-hidden rounded-[20px]">
        <img
          src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80"
          alt="image"
          className="rounded-[20px]"
        />
      </div>
      <div className="p-6">
        <p className="flex items-center justify-between">
          <span className="text-xl font-bold">{name}</span>
          <span className="text-2xl font-bold">{price}</span>
        </p>
        <p className="text-base">{intro}</p>
        <p className="pt-4 pb-8 flex items-center gap-3">
          <img src={Star} alt="Star image" className="h-5 w-fit" />
          <span className="text-[16px] leading-[24px]">
            <span className="text-[#0076CE] font-bold">{rating}</span>(
            {reviewCount})
          </span>
        </p>
        <button className="hidden w-full lg:block bg-[#0076ce] text-white border-[1.5px] border-[#0076ce] rounded-[10px] py-[10px] px-4 font-bold transition_common hover:bg-white shadow-none hover:shadow-lg hover:border-white hover:text-[#0076ce] flex-grow">
          Request Proposal
        </button>
      </div>
    </div>
  );
};

DetailsRecommendationCard.propTypes = {
  name: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
export default DetailsRecommendationCard;

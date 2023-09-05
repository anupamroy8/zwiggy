import { CDN_URL } from "../../utils/constants";

const ResturantCard = (props) => {
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    props.resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h5>{avgRating} Stars</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export default ResturantCard;

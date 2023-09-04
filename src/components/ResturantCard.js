const ResturantCard = (props) => {
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    props.resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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

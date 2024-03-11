import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API, CDN_URL } from "../../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResMenu(json);
    } catch (error) {
      setErrorMessage("Error fetching menu data. Please try again later.");
      console.error("Error fetching menu data:", error);
    }
  };

  if (resMenu === null) return <Shimmer />;
  if (errorMessage) return <div>{errorMessage}</div>;

  console.log(resMenu?.data?.cards[2]?.card?.card?.info);
  console.log(resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);

  const {
    name,
    locality,
    cuisines = [],
    costForTwoMessage,
    cloudinaryImageId,
  } = resMenu?.data?.cards[2]?.card?.card?.info || {};

  const arrayOfCards =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards || [];

  const itemCards = [];
  {
    arrayOfCards.forEach((card) => {
      if (card?.card?.card?.itemCards) {
        itemCards.push(card?.card?.card?.itemCards);
      }
    });
  }
  const allItems = itemCards.flat();
  console.log(allItems);

  return (
    <div className="res-menu">
      <div className="menu">
        <h1>{name}</h1>
        <h2>{locality}</h2>
        <h3>
          {cuisines.length > 0 ? cuisines.join(", ") : "N/A"} - {costForTwoMessage}
        </h3>
        <h2>Menu</h2>
        <ul>
          {allItems.map((item, index) => (
            <li key={index}>
              {item.card.info.name} - Rs.{" "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img
          className="res-image"
          src={CDN_URL + cloudinaryImageId}
          alt="res-image"
        />
      </div>
    </div>
  );
};

export default RestaurantMenu;

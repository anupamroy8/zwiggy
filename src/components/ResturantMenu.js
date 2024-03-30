import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API, CDN_URL } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    locality,
    cuisines = [],
    costForTwoMessage,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const arrayOfCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards || [];

  console.log(arrayOfCards, "arrayOfCards");
  const itemCards = [];
  {
    arrayOfCards.forEach((card) => {
      if (card?.card?.card?.itemCards) {
        itemCards.push(card?.card?.card?.itemCards);
      }
    });
  }
  const allItems = itemCards.flat();
  console.log(itemCards);

  return (
    <div className="res-menu">
      <div className="menu">
        <h1>{name}</h1>
        <h2>{locality}</h2>
        <h3>
          {cuisines.length > 0 ? cuisines.join(", ") : "N/A"} -{" "}
          {costForTwoMessage}
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

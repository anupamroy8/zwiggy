import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../../utils/constants";

console.log(MENU_API, "check");

const RestaurantMenu = () => {
  [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setResMenu(json);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, locality, cuisines, costForTwoMessage } =
    resMenu?.data.cards[2].card.card.info;

  const { itemCards } =
    resMenu.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <h2>{locality}</h2>
        <h3>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
        <h2>
          Menu
          {console.log(
            resMenu.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card
              .card.itemCards[0].card.info
          )}
        </h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;

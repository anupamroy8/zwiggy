import { useState } from "react";
import restaurantsList from "../../utils/data";
import ResturantCard from "./ResturantCard";

const Body = () => {
  const [resList, setResList] = useState([...restaurantsList]);

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = resList.filter((res) => res.info.avgRating > 4.3);
            setResList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

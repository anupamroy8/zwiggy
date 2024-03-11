import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import restaurantsList from "../../utils/data";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { RES_LIST } from "../../utils/constants";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurant_list = "restaurant_grid_listing";

    for (const obj of arrayOfCards) {
      if (obj.card.card && obj.card.card.id === restaurant_list) {
        const resData =
          obj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(resData);
        setFilteredResturants(resData);
      }
    }
  };

  function handleSearch() {
    const filteredRes = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResturants(filteredRes);
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredResturants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResturants.map((restaurant) => (
          <Link
            to={"/resturants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantsList } from "./data";

// Header
//  Logo
//  NavBar
// Body
//  Search
//  Resturantcontainer
//    Resturant Card
//        -Img
//        - Name of res,
//
//  Footer
//    Copyright
//    Links
//    Address
//    contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1218437637/vector/food-point-logo-design.jpg?s=170667a&w=0&k=20&c=WcL0d3bOWCJUxoQ24Mx17S5DwboY3a2fGlGv3yBUdVw="
          alt="app logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantsList.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

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

export default Header;

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link> <br /> <br />
      <Link to="/about">About</Link> <br /> <br />
      <Link to="/user/ganesh">Ganesh</Link> <br /> <br />
      <Link to="/user/peter">Peter</Link> <br /> <br />
      <Link to='/filter'>Filter</Link>
    </>
  );
};

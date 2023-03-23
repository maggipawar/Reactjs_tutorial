import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const navToPage = (URL) => {
    navigate(URL);
  };

  return (
    <>
      <h1>Home component</h1>
      <p>This is my Home page</p>
      <p>This page describe information about our software</p>
      <Link to={"/about"}>About</Link> <br /> <br />
      {/* <button onClick={()=>navigate('/filter')}>Navigate Filter</button> <br /> <br />
            <button onClick={()=>navigate('/about')}>Navigate About</button> <br /> <br /> */}
      <button onClick={() => navToPage("./filter")}>Navigate Filter</button>{" "}
      <br /> <br />
      <button onClick={() => navToPage("./about")}>Navigate About</button>
    </>
  );
};

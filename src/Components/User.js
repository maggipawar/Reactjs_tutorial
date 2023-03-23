import { useParams } from "react-router-dom";

export const User = () => {
  const params = useParams();
  const { name } = params;
  console.log(name);
  return (
    <>
      <h1>{name} Page</h1>
    </>
  );
};

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Details({ output }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const details = output.filter((obj) => obj.id === +id);

  console.log(output);
  console.log(details);
  console.log(id);

  return (
    <>
      <h1>Details</h1>
      <h1>Details</h1>
      <div>{details[0].title}</div>

      <button onClick={() => navigate("/home")}>return</button>
    </>
  );
}

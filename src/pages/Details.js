import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  return (
    <>
      <h1>Details</h1>
      <h1></h1>
    </>
  );
}

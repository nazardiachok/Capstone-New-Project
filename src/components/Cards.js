export default function Cards({ shoppingCard }) {
  return (
    <>
      {shoppingCard.map((element) => (
        <ul key={element.id}>
          <li>
            {" "}
            <h5>
              {" "}
              Artikel: <span> {element.title} </span>
            </h5>{" "}
            <div>
              <span>{element.amount} </span> x <span>{element.price} </span> €
            </div>
          </li>
        </ul>
      ))}
    </>
  );
}

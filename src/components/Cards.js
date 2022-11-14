export default function Cards({ shoppingCard }) {
  return (
    <>
      <ul>
        {shoppingCard.map((element) => (
          <li key={element.id}>
            {" "}
            <h5>
              {" "}
              Artikel: <span> {element.title} </span>
            </h5>{" "}
            <div>
              <span>{element.amount} </span> x <span>{element.price} </span> €
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

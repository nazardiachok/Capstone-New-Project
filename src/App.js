import FooterNavigation from "./components/Navigation";
import AppHeader from "./components/Header";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import Warenkorb from "./pages/Warenkorb";
import History from "./pages/History";
import data from "./components/Data";
import { useState } from "react";
import { search } from "fast-fuzzy";
import Details from "./pages/Details";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./components/hooks/useLocalStorage";

function App() {
  const navigate = useNavigate();
  const { dataItems } = data;
  const [filteredData, setFilteredData] = useState([]);
  const [select, setSelect] = useState("");
  const [output, setOutput] = useState([]);
  const [localStorage, setLocalStorage] = useLocalStorage("Saved data: ", []);

  function inputValue(value) {
    let filtered = search(value, dataItems, {
      keySelector: (obj) => obj.title,
    });
    setFilteredData(filtered);

    let filterResult =
      select === ""
        ? filtered
        : filteredData.filter((obj) => {
            return obj.category === select;
          });
    setOutput(filterResult);
  }

  function selectValue(event) {
    setSelect(event);
  }

  function addToShoppingCard(card) {
    const objectExists = localStorage.find((object) => object.id === card.id);

    if (objectExists) {
      setLocalStorage(
        localStorage.map((obj) =>
          obj.id === card.id
            ? { ...objectExists, amount: objectExists.amount + 1 }
            : obj
        ) /* wenn es existiert-dann ändere amount mit .map, wenn nein-gib obj unverändert zurück  */
      );
    } else {
      setLocalStorage([...localStorage, { ...card, amount: 1 }]);
    }

    /* navigate("/warenkorb"); */
  }

  function deleteCard(obj) {
    setLocalStorage(localStorage.filter((ware) => ware.id !== obj.id));
  }

  return (
    <>
      <AppHeader />
      <Routes>
        <Route
          path="/home"
          element={
            <HomePage
              inputValue={inputValue}
              selectValue={selectValue}
              output={output}
              addToShoppingCard={addToShoppingCard}
            />
          }
        ></Route>
        <Route path="/:id" element={<Details output={output} />}></Route>
        <Route
          path="/warenkorb"
          element={
            <Warenkorb
              localStorage={localStorage}
              deleteCard={deleteCard}
              addToShoppingCard={addToShoppingCard}
              /*               changeAmount={changeAmount}
               */
            />
          }
        ></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>

      <FooterNavigation />
    </>
  );
}

export default App;

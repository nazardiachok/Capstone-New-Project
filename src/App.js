import FooterNavigation from "./components/Navigation";
import AppHeader from "./components/Header";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import History from "./pages/History";
import data from "./components/Data";
import { useEffect, useState } from "react";
import { search } from "fast-fuzzy";
import Details from "./pages/Details";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./components/hooks/useLocalStorage";
import PersonalData from "./pages/PersonalData";
import OrderDetails from "./pages/OrderDetails";
import ShoppingCard from "./pages/ShoppingCard";

function App() {
  const navigate = useNavigate();
  const { dataItems } = data;

  const [filteredData, setFilteredData] = useState([]);

  const [select, setSelect] = useState("");
  const [output, setOutput] = useState([]);

  const [shoppingCard, setShoppingCard] = useLocalStorage("Saved data: ", []);
  const [inputData, setInputData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [historyItems, setHistoryItems] = useLocalStorage("History items", []);

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
    const objectExists = shoppingCard.find((object) => object.id === card.id);
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    if (objectExists) {
      setShoppingCard(
        shoppingCard.map((obj) =>
          obj.id === card.id
            ? { ...objectExists, amount: objectExists.amount + 1 }
            : obj
        ) /* wenn es existiert-dann ändere amount mit .map, wenn nein-gib obj unverändert zurück  */
      );
    } else {
      setShoppingCard([...shoppingCard, { ...card, amount: 1, date: date }]);
    }
    setTimeout(() => {
      setShoppingCard([]);
    }, 1000 * 60 * 60 * 6.5);
  }

  function decreaseAmount(obj) {
    if (obj.amount === 1) {
      deleteCard(obj);
    } else {
      setShoppingCard(
        shoppingCard.map((item) =>
          obj.id === item.id ? { ...obj, amount: obj.amount - 1 } : item
        )
      );
    }
  }

  function deleteCard(obj) {
    setShoppingCard(shoppingCard.filter((ware) => ware.id !== obj.id));
  }
  function saveTheData(name, email, address) {
    setInputData({ name: name, email: email, address: address });

    navigate("/bestellung");
  }
  function moveToHistory(input) {
    setHistoryItems([...historyItems, ...shoppingCard]);
    setShoppingCard([]);
    navigate("/history");
  }
  function clearHistory() {
    setHistoryItems([]);
  }

  return (
    <>
      <AppHeader />
      <Routes>
        <Route
          path="/"
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
            <ShoppingCard
              shoppingCard={shoppingCard}
              deleteCard={deleteCard}
              addToShoppingCard={addToShoppingCard}
              decreaseAmount={decreaseAmount}
              setTotalPrice={setTotalPrice}
            />
          }
        ></Route>
        <Route
          path="/history"
          element={
            <History historyItems={historyItems} clearHistory={clearHistory} />
          }
        ></Route>

        <Route
          path="/personalData"
          element={
            <PersonalData saveTheData={saveTheData} inputData={inputData} />
          }
        ></Route>
        <Route
          path="/bestellung"
          element={
            <OrderDetails
              inputData={inputData}
              shoppingCard={shoppingCard}
              totalPrice={totalPrice}
              moveToHistory={moveToHistory}
            />
          }
        ></Route>
      </Routes>

      <FooterNavigation shoppingCard={shoppingCard} />
    </>
  );
}

export default App;

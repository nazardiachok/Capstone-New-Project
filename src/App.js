import FooterNavigation from "./components/Navigation";
import AppHeader from "./components/Header";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import History from "./pages/History";
import data from "./components/Data";
import { useState } from "react";
import { search } from "fast-fuzzy";
import Details from "./pages/Details";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./components/hooks/useLocalStorage";
import PersonalData from "./pages/PersonalData";
import OrderDetails from "./pages/OrderDetails";
import ShoppingCard from "./pages/ShoppingCard";
import Feedback from "./pages/Feedback";

function App() {
  const navigate = useNavigate();
  const { dataItems } = data;
  const [allDataItems, setAllDataItems] = useLocalStorage(
    "Data Items",
    dataItems
  );
  const [filteredData, setFilteredData] = useState([]);
  const [select, setSelect] = useState("");
  const [output, setOutput] = useState([]);
  const [shoppingCard, setShoppingCard] = useLocalStorage("Saved data: ", []);
  const [inputData, setInputData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [historyItems, setHistoryItems] = useLocalStorage("History items", []);
  const [elementForFeedback, setElementforFeedback] = useState([]);
  const [editFeedbackInput, setEditFeedbackInput] = useState({});

  function inputValue(value) {
    let filtered = search(value, allDataItems, {
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
    let time = current.getHours() + ":" + current.getMinutes();

    if (objectExists) {
      setShoppingCard(
        shoppingCard.map((obj) =>
          obj.id === card.id
            ? { ...objectExists, amount: objectExists.amount + 1 }
            : obj
        ) /* wenn es existiert-dann ändere amount mit .map, wenn nein-gib obj unverändert zurück  */
      );
    } else {
      setShoppingCard([
        ...shoppingCard,
        { ...card, amount: 1, date: date, time: time },
      ]);
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
  function feedbackSubmit(user, feedback, elementForFeedback) {
    const foundObject = allDataItems.find(
      (object) => object.id === elementForFeedback.id
    );
    if (foundObject) {
      setAllDataItems(
        allDataItems.map((element) =>
          element.id === elementForFeedback.id
            ? {
                ...elementForFeedback,
                user: user,
                feedback: feedback,
              }
            : element
        )
      );
    } else {
      return null;
    }

    let isExecuted = window.confirm(
      "Danke für Ihre Bewertung! Nach Bestätigung werden Sie zum Artikel Details weitergeleitet!"
    );
    if (isExecuted) {
      navigate(`/${elementForFeedback.id}`);
    } else {
      return null;
    }
  }
  function goToFeedbackForm(elem) {
    setEditFeedbackInput({ user: "", feedback: "" });
    setElementforFeedback(elem);
    navigate("/feedback");
  }
  function editFeedback(elem) {
    setElementforFeedback(elem);
    setEditFeedbackInput({ user: elem.user, feedback: elem.feedback });
    /*  damit füge ich defaultValue zum Feedback page hinzu, und in einer function oben -leere ich den feld bevor ich dahin von woanders navigiere */
    navigate("/feedback");
  }
  function deleteFeedback(obj) {
    let isExecuted = window.confirm(
      "Sind Sie sicher dass Sie die Bewertung löschen möchten?"
    );
    if (isExecuted) {
      /* menn du yes clickst-führe delete aus, sonst lasse unverändert */
      if (allDataItems.find((item) => item.id === obj.id)) {
        setAllDataItems(
          allDataItems.map((elem) =>
            elem.id === obj.id ? { ...obj, user: "", feedback: "" } : elem
          )
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
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
        <Route
          path="/:id"
          element={
            <Details
              allDataItems={allDataItems}
              deleteFeedback={deleteFeedback}
              editFeedback={editFeedback}
            />
          }
        ></Route>
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
            <History
              historyItems={historyItems}
              clearHistory={clearHistory}
              goToFeedbackForm={goToFeedbackForm}
            />
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
        <Route
          path="/feedback"
          element={
            <Feedback
              feedbackSubmit={feedbackSubmit}
              elementForFeedback={elementForFeedback}
              editFeedbackInput={editFeedbackInput}
            />
          }
        ></Route>
      </Routes>

      <FooterNavigation shoppingCard={shoppingCard} />
    </>
  );
}

export default App;

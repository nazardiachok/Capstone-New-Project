import FooterNavigation from "./components/Navigation";
import AppHeader from "./components/Header";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import History from "./pages/History";
import data from "./components/Data";
import { useState, useEffect } from "react";
import { search } from "fast-fuzzy";
import Details from "./pages/Details";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./components/hooks/useLocalStorage";
import PersonalData from "./pages/PersonalData";
import OrderDetails from "./pages/OrderDetails";
import ShoppingCard from "./pages/ShoppingCard";
import Feedback from "./pages/Feedback";
import Favourites from "./pages/Favourites";

function App() {
  const navigate = useNavigate();
  const { dataItems } = data;
  const [allDataItems, setAllDataItems] = useLocalStorage(
    "Data Items",
    dataItems
  );
  const [select, setSelect] = useState("");
  const [output, setOutput] = useState([]);
  const [shoppingCard, setShoppingCard] = useLocalStorage(
    "Shopping Cards: ",
    []
  );
  const [inputData, setInputData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [historyItems, setHistoryItems] = useLocalStorage("History items", []);
  const [elementForFeedback, setElementforFeedback] = useState([]);
  const [editFeedbackInput, setEditFeedbackInput] = useState({});
  const [value, setValue] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [objForModalWindow, setObjForModalWindow] = useState({});

  useEffect(() => {
    function fuzzySearchValue() {
      let filtered = search(value, allDataItems, {
        keySelector: (obj) => obj.title,
      });

      let filterResult =
        select === ""
          ? filtered
          : filtered.filter((obj) => {
              return obj.category === select;
            });

      setOutput(filterResult);
    }
    fuzzySearchValue();
  }, [value, select, allDataItems]);

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
                bookmarked: false,
              }
            : element
        )
      );
    } else {
      return null;
    }

    navigate(`/${elementForFeedback.id}`);
  }

  function goToFeedbackForm(elem) {
    setEditFeedbackInput({ user: "", feedback: "" });
    setElementforFeedback(elem);
    navigate("/feedback");
  }

  function editFeedback(elem) {
    setElementforFeedback(elem);
    setEditFeedbackInput({ user: elem.user, feedback: elem.feedback });
    /*  damit füge ich defaultValue zum Feedback page hinzu, und in einer function oben -leere ich den feld bevor ich dahin von history navigiere */
    navigate("/feedback");
  }

  function openModalWindow(obj) {
    setObjForModalWindow(obj);

    setModalActive(true);
    //übergabe erst an Details, dann in Details an Modal(unten neben Zurück button) weiter
  }

  function deleteFeedback(obj) {
    if (allDataItems.find((item) => item.id === obj.id)) {
      setAllDataItems(
        allDataItems.map((elem) =>
          elem.id === obj.id ? { ...obj, user: "", feedback: "" } : elem
        )
      );
    } else {
      return null;
    }
    setModalActive(false);
  }

  function bookmarkToggle(obj) {
    setAllDataItems(
      allDataItems.map((item) => ({
        ...item,
        bookmarked: obj.id === item.id ? !item.bookmarked : item.bookmarked,
      }))
    );
  }
  return (
    <>
      <AppHeader />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setValue={setValue}
              selectValue={selectValue}
              output={output}
              addToShoppingCard={addToShoppingCard}
              bookmarkToggle={bookmarkToggle}
              allDataItems={allDataItems}
            />
          }
        ></Route>
        <Route
          path="/favourites"
          element={
            <Favourites
              favourite={allDataItems.filter((item) => item.bookmarked)}
              addToShoppingCard={addToShoppingCard}
              bookmarkToggle={bookmarkToggle}
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
              modalActive={modalActive}
              setModalActive={setModalActive}
              openModalWindow={openModalWindow}
              objForModalWindow={objForModalWindow}
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

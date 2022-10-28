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

function App() {
  const navigate = useNavigate();
  const { dataItems } = data;
  const [filteredData, setFilteredData] = useState([]);
  const [select, setSelect] = useState("");
  const [output, setOutput] = useState([]);
  const [warenKorb, setWarenkorb] = useState([]);

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
  function addToShoppingCard(objArray) {
    setWarenkorb([...warenKorb, objArray]);
    console.log(warenKorb);
    navigate("/warenkorb");
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
          element={<Warenkorb warenKorb={warenKorb} />}
        ></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>

      <FooterNavigation />
    </>
  );
}

export default App;

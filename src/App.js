import Navigation from "./components/Navigation";
import AppHeader from "./components/Header";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import Warenkorb from "./pages/Warenkorb";
import History from "./pages/History";
import data from "./components/Data";
import { useState } from "react";
import { search } from "fast-fuzzy";

function App() {
  const { dataItems } = data;
  const [filteredData, setFilteredData] = useState([]);

  function inputValue(value) {
    let filtered = search(value, dataItems, {
      keySelector: (obj) => obj.title,
    });
    setFilteredData(filtered);
    /* console.log(filteredData.map((obj) => obj.title)); */
  }
  return (
    <>
      <AppHeader />
      <Routes>
        <Route
          path="/home"
          element={
            <HomePage inputValue={inputValue} selectValue={selectValue} />
          }
        ></Route>
        <Route path="/warenkorb" element={<Warenkorb />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>

      <Navigation />
    </>
  );
}

export default App;

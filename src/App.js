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
import { createContext } from "react";

const UserContext = createContext();

function App() {
  const { dataItems } = data;
  const [filteredData, setFilteredData] = useState([]);
  const [select, setSelect] = useState("");
  const [output, setOutput] = useState([]);

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
  return (
    <UserContext.Provider value={{ output }}>
      <AppHeader />
      <Routes>
        <Route
          path="/home"
          element={
            <HomePage
              inputValue={inputValue}
              selectValue={selectValue}
              output={output}
            />
          }
        ></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/warenkorb" element={<Warenkorb />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>

      <FooterNavigation />
    </UserContext.Provider>
  );
}

export default App;

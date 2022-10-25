import Navigation from "./components/Navigation";
import AppHeader from "./components/Header";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import Warenkorb from "./pages/Warenkorb";
import History from "./pages/History";
import data from "./components/Data";

function App() {
  const { dataItems } = data;

  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/warenkorb" element={<Warenkorb />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>

      <Navigation />
    </>
  );
}

export default App;

import Navigation from "./components/Navigation";
import AppHeader from "./components/Header";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import Warenkorb from "./pages/Warenkorb";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/warenkorb" element={<Warenkorb />}></Route>
      </Routes>

      <Navigation />
    </>
  );
}

export default App;

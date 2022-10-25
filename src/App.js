import Navigation from "./components/Navigation";
import AppHeader from "./components/Header";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>

      <Navigation />
    </>
  );
}

export default App;

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>

      <Navigation></Navigation>
    </>
  );
}

export default App;

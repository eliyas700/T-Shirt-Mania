import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import OrderReview from "./Components/OrderReview/OrderReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/orderreview" element={<OrderReview />}></Route>
      </Routes>
    </div>
  );
}

export default App;

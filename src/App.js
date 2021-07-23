import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LightMode } from "./context/context";
import "./App.css";
import { Home } from "./components/Home";
import Category from "./components/Category";
import Product from "./components/Product";
import Header from "./components/Header";

function App() {
  const [mode, setmode] = useState("dark");

  return (
    <LightMode.Provider value={{ mode: mode }}>
      <Router>
        <Header
          changeLightMode={() => setmode(mode == "dark" ? "light" : "dark")}
        ></Header>
        <Route path="/home" exact component={Home}></Route>
        <Route
          path="/products/:categoryName"
          exact
          component={Category}
        ></Route>
        <Route path="/product/:productId" exact component={Product}></Route>
      </Router>
    </LightMode.Provider>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LightMode } from "./context/context";
import "./App.css";
import { Home } from "./components/Home";
import Category from "./components/Category";
import Product from "./components/Product";
import Header from "./components/Header";
import { Err } from "./error/Err";
import NotFound from "./components/404";
function App() {
  const [mode, setmode] = useState("dark");

  return (
    <Err>
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
        <Route path="/**" exact component={NotFound}></Route>
      </Router>
    </LightMode.Provider>
    </Err>
  );
}

export default App;

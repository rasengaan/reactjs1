import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route path="/home" exact>
          <Home/>
        </Route>
        <Route
          path="/products/:categoryName"
          exact
        >
          <Category/>
        </Route>
        <Route path="/product/:productId" exact>
          <Product/>
        </Route>
        <Route path="/**" >
          <NotFound/>
        </Route>
      </Switch>
      </Router>
    </LightMode.Provider>
    </Err>
  );
}

export default App;

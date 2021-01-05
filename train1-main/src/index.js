import React from "react";
import ReactDOM from "react-dom";
import "./styles/bootstrap.min.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Popular from "./components/Popular";
import Battle from "./pages/Battle";
import BattleResult from "./pages/BattleResult";

const App = () => (
  // {/* <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

  //  {/*<div className="container">
  //         <h2>热门项目列表：</h2>
  //         <PopularRepoList />

  // </div>1111*/}
  // <Popular></Popular>
  // </div> */}
  <Router>
    <Route exact path="/" component={Popular} />
    {/* <Redirect from="/" to="/popular"  /> */}
    <Route exact path="/battle" component={Battle} />
    <Route path="/battle/:name" component={BattleResult} />
  </Router>
);

ReactDOM.render(<App></App>, document.getElementById("container"));

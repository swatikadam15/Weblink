// import "./styles.css";
import React from "react";
import Main from "./MyComponents/Main";
import Movie from "./MyComponents/Movie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Star from "./MyComponents/Star";
import War from "./MyComponents/War";


const App=()=> {
  return (
    <>
      <Router>
        
        <Switch>
        <Route exact path="/">
            <Main />
            </Route>
          <Route exact path="/movie">
            <Movie />
            </Route>
         
            <Route exact path="/ep2">
             <Star/>
            </Route>

            <Route exact path="/ep3">
             <War/>
            </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ScreenOne from "./Components/Screenone";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Summery from "./Components/Summery";

function App() {
  const [getValue, setGetValue] = useState([]);

  const apiFunction = async () => {
    const API_URL = "https://api.tvmaze.com/search/shows?q=all";
    const data_List = await axios.get(API_URL);
    setGetValue(data_List.data);
  };

  useEffect(() => {
    apiFunction();
  }, []);
  return (
    <>
      <Router>
        <div className="section_container">
          <h1 className="heading">Movies List</h1>
          <div className="section_row">
            {getValue.map((item) => {
              return <ScreenOne nameItem={item} />;
            })}
          </div>
          <div className="custom-shape-divider-top-1638020631">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <Switch>
          <Route exact path="/summery/:id/:name/:averageRuntime/:language/:premiered/:summary" component={Summery} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

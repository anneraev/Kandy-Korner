import React from 'react';
import ReactDOM from 'react-dom';
import KandyKorner from "./components/kandy-korner/KandyKorner";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css"

ReactDOM.render(
    <Router>
        <KandyKorner />
    </Router>
    , document.getElementById("root")
)

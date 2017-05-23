import React from 'react';
import ReactDOM from 'react-dom';
import LegendServer from "./LegendServer";

window.onload = function(){
    ReactDOM.render(<LegendServer/>,document.getElementById('app'))
};
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";


const MainApp = () => {
    return (<App/>);
}


ReactDOM.render(<MainApp/>, document.querySelector("#root"));


// 1) Import ReactDOM library
import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);

// 4) Create a component
const App = () => {
    return (
        <div>
            <GuestList></GuestList>
            <Parent></Parent>
        </div>
    );
};

// 5) Show the componen
root.render(<App/>);


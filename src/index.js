import React from "react";
import ReactDom from "react-dom/client";
import {Contador} from "./components/Contador"
import { Texto } from "./components/Texto";
import { Botones } from "./components/Botones";
import { Puerta } from "./components/Puerta";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <Contador/>
        <Texto/>
        <Botones/> 
        <Puerta/>
    </>
)
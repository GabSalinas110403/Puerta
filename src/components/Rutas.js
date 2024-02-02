import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contador } from "./Contador";
import { Texto } from "./texto";
import { Error } from "./Error";
import { Puerta } from "./Puerta";
import { Botones } from "./Botones";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";

export function Rutas(){
    return(
        <>
        <Menu/>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error/>}></Route>
                <Route path="/" element={<Inicio/>}></Route>

                <Route path="/contador" element={<Contador/>}></Route>
                <Route path="/texto" element={<Texto/>}></Route>
                <Route path="/puerta" element={<Puerta/>}></Route>
                <Route path="/botones" element={<Botones/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}
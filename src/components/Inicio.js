import { useEffect } from "react";
import { useState } from "react"

var data=[
    {
        id: 100,
        noticia:"Mejores alumnos de la UTSJR",
        autor: "Abc news"
    },
    {
        id: 200,
        noticia:"UTSJR abre nueva carrera",
        autor: "MNM news"
    },
    {
        id: 300,
        noticia:"Becas para alumnos de la UTSJR",
        autor: "Zxy news"
    },
]

export function Inicio(){
    const[dataNews, setDataNews] = useState(data);
    useEffect(()=>{
        setDataNews(data);
    }, []);

    const lista = dataNews.map((new1, id)=>{
        return(
            <div key={id}>
                <div>{new1.id}</div>
                <div>{new1.noticia}</div>
                <div>{new1.autor}</div>
            </div>
        );
    });
    return(
        <div>
            {lista}
        </div>
    );
}
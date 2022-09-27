import React, { useState } from 'react'

function Add() {

  const Titulo = "Añadir Pelicula";

  const [peliculaSate, setPeliculaState] = useState({
    titulo: "",
    description:"",

  });


  const {titulo, description} = peliculaSate;

  const getData = e => {
    e.preventDefault();
    let target = e.target;
    let titulo = target.titulo.value;
    let description = target.titulo.value;
    
    let pelicula = {
      id: new Date().getTime(),
      titulo, 
      description
    }

    setPeliculaState({pelicula});

    local(pelicula)


  }

  const local = pelicula => {
    let elementos = JSON.parse(localStorage.setItem("peliculas"));
    if (Array.isArray(elementos)) {

      elementos.push(pelicula)
      console.log(elementos)
      
    } else {
      elementos = ["peliculas"]
    }
  };

  return (
    <><div className="add">
    <h3 className="title">{Titulo}</h3>
    <form onSubmit={ getData }>
        <input type="text" id="title" placeholder="Titulo" name="titulo" />
        <textarea id="description" placeholder="Descripción" name="description" ></textarea>
        <input type="submit" id="save" value="Guardar" />
    </form>
</div></>
  )
}

export default Add
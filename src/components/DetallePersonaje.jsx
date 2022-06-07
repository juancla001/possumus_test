import React from 'react'
import {useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



const DetallePersonaje = () => {
  let { id } = useParams();
  console.log(id);
  console.log("vivo")

  const URL = 'https://swapi.dev/api/people/' + id
  const [personaje, setPersonaje] = useState({});


  useEffect(() => {
    async function fetchData(req) {
      const request = await axios.get(URL)
      console.log(request.data.results);
      console.log(request.data);
      setPersonaje(request.data)

    }
    fetchData()
  }, []);

  return personaje.name !== null ? (

    <>

      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{personaje.name} </li>
          <li className="list-group-item">{personaje.homeworld}</li>
          <li className="list-group-item">Vehicles</li>
        </ul>
      </div>

    </>
  )
  : null

}

export default DetallePersonaje;
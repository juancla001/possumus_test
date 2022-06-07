import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './css/detalle.css'
import { useNavigate } from 'react-router-dom';


const DetallePersonaje = () => {
  const navigate = useNavigate();

  let { id } = useParams();

  const URL = 'https://swapi.dev/api/people/' + id
  const [personaje, setPersonaje] = useState({});


  useEffect(() => {
    async function fetchData(req) {
      const request = await axios.get(URL)
      setPersonaje(request.data)

    }
    fetchData()
  }, []);

  return personaje.name !== null ? (

    <>

      <div className="container">

        <div className="card">

          <div className="top-row background-top-row">
            <h3>{personaje.name}</h3>
          </div>
          <div className="content">
            <p>Altura: {personaje.height}</p>
            <p>Genero: {personaje.gender}</p>
            <p>Peso: {personaje.mass}</p>
            <p>Color de ojos: {personaje.eye_color}</p>
            <p>Color de cabello: {personaje.hair_color}</p>
            <p>Cumpleaños: {personaje.birth_year}</p>
            <div className="btn">
              <button className="btn btn-secondary btn-sm" type="button" onClick={() => navigate(-1)}>Atras</button>
            </div>
          </div>
        </div>

      </div>

    </>
  )
    : null

}

export default DetallePersonaje;
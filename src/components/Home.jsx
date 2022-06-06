import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {
  const URL = 'https://swapi.dev/api/people/'
  const [personajesList, setPersonajesList] = useState([]);


  useEffect(() => {
    async function fetchData(req) {
      const request = await axios.get(URL)
      console.log(request.data.results);
      setPersonajesList(request.data.results)
      console.log("asdsad");
    }
    fetchData()
  }, []);



  return (
    <>

      <div className="row">

        {
          personajesList.map((unPersonaje, index) => {
            return (

              <div className="row-3" key={index}>
                {
                  <div className="card">
                    <div className="card-header">
                      Personaje
                    </div>
                    <div class="card-body">
                      <blockquote className="blockquote mb-0 list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <Link to="/detalle">
                          <p>{unPersonaje.name}</p>
                        </Link>

                      </blockquote>
                    </div>
                  </div>

                }
              </div>
            )
          })
        }
      </div>
    </>
  )
}


export default Home;
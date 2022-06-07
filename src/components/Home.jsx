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
      setPersonajesList(request.data.results)
    }
    fetchData()
  }, []);


  return (
    <>

      <div className="row">

        {
          personajesList.map((unPersonaje, index) => {
            return (

              <div className="col-3 m-2" key={index}>
                {
                  <div class="card border-dark">
                    <div class="card-body">
                      <h5 class="card-title">{unPersonaje.name}</h5>
                      <Link to={`/detalle/${unPersonaje.url.split(["/"])[5]}`}>
                        <p>VER MAS</p>
                      </Link>
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
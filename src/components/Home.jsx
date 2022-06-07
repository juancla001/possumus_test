import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";




const Home = () => {

  const URL = 'https://swapi.dev/api/people/'
  const [personajesList, setPersonajesList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

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
        loading?(
          <ClipLoader className="loader" color={"F8E71C"} loading={loading} size={150} />
        )
        : (
        <>
          {
            personajesList.map((unPersonaje, index) => {
              return (
  
                <div className="col-3 m-2" key={index}>
                  {
                    <div class="card border-dark">
                      <div class="card-body">
                        <h5 class="card-title">{unPersonaje.name}</h5>
                        <button type="button" className="btn  btn-sm">
                        <Link to={`/detalle/${unPersonaje.url.split(["/"])[5]}`}>
                          Ver mas
                        </Link>
                        </button>

                      </div>
                    </div>
  
                  }
                </div>
  
              )
            })
          }
        </>
        )
      }
        

      </div>

    </>
  )
}


export default Home;
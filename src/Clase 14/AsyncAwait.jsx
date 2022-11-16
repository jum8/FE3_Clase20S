import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AsyncAwait = (props) => {
    const [poke, setPoke] = useState([])

    const url = `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`
    useEffect(() => {
        //Fetch con async/await
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setPoke(data)
        }
        fetchData()

        //Axios con async/await
        const axiosData = async () => {
            const response = await axios.get(url)
            setPoke(response.data)
        }
        axiosData()
    }, [url])


  return (
    <div>
        Aprendiendo Async Await
        <h1> {poke.name}</h1>
        <h2>{poke.id}</h2>
        <img src={poke.sprites?.front_shiny} alt="" />
        {/* {poke.stats.map(stat => <li>{stat.stat.name}</li>)} */}
    </div>
  )
}

export default AsyncAwait
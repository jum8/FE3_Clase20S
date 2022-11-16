import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchAxios = (props) => {
    const [poke, setPoke] = useState([])

    const url = `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`
    useEffect(() => {
        //Fetch con then
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))

        //Axios con then
        axios.get(url)
        .then(res => setPoke(res.data))
    }, [url])


  return (
    <div>
        Aprendiendo Fetch
        <h1> {poke.name}</h1>
        <h2>{poke.id}</h2>
        <img src={poke.sprites?.front_shiny} alt="" />
        {/* {poke.stats.map(stat => <li>{stat.stat.name}</li>)} */}
    </div>
  )
}

export default FetchAxios
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const ComponentePost = () => {
  const [data, setData] = useState({
        userId: 0,
        id: 0,
        title: "",
        body: ""
    })
  const url = "https://jsonplaceholder.typicode.com/posts"
  
  const handleSubmit = (e) => {
        console.log(data);
        e.preventDefault()
        axios.post(url, data)
        .then(function (response) {
            console.log(response);
        })
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input  type="number" placeholder='user Id' onChange={(e)=> setData(({...data, userId: e.target.value}))}/>
        <input  type="number" placeholder='id' onChange={(e)=> setData(({...data, id: e.target.value}))}/>
        <input  type="text" placeholder='titulo' onChange={(e)=> setData(({...data, title: e.target.value}))} />
        <input type="text" placeholder='cuerpo de la publicacion' onChange={(e)=> setData(({...data, body: e.target.value}))}/>
        <button>enviar</button>
      </form>
    </div>
  )
}

export default ComponentePost
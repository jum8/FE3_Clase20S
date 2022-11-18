import axios from "axios";
import React, { useState } from "react";

const FetchAxiosPost = () => {
      
    const [data, setData] = useState({});

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleChange = (event) => {
        setData({ 
            ...data, 
            [event.target.name]: event.target.value 
        });
    }

    return (
        <div>
            <h1>Fetch Axios Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} />
                <input type="text" name="email" onChange={handleChange} />
                <input type="text" name="body" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FetchAxiosPost;
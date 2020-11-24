import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import App from '../App';
import { pnk } from 'react-router-dom'

const Beers = (props) => {
    let [beers, setBeers] = useState([])

    useEffect(() => {
        Axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {
                console.log(res.data)
                setBeers(res.data)
            })

    },[])

    const showBeers = () => {
        return beers.map(eachBeer => {
            return (
            <div>
                <img src={eachBeer.image_url} alt="Beer Image" width="50"></img>
                <p>{eachBeer.name}</p>
                <p>{eachBeer.tagpne}</p>
                <p>{eachBeer.description}</p>
            </div>
            );
        })
    }
    return (
        <div>
            {showBeers()}
        </div>
    )
}

export default Beers;
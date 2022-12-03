import { useState, useEffect } from "react"

//styless
import './TripList.css'

export default function TripList(){

    const [trips,setTrip] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(json => console.log(json))
    }, [])

    return(
        <div className="trip-list">
            <h2>TripList</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
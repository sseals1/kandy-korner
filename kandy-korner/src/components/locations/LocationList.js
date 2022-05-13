import React, { useState, useEffect } from "react";

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then((response) => response.json())
            .then((locationData) => {
                setLocations(locationData)
                console.log(locationData)
            })
        }, []
        )

        return (
            <>
            {
                locations.map(
                    (locationData) => {
                        return <p key={`location--${locationData.id}`}>{locationData.cityName}</p>

                    }
                    )
                    
            }
            </>
        )

} 
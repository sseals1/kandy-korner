import React, { useState, useEffect } from "react";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers`)
            .then(res => res.json())
            .then((customerData) => {
                setCustomers(customerData)
            })
        },
        []
        )

        return (
            <>
            <h2>CustomerList</h2>

            {
                customers.map((custObj) => {
                    return <p className="customers" key={`customer--${custObj.id}`}>{custObj.name}</p>
                })
            }

            </>
        )
}
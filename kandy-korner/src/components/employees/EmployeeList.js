import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"


export const EmployeeList = () => {
    const history = useHistory()
     const [employees, setEmployee] = useState([])

     useEffect(() => {
         fetch(`http://localhost:8088/employees?_expand=location`)
         .then((res) => res.json())
         .then((empData) => {
             setEmployee(empData)
         })
     },
     []
     )

     return (
         <>
         <h2>Employees</h2>
         <div>
             <button onClick={
                 () => {
                     history.push("/employees/create")
                 }
             }>Hire Employee</button>
         </div>

         {
         employees.map(
             (empObj) => {
             return <div>
                 <p key={`employee--${empObj.id}`}>Employee name: {empObj.name}
                 <br/>
                 Employee Location: {empObj.location.cityName}</p>
                 </div>
         })
         }
          
         </>
     )
}
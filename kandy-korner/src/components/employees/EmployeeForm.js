import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
  const history = useHistory();
  const [locations, setLocations] = useState([]);
  const [employees, setEmployees] = useState({
    name: "",
    locationId: 0,
    manager: "",
    fullTime: false,
    hourlyRate: 0,
    isManager: false
});

const hireEmployees = (event) => {
    event.preventDefault()

    
    
    
    const newEmployee = {
        name: employees.name,
        fullTime: employees.fullTime,
        hourlyRate: employees.hourlyRate,
        locationId: employees.locationId,
        manager: employees.manager,
        isManager: employees.isManager
    };
    
    
    const fetchCall = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
    };
    
    return fetch(`http://localhost:8088/employees`, fetchCall)
    .then(() => {
        history.push("/employees");
    });
};


useEffect(
    () => {
        fetch(`http://localhost:8088/locations`)
        .then((res) => res.json())
        .then((locationData) => {
            setLocations(locationData)
        })
        
    }, []
    )
    
    return (
        <form className="employeeForm">
      <h2 htmlFor="emplyeeForm_title">New Employee</h2>
      <fieldset>
        <div className="form_group">
          <label htmlFor="employee_name">Employee Name: </label>
          <input
            required
            autoFocus
            type="text"
            className="form_control"
            placeholder="Employee name..."
            onChange={(event) => {
                const copyOfemplyees = {...employees };
                copyOfemplyees.name = event.target.value;
                setEmployees(copyOfemplyees);
            }}
            />
        </div>
      </fieldset>

      <fieldset>
          <div className="form_group">
              <label htmlFor="location">Store Location: </label>
              <select
              onChange={
                  (event) => {
                      const copyOfemplyees = {...employees}
                      copyOfemplyees.locationId = parseInt(event.target.value)

                      const employeeLocation = locations.find((location) => location.id === parseInt(copyOfemplyees.locationId))
                      if (employeeLocation) {
                          copyOfemplyees.manager = employeeLocation.manager
                        } 

                      setEmployees(copyOfemplyees)
                      
                    }}>
                  <option value="0" key="location" className="location_dropdown">Choose a location...</option>
                  {
                      locations.map((location) => {
                          return (
                              <option key={location.id} value={location.id}>{location.cityName}</option>
                              )
                            })
                        }
              </select>
          </div>
      </fieldset>

      <fieldset>
          <div className="form_group">
              <label htmlFor="isManager">Is Manger: </label>
              <input
              required
              autoFocus
              type="checkbox"
              className="form_control"
              placeholder="isManager"
              onClick={
                  (event) => {
                    const copyOfemplyees = {...employees}
                    copyOfemplyees.isManager = event.target.checked
                    setEmployees(copyOfemplyees)
                  }
              }/>
          </div>
      </fieldset>

      <fieldset>
            <div className="form_group">
                <label htmlFor="fullTime">Full Time: </label>
                <input
                required
                autoFocus
                type="checkbox"
                className="form_control"
                placeholder="Full time"
                onClick={
                    (event) => {
                        const copyOfemplyees = {...employees}
                        copyOfemplyees.fullTime = event.target.checked
                        setEmployees(copyOfemplyees)
                    }}
                    />
            </div>
      </fieldset>

      <fieldset>
          <div className="form_group">
              <label htmlFor="hourlyRate">Hourly Pay Rate: </label>
              <input
              required
              autoFocus
              type="text"
              className="form_control"
              placeholder="$$.$$"
              onChange={
                  (event) => {
                    const copyOfemplyees = {...employees}
                    copyOfemplyees.hourlyRate = event.target.value
                    setEmployees(copyOfemplyees)
              }}
              />
          </div>
      </fieldset>


              <p>
              <button className="hireEmployee_btn" onClick={hireEmployees}>
                    Hire Employee
              </button>
              </p>

    </form>
  );
};



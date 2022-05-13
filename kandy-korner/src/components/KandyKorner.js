import React from "react"
import { NavBar } from "./nav/NavBar"
import { Route } from 'react-router-dom'
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Redirect } from "react-router-dom"


export const KandyKorner = () => {
    return(
        
        <>
        <Route
          render={() => {
            if (localStorage.getItem("Kandy_Korner")) {
              return (
                <>
                   <NavBar />
                   <ApplicationViews />
                </>
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
    
        <Route path="/login">
          <Login />
        </Route>
        
        <Route path="/register">
          <Register />
        </Route>
      </>
    ) 
}
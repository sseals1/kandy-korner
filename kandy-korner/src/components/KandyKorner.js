import React from "react"
import { NavBar } from "./nav/NavBar"
import { Route } from 'react-router-dom'
import { ApplicationViews } from "./ApplicationViews"


export const KandyKorner = () => {
    return(
        <>
        <NavBar />
        <ApplicationViews />
        </>
    ) 
}
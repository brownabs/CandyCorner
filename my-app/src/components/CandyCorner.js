import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationView from "./ApplicationView"



export default class CandyCorner extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationView />
            </React.Fragment>
        )
    }
}



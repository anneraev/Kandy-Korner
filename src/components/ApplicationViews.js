import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandiesList from "./candies/CandiesList";
import EmployeeList from "./employees/EmployeeList";
import StoreList from "./stores/StoreList";

import "./applicationViews.css";

export default class ApplicationViews extends Component {
    storesFromAPI = [
        { id: 1, name: "Nashvill North", address: "500 Wonka Avenue" },
        { id: 2, name: "Nashville South", address: "666 Nero Place" }
    ]

    employeesFromAPI = [
        { id: 1, name: "Bob" },
        { id: 2, name: "Greg" },
        { id: 3, name: "Julie" }
    ]

    candyTypesFromAPI = [
        { id: 1, name: "chocolate" },
        { id: 2, name: "hard" }
    ]

    candiesFromAPI = [
        { id: 1, name: "chocolate bar", candyTypeId: 1 },
        { id: 2, name: "jawbreaker", candyTypeId: 2 },
        { id: 3, name: "rock candy", candyTypeId: 2 }
    ]
    state = {
        employees: this.employeesFromAPI,
        stores: this.storesFromAPI,
        candyTypes: this.candyTypesFromAPI,
        candies: this.candiesFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <article className="kandy-korner">
                    <h1>Kandy Korner</h1>
                    <Route exact path="/" render={(props) => {
                        return <StoreList stores={this.state.stores} />
                    }} />
                    <Route path="/candies" render={(props) => {
                        return <CandiesList candies= {this.state.candies} candyTypes={this.state.candyTypes} />
                    }} />
                    <Route path="/employees" render={(props) => {
                        return <EmployeeList employees={this.state.employees} />
                    }} />
                </article>
            </React.Fragment>
        )
    }

}
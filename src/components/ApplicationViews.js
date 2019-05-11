import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandiesList from "./candies/CandiesList";
import EmployeeList from "./employees/EmployeeList";
import StoreList from "./stores/StoreList";

import "./applicationViews.css";

export default class ApplicationViews extends Component {
    state = {
        employees: [],
        stores: [],
        candyTypes: [],
        candies: [],
    }

    deleteCandy = id => {
        return fetch(`http://localhost:8088/candies/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:8088/candies`))
            .then(e => e.json())
            .then(candies => this.setState({
                candies: candies
            })
            )
    }

    componentDidMount() {
        const newState = {}
        fetch("http://localhost:8088/employees")
            .then(r => r.json())
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:8088/candies")
            .then(r => r.json()))
            .then(candies => newState.candies = candies)
            .then(() => fetch("http://localhost:8088/candyTypes")
            .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => fetch("http://localhost:8088/stores")
            .then(r => r.json()))
            .then(stores => newState.stores = stores)
            .then(() => this.setState(newState))
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
                        return <CandiesList candies= {this.state.candies} candyTypes={this.state.candyTypes} deleteCandy={this.deleteCandy}/>
                    }} />
                    <Route path="/employees" render={(props) => {
                        return <EmployeeList employees={this.state.employees} />
                    }} />
                </article>
            </React.Fragment>
        )
    }

}
import React, { Component } from "react";
import StoreList from "../stores/StoreList";
import EmployeeList from "../employees/EmployeeList";
import CandiesList from "../candies/CandiesList";

export default class KandyKorner extends Component {
    storesFromAPI = [
        {id: 1, name: "Nashvill North", address: "500 Wonka Avenue"},
        {id: 2, name: "Nashville South", address: "666 Nero Place"}
    ]

    employeesFromAPI = [
        {id: 1, name: "Bob"},
        {id: 2, name: "Greg"},
        {id: 2, name: "Julie"}
    ]

    candyTypesFromAPI = [
        {id: 1, name: "chocolate"},
        {id: 2, name: "hard"}
    ]

    candiesFromAPI = [
        {id: 1, name: "chocolate bar", candyTypeId: 1},
        {id: 2, name: "jawbreaker", candyTypeId: 2},
        {id: 3, name: "rock candy", candyTypeId: 2}
    ]
    state = {
        employees: this.employeesFromAPI,
        stores: this.storesFromAPI,
        candyTypes: this.candyTypesFromAPI,
        candies: this.candiesFromAPI
    }

    render() {
        return (
            <article classname ="kandy-korner">
            <h1>Kandy Korner</h1>
            <StoreList stores= {this.state.stores} />
            <EmployeeList employees= {this.state.employees} />
            <CandiesList candies= {this.state.candies} />
            </article>
        )
    }
}
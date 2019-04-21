import React, { Component } from "react";

export default class CandiesList extends Component {
    render() {
        return(
            this.props.candies.map(candy => <div key ={candy.id}>
            {candy.name}
            </div>)
        )
    }
}
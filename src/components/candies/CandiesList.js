import React, { Component } from "react";
export default class CandiesList extends Component {
    render() {
        return (
            <>
            <section className="candies">
            {this.props.candies.map(candy =>
            <div key={candy.id}>
                <span>
                {candy.name}
                </span>
                <span>{this.props.candyTypes.find(type => type.id === candy.candyTypeId).name}</span>
            </div>
            )}
            </section>
            </>
        )
    }
}
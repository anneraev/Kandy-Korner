import React, { Component } from "react";
export default class CandiesList extends Component {
    render() {
        return (
            <>
                <section className="candies">
                    {this.props.candies.map(candy =>
                    <React.Fragment>
                        <div key={candy.id}>
                            <span>
                                {candy.name}
                            </span>
                            <span>{this.props.candyTypes.find(type => type.id === candy.candyTypeId).name}</span>
                        </div>
                        <button
                            onClick={() => this.props.deleteCandy(candy.id)}
                            className="card-link">Discontinue</button>
                            </React.Fragment>
            )}
                </section>
            </>
        )
    }
}
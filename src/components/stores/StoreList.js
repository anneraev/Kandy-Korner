import React, { Component } from "react";

export default class Stores extends Component {
    render() {
        return (
            this.props.stores.map(store => <div key={store.id}>
            <span>{store.name}</span>
            <span>{store.address}</span>
            </div>
            )
        )
    }
}
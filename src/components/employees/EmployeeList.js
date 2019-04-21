import React, { Component } from "react";

export default class EmployeesList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                    {employee.name}
                    </div>
                    )
            }
            </section>
        )
    }
}
import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        
        //you can write js inside of this and then apply it to the return section
        return (

            <section className="employees">
            <h3>Employees</h3>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name}
                            <button onClick={() => { //on click function doesn't need an id property
                                    this.props.fireEmployee(employee.id)
                                }
                                }
                            >Fire</button>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList
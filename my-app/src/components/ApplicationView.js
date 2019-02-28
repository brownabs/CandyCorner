import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import EmployeeList from './EmployeeList';
import StoreList from './StoreList';
import CandyList from './CandyList';

//application views manages state
//“Keys only need to be unique among sibling elements in the same array. 
// They don’t need to be unique across the whole application or even a single component.

export default class ApplicationView extends Component {

    state = { //maybe a TA, Steve question
        stores: [],
        employees: [],
        candyTypes: [],
        candyArray: []
    }
//where the state is where you have to modify it
    fireEmployee = (id) => {
        fetch(`http://localhost:5002/employeeArray/${id}`, {
            "method": "DELETE"
    })
    .then(() => fetch("http://localhost:5002/employeeArray"))
    .then(r => r.json())
    .then(employees => this.setState({employees: employees}))
    }

    discontinueCandy = (id) => {
        fetch(`http://localhost:5002/candyArray/${id}`, {
            "method": "DELETE"
    })
    .then(() => fetch("http://localhost:5002/candyArray"))
    .then(r => r.json())
    .then(candy => this.setState({candyArray: candy}))
    }
    componentDidMount() { //okay you're skeleton is ready
    console.log("componentDidMount -- ApplicationViews")
        const newState = {}

        fetch("http://localhost:5002/storeArray")
            .then(r => r.json())
            .then(bill => newState.stores = bill) //
            .then(() => fetch("http://localhost:5002/employeeArray")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/candyTypeArray")
            .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => fetch("http://localhost:5002/candyArray")
            .then(r => r.json()))
            .then(candies => newState.candyArray = candies) //new.State.candyArray needs to have the same name as 
            .then(() => this.setState(newState))
    }

    render() {
        console.log("render -- ApplicationViews")
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList 
                    fireEmployee={this.fireEmployee}
                    employees={this.state.employees} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    return <CandyList 
                    discontinueCandy={this.discontinueCandy}
                    TacoCandy={this.state.candyArray} 
                                      candyTypes={this.state.candyTypes}
                         />
                }} />
            </React.Fragment>
            )
        }
}
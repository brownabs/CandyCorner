import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import EmployeeList from './EmployeeList';
import StoreList from './StoreList';
import CandyList from './CandyList';
import StoreManager from '../modules/StoreManager';
import EmployeeManager from '../modules/EmployeeManager';
import CandyManager from '../modules/CandyManager';
import CandyTypeManager from '../modules/CandyTypeManager';

//where the state is where you have to modify it
//application views manages state
//“Keys only need to be unique among sibling elements in the same array. 
// They don’t need to be unique across the whole application or even a single component.

export default class ApplicationView extends Component {

    state = { 
        stores: [],
        employees: [],
        candyTypes: [],
        candyArray: []
    }

    fireEmployee = (id) => {

        return EmployeeManager.removeAndList(id)
            .then(() => EmployeeManager.getAllEmployees())
            .then(employees => this.setState({ employees: employees }))

    }

    discontinueCandy = (id) => {
      
        CandyManager.removeAndListCandy(id)
        .then(() => CandyManager.getAllCandies())
        .then(candy => this.setState({ candyArray: candy }))
    }

    componentDidMount() { //okay you're skeleton is ready
        console.log("componentDidMount -- ApplicationViews")
        const newState = {}

        StoreManager.getAllStores()
            .then(bill => newState.stores = bill)

        EmployeeManager.getAllEmployees()
            .then(employees => newState.employees = employees)

        CandyManager.getAllCandies()
            .then(candies => newState.candyArray = candies)

        CandyTypeManager.getAllCandyTypes()
            .then(candyTypes => newState.candyTypes = candyTypes)

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
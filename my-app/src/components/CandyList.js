import React, { Component } from 'react';
import Candy from "./Candy" //Candy is not information but a function 

class CandyList extends Component {
    render() {
        console.log("render -- CandyList")
        return (
            <section className="candies">
                 <h3>Candy</h3>
                {
                    this.props.TacoCandy.map(candy => //could possibly be a forEach
                        //think of candyObject as a variable that holds the argument we're passing through 
                        
                        <Candy
                        candyTypes = {this.props.candyTypes}
                        candyObject = {candy} //curly braces are for React, in js it would be candyObject = candy
                        discontinueCandy = {this.props.discontinueCandy} //must call this because Candy.js is going to use it, otherwise it's undefined

                         />
                    )
                }
            </section>
        )
    }
}

export default CandyList


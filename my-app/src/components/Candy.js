import React, { Component } from 'react'

class Candy extends Component {
    render() {
        let candy = this.props.candyObject
        let candyTypes = this.props.candyTypes

        let type = candyTypes.find(typeObject => { 
           return typeObject.id === candy.candyType
        }).type 
        console.log(type)

        //had to put it inside of a div, otherwise it would'nt know which one to return
        return (
            <div>
            <h4 key={`candy--${candy.id}`}>{candy.name}</h4> 
            <p key={`candyType--${candy.id}`}>{type}</p>
            <button onClick={() => { //on click function doesn't need an id property
                                    this.props.discontinueCandy(candy.id)
                                }
                            }
                            >Discontinue Candy</button>
            </div>  
        )
    }
}

export default Candy
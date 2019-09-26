import React, {Component} from 'react'
import Card from './Card';
import Navigator from './Navigator'

import  data from '../data'

export default class MainBody extends Component{
    constructor(props){
        super(props);

        this.state = {
            cardIndex: 1
        }
    }

    cardIncrement = () => {
        this.setState({
            cardIndex: this.state.cardIndex +=1
        })
         if (this.state.cardIndex === data.length +1){
            this.setState({
                cardIndex: 1
            })
        }
    }

   cardDecrement = () => {
    this.setState({
        cardIndex: this.state.cardIndex -= 1
    })
        if(this.state.cardIndex === 0 ){
            this.setState({
                cardIndex: data.length
            })     
        }
   }

   addNewCard = () => {

   }

    render () {
        return(
            <section className="fill">
                <div className="container">
                    <Card cardIndex={this.state.cardIndex} data={data}/>

                    <Navigator  
                        cardDecrement={this.cardDecrement}
                        cardIncrement={this.cardIncrement}
                    />
                </div>
            </section>
        )
    }
}